/*

  Title: Normalized burn ratio and severity index for fires (1/3)
  Author: Jeff Howarth

  Purpose:

  To estimate variation in the intensity and severity of fires with
  Sentinel 2 collection by adapting the EE Catalog starter script.

*/

// --------------------------------------------------------
// Cloud mask function provided by starter script
// --------------------------------------------------------

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

  return image
    .updateMask(mask)
    .multiply(0.0001);            // Changed this to match scale value in catalog
}

// --------------------------------------------------------
// Initialize config dictionary.
// --------------------------------------------------------

var config = {
  poi: ee.Geometry.Point([-122.193577, 37.011804]),
  month: 9,
  year: 2020,
  bands: ['B12', 'B8'],
  newBandNames: ['SWIR','NIR']
};

print('1', config);

// --------------------------------------------------------
// Load, filter, and reduce collections.
// --------------------------------------------------------

// Write a function for the process chain.

var makeConditions = function(month, year) {
  return ee.ImageCollection('COPERNICUS/S2_SR')
    .filterBounds(config.poi)
    .filter(
      ee.Filter.calendarRange(month,month,'month')
      )
    .filter(ee.Filter.calendarRange(year,year,'year'))
    // Pre-filter to get less cloudy granules.
    .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE',20))
    .map(maskS2clouds)
    .median()
    .select(config.bands,config.newBandNames)
    ;
};

// Insert new item (postConditions) in config dictionary as output of function.

config.postConditions = makeConditions(config.month, config.year);

// Insert new item (preConditions) in config dictionary as output of function.

config.preConditions = makeConditions(config.month, config.year - 1);

print('2', config);

// -------------------------------------------------------------
// Estimate normalized burn ratio for pre- and post- conditions.
// -------------------------------------------------------------

// Write a function to estimate normalized burn ratio.

var burnRatio = function(image) {
  return image.normalizedDifference(['NIR','SWIR']);
};

// Apply function to pre- and post- conditions and insert results into dictionary.

config.br_post = burnRatio(config.postConditions);
config.br_pre = burnRatio(config.preConditions);

print('3', config);

// -------------------------------------------------------------
// Estimate burn severity index.
// -------------------------------------------------------------

// Subtract NBR values of post-conditions from values of pre-conditions.
// Scientists often use delta symbol or word often to denote 'change'.

config.delta_br = config.br_pre.subtract(config.br_post);

print('4', config);

// -------------------------------------------------------------
// Set up map to visualize results.
// -------------------------------------------------------------

// Center map on Davenport, CA.

Map.centerObject(config.poi, 10);

// Change base layer to TERRAIN.

Map.setOptions('TERRAIN');

// Insert viz parameters into config.

config.dNBR_vis = {
  min: -1,
  max: 1,
  palette: ['blue','white','red']
};

// Visualize severity index as map layer.

Map.addLayer(
  config.delta_br,
  config.dNBR_vis,
  'Change in Burn Severity Index',
  false,
  0.6
  )
;
