// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Title:   dataset_comparison.js
// Author:  Jeff Howarth
// Date:    1/18/2022
// Purpose: To make quick comparisons between S2, L8, and Terra (MODIS)
//
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// ------------------------------------------------------------------
// Set up map UI
// ------------------------------------------------------------------

// Center map on a location and define zoom level.

Map.setCenter(-119.423005, 36.351524, 9);

// Use the 'TERRAIN' basemap.

Map.setOptions('TERRAIN');

// ------------------------------------------------------------------
// Define key (and recurring) terms
// ------------------------------------------------------------------

// Make separate visualization dictionary
// (so main dictionary can reference it).

var vizConfig = {                       // Visualization dictionary
  min: 0.0,                             // Min display value
  max: 0.3,                             // Max display value
  bands_S2: ['B4','B3','B2'],           // RGB composite for S2
  bands_L8: ['SR_B4','SR_B3','SR_B2'],  // RGB composite for L8
};

// Make main config dictionary to store recurring arguments.

var config = {                          // General dictionary
  poi: Map.getCenter(),                 // Point of interest (map center)
  startDate: '2020-06-01',              // Begin date for time window
  endDate: '2020-08-01',                // End date for time window
  S2_imageViz: {                        // Vizualization variables for S2
    min: vizConfig.min,
    max: vizConfig.max,
    bands: vizConfig.bands_S2
    },
  L8_imageViz: {                        // Visualization variables for L8
    min: vizConfig.min,
    max: vizConfig.max,
    bands: vizConfig.bands_L8
  },
  cloud: 20                             // Cloud cover threshold for filter
};

// Demonstrate how to call dictionary values with key.
print('start test', config.startDate);

// ------------------------------------------------------------------
// S2 workflow
// ------------------------------------------------------------------

// LOAD image collection from 'COPERNICUS/S2_SR'.

var image_S2 = ee.ImageCollection('COPERNICUS/S2_SR');

// INSPECT first image to Console.

print('S2 collection', image_S2.first());

// FILTER, REDUCE, SCALE chain

var filtered_S2 = image_S2
    .filterBounds(config.poi)                         // Filter by location (use the map center).
    .filterDate(config.startDate,config.endDate)      // Filter by date range ('2020-06-01','2020-08-01').
    .filter(                                          // filter by image property (to remove cloudy images)
      ee.Filter.lt(                                   // criteria (less than)
        'CLOUDY_PIXEL_PERCENTAGE',                    // property name
        config.cloud))                                // property value
    .median()                                         // REDUCE image collection by median
    .divide(10000)                                    // SCALE divide each pixel value by 10000
;

// INSPECT results

print('Filtered S2', filtered_S2);

// DISPLAY image as a map layer.

Map.addLayer(filtered_S2, config.S2_imageViz, 'S2');

// ------------------------------------------------------------------
// L8 workflow
// ------------------------------------------------------------------

// LOAD AND FILTER

var image_L8 = ee.ImageCollection('LANDSAT/LC08/C02/T1_L2')   // LOAD image collection
  .filterBounds(config.poi)                                   // FILTER by same location as above.
  .filterDate(config.startDate, config.endDate)               // FILTER by same date range as above.
  .filter(                                                    // FILTER by image property (to remove cloudy images)
    ee.Filter.lt(                                             // filter criteria (less than)
      'CLOUD_COVER',                                          // property name
      config.cloud))                                          // property value
;

// INSPECT the filtered collection

print('L8',image_L8);

// To scale L8 values, use a module function.

var image_tools = require(                                // Load module.
  'users/jhowarth/eePrimer:modules/image_tools.js'        // from this address.
);

// SCALE and REDUCE image collection

var scaled_L8 = image_L8                                  // Construct new object for scaled collection.
  .map(image_tools.applyScaleFactors_L8)                  // Apply scalar function to each image in collection.
  .median()                                               // REDUCE image collection by median value.
;

// INSPECT result

print('Scaled collection', scaled_L8);


// DISPLAY results as a map layer.

Map.addLayer(scaled_L8, config.L8_imageViz, 'L8');
