[Open in Code Editor](https://code.earthengine.google.com/5b0e8f6607b79f017ae7dfb6b9189eb8){target=_blank}  

```js
//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  Title:        starter_L7.js
//  Author:       Jeff Howarth
//  Last edited:  10/18/2023
//
//  Starter for Landsat 7 collection. 
//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var geometry = 
    ee.Geometry.Point([37.34715255366928, -3.0521293499524087]);

Map.centerObject(geometry, 8);

// ------------------------------------------------------------------------
//  Scale and offset
// ------------------------------------------------------------------------

function scale_L7(image) {
  var opticalBands = image.select('SR_B.').multiply(0.0000275).add(-0.2);
  var thermalBand = image.select('ST_B6').multiply(0.00341802).add(149.0);
  return image.addBands(opticalBands, null, true)
              .addBands(thermalBand, null, true);
}

// ------------------------------------------------------------------------
//  Cloud mask 
// ------------------------------------------------------------------------

function cloudMask_L7(image) {
  var qa = image.select('QA_PIXEL');

  var dilatedCloudBitMask = 1 << 1;  
  var cloudBitMask = 1 << 3;
  var cloudShadowBitMask = 1 << 4;
  
  // Both flags shoudl be set to zero, indicating clear conditions. 
  
  var mask = qa.bitwiseAnd(cloudBitMask).eq(0)
      .and(qa.bitwiseAnd(cloudShadowBitMask).eq(0))
      .and(qa.bitwiseAnd(dilatedCloudBitMask).eq(0))
      ;
  
  return image.updateMask(mask);
}

// ------------------------------------------------------------------------
//  Filter ingredients   
// ------------------------------------------------------------------------

var output = ee.ImageCollection('LANDSAT/LE07/C02/T1_L2')
  .filterBounds(geometry)
  // .filter(ee.Filter.calendarRange(2000, 2000, 'year'))     // January 1999–April 2022
  .filter(ee.Filter.calendarRange(1, 3, 'month'))
  // .filter(ee.Filter.calendarRange(1, 1, 'day_of_year'))
  // .filter(ee.Filter.lt('CLOUD_COVER', 20))
  .map(scale_L7)
  .map(cloudMask_L7)
  .median()
;

print(
  output
  )
;

// ------------------------------------------------------------------------
//  Display  
// ------------------------------------------------------------------------

var viz = {
  bands: ['SR_B3', 'SR_B2', 'SR_B1'],
  min: 0.0,
  max: 0.3,
};

Map.addLayer(output, viz, 'Output', 1);

```