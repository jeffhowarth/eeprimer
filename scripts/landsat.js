/*
    TITLE:  Changes in Aral Sea with Landsat
    AUTHOR: Jeff Howarth
    UPDATE: 3/1/2022

    PURPOSE:  In this lesson, we explore the Landsat collections that
    are available through the Earth Engine Data Catalog. After
    reviewing a little history and getting acquainted with some of
    the specialist language/jargon associated with Landsat, we will
    write a script to visualize changes in the Aral Sea over the last
    30 years. Working with Surface Reflectance products in Collection
    Two, we will use a function to scale the data, employ a new method
    to filter by date, write a custom function to filter different Landsat
    collections, and examine visible changes in both the landscape and the
    datasets for studying it.
*/


// Function to apply scaling factors for Landsat Collection 2 Tier 1.

function applyScaleFactors(image) {
  var opticalBands = image.select('SR_B.').multiply(0.0000275).add(-0.2);
  var thermalBand = image.select('ST_B.*').multiply(0.00341802).add(149.0);
  return image.addBands(opticalBands, null, true)
              .addBands(thermalBand, null, true);
}

// Create poi for Aral Sea.

var poi = ee.Geometry.Point([59.50328480546582, 44.43588474484646]);

// Load, filter, and reduce the L4 image collection.

var L4 = ee.ImageCollection('LANDSAT/LT04/C02/T1_L2')
    .filterBounds(poi.buffer(200 * 1000))
    .filter(ee.Filter.calendarRange(1989, 1989, 'year'))
    .filter(ee.Filter.calendarRange(8, 10, 'month'))
    .filter(ee.Filter.lt('CLOUD_COVER', 30))
    .map(applyScaleFactors)
    .mean()
    ;

// Print to console.

print(
  'L4',
  // L4.size(),
  L4);

// Write a function to load, filter, and reduce an image collection.

var makeLandsatImage = function(ic, year) {
  var collection = ee.ImageCollection(ic)
    .filterBounds(poi.buffer(200 * 1000))
    .filter(ee.Filter.calendarRange(year, year, 'year'))
    .filter(ee.Filter.calendarRange(6, 9, 'month'))
    .filter(ee.Filter.lt('CLOUD_COVER', 20));
  print(ic + ' ' + String(year), collection.size());
  return collection
    .map(applyScaleFactors)
    .median()
    ;
};

// Apply function to make a series of snapshots.

var L4_1989 = makeLandsatImage('LANDSAT/LT04/C02/T1_L2', 1989);

var L5_1989 = makeLandsatImage('LANDSAT/LT05/C02/T1_L2', 1989);

var L5_1994 = makeLandsatImage('LANDSAT/LT05/C02/T1_L2', 1994);

var L5_1999 = makeLandsatImage('LANDSAT/LT05/C02/T1_L2', 1999);

var L7_2004 = makeLandsatImage('LANDSAT/LE07/C02/T1_L2', 2004);

var L7_2009 = makeLandsatImage('LANDSAT/LE07/C02/T1_L2', 2009);

var L8_2014 = makeLandsatImage('LANDSAT/LC08/C02/T1_L2', 2014);

var L8_2019 = makeLandsatImage('LANDSAT/LC08/C02/T1_L2', 2019);

// Define viz parameters for Landsat collections.

var viz = {
  bands: ['SR_B3', 'SR_B2', 'SR_B1'],
  min: 0.0,
  max: 0.3,
};

var viz_L8 = {
  bands: ['SR_B4', 'SR_B3', 'SR_B2'],
  min: 0.0,
  max: 0.3,
};

// Set up map display.

Map.centerObject(poi, 7);
Map.setOptions('HYBRID');


// Add layers.

Map.addLayer(L4_1989, viz, 'L4_1989',0);
Map.addLayer(L5_1989, viz, 'L5_1989',0);
Map.addLayer(L5_1994, viz, 'L5_1994',0);
Map.addLayer(L5_1999, viz, 'L5_1999',0);
Map.addLayer(L7_2004, viz, 'L7_2004',0);
Map.addLayer(L7_2009, viz, 'L7_2009',0);
Map.addLayer(L8_2014, viz_L8, 'L8_2014',0);
Map.addLayer(L8_2019, viz_L8, 'L8_2019',0);
