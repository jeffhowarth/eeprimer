/*

    TITLE:        Simple fire explorer with MODIS and S2
    AUTHOR:       Put your name (adaped from another name)
    LAST UPDATE:  3/2/2022

    PURPOSE:      To make a simple global fire explorer that uses
                  MODIS and Sentinel-2 to investigate fires anywhere
                  in the world at two different scales.
*/

// ------------------------------------------------------
// Cloud mask function that came with S2 starter script.
//  Also scales the data.
// ------------------------------------------------------

/**
 * Function to mask clouds using the Sentinel-2 QA band
 * @param {ee.Image} image Sentinel-2 image
 * @return {ee.Image} cloud masked Sentinel-2 image
 */
function maskS2clouds(image) {
  var qa = image.select('QA60');

  // Bits 10 and 11 are clouds and cirrus, respectively.
  var cloudBitMask = 1 << 10;
  var cirrusBitMask = 1 << 11;

  // Both flags should be set to zero, indicating clear conditions.
  var mask = qa.bitwiseAnd(cloudBitMask).eq(0)
      .and(qa.bitwiseAnd(cirrusBitMask).eq(0));

  return image.updateMask(mask).multiply(0.0001);
}

// ------------------------------------------------------
// Define key terms (variables)
// ------------------------------------------------------

var month = 10;
var year = 2020;

// To change point of interest, delete line 45 and use Geometry tool to create a new point

var geometry = ee.Geometry.Point([-122.18691623105146, 37.068759958681305]);

// ------------------------------------------------------
// Process the S2 image collection
// ------------------------------------------------------

// Load and filter

var S2 = ee.ImageCollection('COPERNICUS/S2_SR')      // Load image collection
  .filterBounds(geometry)                                 // Filter by location
  .filter(ee.Filter.calendarRange(year, year, 'year'))    // Flter by year
  .filter(ee.Filter.calendarRange(month,month,'month'))   // Filter by month
  // Pre-filter to get less cloudy granules.
  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE',20))     // Filter cloudy images
  .map(maskS2clouds)                                      // Apply cloud mask and scale.
  ;

print('S2 collection', S2.size(), S2);

// Define viz paramters

var visualization = {
  min: 0.0,
  max: 0.3,
  bands: ['B12', 'B8', 'B3'],       // SWIR2, NIR, Green RGB
};

// ------------------------------------------------------
// Process the MODIS  collection
// ------------------------------------------------------

// Load and filter the daily MODIS dataset.

var dataset = ee.ImageCollection('MODIS/006/MOD09GA')
  .filter(ee.Filter.calendarRange(year, year, 'year'))    // Flter by year
  .filter(ee.Filter.calendarRange(month, month,'month'))    // Filter by month
  .select(['sur_refl_b07', 'sur_refl_b02', 'sur_refl_b04']) // For SWIR, NIR, G RGB composite
  .mean()
  ;

print('DATASET CHECK', dataset);

// Load and filter the 8-day average.

var dataset2 = ee.ImageCollection('MODIS/006/MOD09A1')
  .filter(ee.Filter.calendarRange(year, year, 'year'))    // Flter by year
  .filter(ee.Filter.calendarRange(month,month,'month'))   // Filter by month
  .select(['sur_refl_b07', 'sur_refl_b02', 'sur_refl_b04'])
  .mean()
  ;

print('DATASET 2 CHECK', dataset2);

// Define min and max diplay range.

var imageViz = {
  min: -100.0,
  max: 3000.0,
};

// ------------------------------------------------------
// Compose the map
// ------------------------------------------------------

// Center map before adding layers.

Map.centerObject(geometry, 8);

// Use Terrain baselayer.

Map.setOptions('TERRAIN');

// Add layers.

Map.addLayer(dataset, imageViz, 'Daily MODIS',0);
Map.addLayer(dataset2, imageViz, '8 day MODIS');
Map.addLayer(S2.median(), visualization, 'S2 false color');
