/*

  Title: FIRMS
  Author: Jeff Howarth

  Purpose:

  To map all fires on Earth for a defined time frame by adapting
  a starter script from the Earth Engine Data Catalog.

*/

// -----------------------------------------------------------------------------
// Starter script from Earth Engine data catalog.
// -----------------------------------------------------------------------------

// Uncomment to run.

// var dataset = ee.ImageCollection('FIRMS').filter(
//     ee.Filter.date('2018-08-01', '2018-08-10'));
// var fires = dataset.select('T21');
// var firesVis = {
//   min: 325.0,
//   max: 400.0,
//   palette: ['red', 'orange', 'yellow'],
// };
// Map.setCenter(-119.086, 47.295, 6);
// Map.addLayer(fires, firesVis, 'Fires');

// This is helpful when getting started with a new dataset, but we will need
// to add comments and customize some worflows for our purposes.

// -----------------------------------------------------------------------------
// STEP 1: Create config dictionary (something to store outputs and parameters).
// -----------------------------------------------------------------------------

// Enter parameters for date filters.

var config = {
  monthStart: 1,
  monthEnd: 12,
  year: 2021
};

print('1', config);                                   // Print config to Console

// -----------------------------------------------------------------------------
// STEP 2: Load and filter FIRMS dataset
// -----------------------------------------------------------------------------

config.dataset = ee.ImageCollection('FIRMS')          // Collection id
  .filter(
    ee.Filter.calendarRange(                          // Change date filter to calendar range
      config.year,
      config.year,
      'year'))
  .filter(
    ee.Filter.calendarRange(                          // Change date filter to calendar range
      config.monthStart,
      config.monthEnd,
      'month'))
  .select('T21')                                      // Select temp (T21) band
  ;

print('2', config);

// -----------------------------------------------------------------------------
// STEP 3: Reduce collection to image and convert units.
// -----------------------------------------------------------------------------

var reduce_max_convert_K2F = function(ic) {               // Configure function.
  return ic
    .max()                                                // REDUCE to mean
    .subtract(273.15).multiply(9).divide(5).add(32)       // CONVERT from Kelvin to Fahrenheiht
    ;
};

config.fires_f = reduce_max_convert_K2F(config.dataset);  // Implement function.

print('3', config);

// -----------------------------------------------------------------------------
// STEP 4: Create vis paramters for temperature intensity.
// -----------------------------------------------------------------------------

// Add viz parameters to config.

config.firmsVis = {
  min: 150.0,
  max: 250.0,
  palette: ['red', 'orange', 'yellow'].reverse(),
};

print('4', config);

// Set zoom before adding layers.

Map.setCenter(-30,0,3);

Map.setOptions('HYBRID');

// Import cart module to make legend.

var cart = require('users/jhowarth/eePrimer:modules/cart.js');

// Make legend and store in config dictionary.

config.legend = cart.makeGradientLegend(
  config.firmsVis,
  'Fire intensity temp (F)',
  'bottom-left'
  )
;

print('5', config);

// -----------------------------------------------------------------------------
// STEP 5: Compose map and add legend.
// -----------------------------------------------------------------------------

// Add layers.

Map.addLayer(config.fires_f, config.firmsVis, 'Fire intensity from FIRMS');

// Add legend.

Map.add(config.legend);
