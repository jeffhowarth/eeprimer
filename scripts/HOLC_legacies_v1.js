//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  Problem:      HOLC legacites
//  Date:         4/19/2022
//  Author:       Jeff Howarth
//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Load modules

var imageTools = require('users/jhowarth/eePrimer:modules/image_tools.js');
var cart = require('users/jhowarth/eePrimer:modules/cart.js');
var customBase = require('users/jhowarth/eePrimer:modules/darkBase.js');
var palettes = require('users/gena/packages:palettes');

// -------------------------------------------------------------------
// Load and filter feature collection.
// -------------------------------------------------------------------

// Buffer poi by 10 kilometers

var studyRegion = geometry.buffer(10 * 1000);

// Import feature collection of HOLC maps from 'projects/ee-primer/assets/holc_numeric_grades'

var holc = ee.FeatureCollection('projects/ee-primer/assets/holc_numeric_grades')
  .filterBounds(studyRegion);

// -------------------------------------------------------------------
// Load image collection.
// -------------------------------------------------------------------

// Import module for LST computation from 'users/sofiaermida/landsat_smw_lst:modules/Landsat_LST.js'

var LandsatLST = require('users/sofiaermida/landsat_smw_lst:modules/Landsat_LST.js');

// Apply module to produce image collection.
// Use the 'L8' collection.
// Use the full record. Start: '2013-03-18'. End: '2022-01-01'
// Filter by study region (poi buffered by 20 kilometers).

var collection = LandsatLST
  .collection
    (
      'L8',                               // landsat collection
      '2013-03-18',                       // start date
      '2022-01-01',                       // end date
      studyRegion                         // filter by study region
    )
;

// print('LST collection', collection);

// -------------------------------------------------------------------
// Filter for summer months.
// -------------------------------------------------------------------

// Filter the result from above (output of LandsatLST) for summer months (July and August).
// Also select the 'LST' band.

var summerMonths_lta = collection
  .filter(ee.Filter.calendarRange(7,8,'month'))
  .select('LST');

// --------------------------------------------------------------------------------
// Reduce the collection of summer month images to median value.
// Convert units from K to F.
// --------------------------------------------------------------------------------

var convert_k2f = function() {
  return  summerMonths_lta                            // image collection input
  .median()                                           // reduce image collection to image
  .subtract(273.15).multiply(9).divide(5).add(32)     // convert K to F
  ;
};

var summerMonths_image = convert_k2f(summerMonths_lta);

// --------------------------------------------------------------------
// Estimate mean summer temperature within each HOLC feature.
// Set the scale so that it is the same as the 'dough'.
// --------------------------------------------------------------------

// Derive mean summer month land surface temperature within each holc feature.

var each_holc_mean = summerMonths_image   // create output from ndvi input (dough)
  .reduceRegions({                        // compute a zonal statistic
    collection: holc,                     // cookie cutters (regions for statistic)
    reducer: ee.Reducer.mean(),           // statistic (of dough in cutter)
    scale:30,                             // if possible same as dough, if exceeds memory then 2 or 3 times dough scale
    tileScale:2                           // if possible 1, if exceeds memory then 2 or 4n
  }
);

// --------------------------------------------------------------------
// Estimate mean summer temperature within the union of all the HOLC features.
// Set the scale so that it is the same as the 'dough'.
// --------------------------------------------------------------------

// Create union of all HOLC features.

var holc_union = holc.union();

// print('holc_union', holc_union);

// Derive mean summer month land surface temperature within union of holc features.

var all_holc_mean = summerMonths_image    // create output from ndvi input (dough)
  .reduceRegions({                        // compute a zonal statistic
    collection: holc_union,               // cookie cutters (regions for statistic)
    reducer: ee.Reducer.mean(),           // statistic (of dough in cutter)
    scale:30,                             // if possible same as dough, if exceeds memory then 2 or 3 times dough scale
    tileScale:2                           // if possible 1, if exceeds memory then 2 or 4n
  }
);

// --------------------------------------------------------------------
// Convert mean summer temperature in each HOLC feature into an image.
// (Populate image with mean summer temperture of each feature).
// --------------------------------------------------------------------

var each_holc_mean_image = imageTools   // module
  .makeImageFromFeatures(               // function
    each_holc_mean,                     // feature collection
    'mean'                              // property of fc to use as pixel values
  )
;

// --------------------------------------------------------------------
// Convert mean summer temperature for the union of HOLC features into an image.
// (Again, populate the mean summer temperature from the union feature).
// --------------------------------------------------------------------

var all_holc_mean_image = imageTools   // module
  .makeImageFromFeatures(               // function
    all_holc_mean,                     // feature collection
    'mean'                              // property of fc to use as pixel values
  )
;

// Inspect output of vector - raster conversion.

// print('Image converted from feature collection', all_holc_mean_image);

// --------------------------------------------------------------------
// Estimate difference between mean of each HOLC feature
//  compared with mean of all HOLC features.

// In other words, subtract raster of mean union temperatures
//  from raster of mean feature temperatures.
// --------------------------------------------------------------------

var difference = each_holc_mean_image
  .subtract(all_holc_mean_image)
  ;

// --------------------------------------------------------------------
// Display on the result on the map.
// --------------------------------------------------------------------

// Set base map to 'darkBase'.

Map.setOptions('darkBase', {'darkBase': customBase.darkBase});

// Center map on filtered HOLC collection.

Map.centerObject(holc, 11);

// Configure visualization parameters.

var diff_vis = {
  min:-5,
  max:5,
  palette:palettes.crameri.vik[25]};

// Add layer to map

Map.addLayer(
  difference,
  diff_vis,
  'Difference from average (F)',
  1
  );

// --------------------------------------------------------------------
// COMPOSE MAP MARGINALIA.
// --------------------------------------------------------------------

var palettes = palettes;
// print(palettes);

// Construct legend

var legend = cart                                                     // module
  .makeGradientLegend(                                                // function
    diff_vis,                                                         // viz parameters
    'Difference from HOLC average\nSummer month temperatures (F)',    // legend title
    'bottom-left'                                                     // position on map
  )
;

// Place legend on map.

Map.add(legend);

// -------------------------------------------------------------------
// MAKE REFERENCE MAP OF HOLC GRADES
// -------------------------------------------------------------------

// Convert feature collection into an image.

var holcImage = imageTools       // module
  .makeImageFromFeatures(             // function
    holc,                        // feature collection
    'grade'                            // property of fc to use as pixel values
  )
;

// Inspect output of vector - raster conversion.

// print('Image converted from feature collection', holcImage);

// Define vis parameters.

var holcVis = {
  min: 0,
  max: 3,
  palette: ['#74a161','#7caeb6','#d5c958','#d97867']
  }
;

// Set base map.
Map.setOptions('darkBase', {'darkBase': customBase.darkBase});

// Center map on filtered HOLC collection.

Map.centerObject(holc, 11);

// Add HOLC layer to map.

Map.addLayer(holcImage, holcVis, 'HOLC grades',0);

// --------------------
// Make and add legend.
// --------------------

// Labels for legend.

var holcGrades = [
  'A: Best',
  'B: Still desirable',
  'C: Definitely declining',
  'D: Hazardous'
  ]
;

// Make legend.

var legend = cart.makeLegend(
  'HOLC grades',
  holcVis.palette,
  holcGrades,
  'bottom-left'
);

// Add legend to map.

Map.add(legend);
