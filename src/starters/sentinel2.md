## Mission  

[Sentinel-2 Mission Guide](https://sentinels.copernicus.eu/web/sentinel/missions/sentinel-2){target=_blank}  

---  

## Bands  

![Sentinel Bands](https://landsat.gsfc.nasa.gov/wp-content/uploads/2015/06/Landsat.v.Sentinel-2.png)

[_Sentinel Band Chart_](https://landsat.gsfc.nasa.gov/article/sentinel-2a-launches-our-compliments-our-complements/){target=_blank}  

---  

## Starter Code  

[Open in Code Editor](https://code.earthengine.google.com/46de2727483a407d266e2eca745c0d31){target=_blank}

```js
//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  Title:        starter_S2.js
//  Author:       Jeff Howarth
//  Last edited:  10/24/2023
//
//  Starter for Sentinel 2 collection. 
//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var geometry = 
    ee.Geometry.Point([37.34715255366928, -3.0521293499524087]);

Map.centerObject(geometry, 8);

// ------------------------------------------------------------------------
//  Scale and offset  
// ------------------------------------------------------------------------

function scale_S2(image) {

  return image.multiply(0.0001);
} 

// ------------------------------------------------------------------------
//  Cloud mask  
// ------------------------------------------------------------------------

function cloudMask_S2 (image) {
  var qa = image.select('QA60');
  
  var cloudBitMask = 1 << 10;
  var cirrusBitMask = 1 << 11;
  
  var SCL = image.select('SCL')
    .remap(
      [1,2,3,4,5,6,7,8,9,10,11],
      [0,1,0,1,1,1,0,0,0, 0, 1]
    );

  
  // Both flags shoudl be set to zero, indicating clear conditions. 
  
  var mask = qa.bitwiseAnd(cloudBitMask).eq(0)
      .and(qa.bitwiseAnd(cirrusBitMask).eq(0))
      ;
  
  return image
    .updateMask(mask)
    .updateMask(SCL);
  
}

// ----------------------------------------------------------------------
// Filter ingredients
// ----------------------------------------------------------------------


var output = ee.ImageCollection("COPERNICUS/S2_SR_HARMONIZED")
  .filterBounds(geometry)
  // .filter(ee.Filter.calendarRange(2020, 2020, 'year'))
  .filter(ee.Filter.calendarRange(1, 3, 'month')) 
  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE',20))
  .map(cloudMask_S2)
  .map(scale_S2)
  .median()

;

print(output);

// ----------------------------------------------------------------------
// Display
// ----------------------------------------------------------------------

var viz_bands = ['B4', 'B3', 'B2'];

var viz = {
  bands: viz_bands,
  min: 0.0,
  max: 0.3,
};

Map.addLayer(output, viz, 'From Sentinel 2 Collection');
```