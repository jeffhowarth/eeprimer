/*

  TITLE:   Sea surface temperature anomalies
  AUTHOR:  Jeff Howarth
  DATE:    1/25/2022

  Purpose: To estimate anomalies in SST during El Nino and La Nina years.

*/


// Set up the config dictionary

var config = {
  month_start: 1,
  month_end: 2,
  year_elNino: 2016,
  year_laNina: 2011,
};

print('0',config);

// A function to load and filter dataset.

var makeImageCollection = function(start,end,unit) {
  return ee.ImageCollection("NASA/OCEANDATA/MODIS-Aqua/L3SMI")
    .filter(
      ee.Filter.calendarRange(
        start,
        end,
        unit))
    .select('sst');
};

// Produce long term average for Jan and Feb months

config.long_term_average = makeImageCollection(
  config.month_start,               // Use this as the 'start'
  config.month_end,                 // Use this as the 'end'
  'month');                         // Use this as the 'unit'

print('1',config);

// Write function to reduce the image collection (mean) and convert from C to F.

var convert_c2f = function(ic) {
  return ic
    .mean()
    .multiply(9).divide(5).add(32);
};

// Implement function to reduce and convert from C to F (implement function).

config.lta_converted_to_F =                        // Output (store as this item in config).
  convert_c2f(                      // Apply this function.
    config.long_term_average        // Use this 'ic' in the function.
    );

print('2', config);

// Produce average sst for Jan - Feb in just the El Nino year.

config.year_average_el_nino_converted_to_F = convert_c2f(
  config.long_term_average
    .filter(
      ee.Filter.calendarRange(
        config.year_elNino,
        config.year_elNino,
        'year')));

print('3', config);

// Estimate anomalies (by subtracting long term average from El Nino average).

config.anomaly_el_nino = config.year_average_el_nino_converted_to_F
  .subtract(config.lta_converted_to_F);

print('4', config);

// Produce average sst for Jan - Feb in just the La Nina year.

config.year_average_la_nina_converted_to_F = convert_c2f(
  config.long_term_average
    .filter(
      ee.Filter.calendarRange(
        config.year_laNina,
        config.year_laNina,
        'year')));

print('5', config);

// Estimate anomalies (by subtracting long term average from La Nina average).

config.anomaly_la_nina = config.year_average_la_nina_converted_to_F
  .subtract(config.lta_converted_to_F);

print('6', config);

// ----------------------
// Compose the map layout
// ----------------------

var palettes = require('users/gena/packages:palettes');

print('Community palettes', palettes);

config.sst_viz = {
  min: -9,
  max: 9,
  palette: palettes.crameri.vik[25]
};

print('7', config);

Map.setOptions('HYBRID');
Map.setCenter(-180,0,3);
Map.addLayer(config.anomaly_la_nina, config.sst_viz, 'SST anomaly in 2011');
Map.addLayer(config.anomaly_el_nino, config.sst_viz, 'SST anomaly in 2016');

// --------------------------------------------------------------------
// Configure and compose labels.
// --------------------------------------------------------------------

// style dictionary for labels

var styles = {
  title: {
    fontSize: '24px',
    fontWeight: 'bold'
    },
  credit: {
    fontSize: '10px',
    color: '#999999',
    whiteSpace: 'pre'
    // backgroundColor: background
    }
};

// Create labels
// -------------

var title = ui.Label( {
  value: 'El Nino Southern Oscillation',
  style: styles.title,
  // targetUrl: {},
  // imageUrl:  {}
});


var credits = ui.Label( {
  value: 'CREDITS:\nJeff Howarth\nGeography Department\nMiddlebury College',
  style: styles.credit,
  // targetUrl: 'https://github.com/sofiaermida/Landsat_SMW_LST'
});

// --------------------------------------------------------------------
// Initialize legends.
// --------------------------------------------------------------------

var cart = require('users/jhowarth/eePrimer:modules/cart.js');

// SST Anomaly legend
// ------------------

var sst_a_legend = cart                                                     // module
  .makeGradientLegend(                                                // function
    config.sst_viz,                                                      // viz parameters
    'DIFFERENCE FROM AVERAGE\ndegrees (F)',                          // legend title
    'bottom-left'                                                     // position on map
  )
;

// -------------------------------------------------------------------
// Initialize panel for marginalia.
// -------------------------------------------------------------------

// Configure  panel.

var panel = ui.Panel                      // Initialize panel widget.
  (
    {
      widgets:                            // List widgets to add to panel.
        [
          title,
          sst_a_legend,
          credits

        ],
      layout:
        ui.Panel.Layout.flow('vertical'), // Widgets flow in vertical direction.
      style:
        {
          width: '250px',                 // Width of panel
          height: '250px',                // Height of panel
          position: 'top-left'            // Position of panel on screen.
        }
    }
);

// Add panel to map.

Map.add(panel);                           // Add panel to the Map UI.


// Print config dictionary to see how it was populated

print('Ending configuration', config);
