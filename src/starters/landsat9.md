[Open in Code Editor](https://code.earthengine.google.com/c41b38e211878efcd0c832485fea7272){target=_blank}

```js
//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  Title:        starter_L9.js
//  Author:       Jeff Howarth
//  Last edited:  10/18/2023
//
//  Starter for Landsat 9 collection. 
//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var geometry = 
    ee.Geometry.Point([37.34715255366928, -3.0521293499524087]);

Map.centerObject(geometry, 8);

// ------------------------------------------------------------------------
//  Scale and offset  
// ------------------------------------------------------------------------

function scale_L9(image) {
  var opticalBands = image.select('SR_B.').multiply(0.0000275).add(-0.2);
  var thermalBands = image.select('ST_B.*').multiply(0.00341802).add(149.0);
  return image.addBands(opticalBands, null, true)
              .addBands(thermalBands, null, true);
} 

// ------------------------------------------------------------------------
//  Cloud mask  
// ------------------------------------------------------------------------

function cloudMask_L9(image) {
  var qa = image.select('QA_PIXEL');

  var dilatedCloudBitMask = 1 << 2;  
  var cirrusBitMask = 1 << 2;  
  var cloudBitMask = 1 << 3;
  var cloudShadowBitMask = 1 << 4;
  
  // Both flags shoudl be set to zero, indicating clear conditions. 
  
  var mask = qa.bitwiseAnd(cloudBitMask).eq(0)
      .and(qa.bitwiseAnd(cloudShadowBitMask).eq(0))
      .and(qa.bitwiseAnd(dilatedCloudBitMask).eq(0))
      .and(qa.bitwiseAnd(cirrusBitMask).eq(0))
      ;
  
  return image.updateMask(mask);
  
}

// ----------------------------------------------------------------------
// Filter ingredients
// ----------------------------------------------------------------------

var output = ee.ImageCollection("LANDSAT/LC09/C02/T1_L2")
  .filterBounds(geometry)
  // .filter(ee.Filter.calendarRange(2022, 2022, 'year'))
  .filter(ee.Filter.calendarRange(1, 3, 'month')) 
  // .filter(ee.Filter.calendarRange(1, 1, 'day_of_year')) 
  // .filter(ee.Filter.lt('CLOUD_COVER',20))
  .map(scale_L9)
  .map(cloudMask_L9)
  .median()
;

print(output);

// ----------------------------------------------------------------------
// Display
// ----------------------------------------------------------------------

var viz = {
  bands: ['SR_B4', 'SR_B3', 'SR_B2'],
  min: 0.0,
  max: 0.25,
};

Map.addLayer(output, viz, 'Landsat 9 imagery');

```