![apply](../../images/apply.png)   

# Starter script (part 2)   

This script is already complete for you. You should be able to append it to the end of your part 1 script, update the name for the target year, and run. 

``` js
// ========================================================================
// 4. HURRICANES
// ========================================================================

// Load and filter feature collection for target year (defined previously).
// Also remove all features with 'max_wind_kts' equal to -99.

var canes_fc = ee.FeatureCollection("NOAA/NHC/HURDAT2/atlantic")
  .filter(ee.Filter.eq('year', targetYear))             // rename targetYear to match your script from part 1
  .filter(ee.Filter.neq('max_wind_kts',-99))
;

// Print the first feature in the collection.
// Also print the 'min' and 'max' values of the 'max_wind_kts' property in the collection.

print(
  'canes', canes_fc.first(),
  'min', canes_fc.aggregate_min('max_wind_kts'),
  'max', canes_fc.aggregate_max('max_wind_kts')
  )
;

// Center the map on the feature collection at zoom level 4.

Map.centerObject(canes_fc, 4);

// Set base map to satellite with labels.

Map.setOptions('HYBRID');

// Add feature collection to map as layer with color 'Ivory'.

Map.addLayer(canes_fc, {color: 'Ivory'}, 'Hurricane points',0);

// ------------------------------------------------------------------------
// Prep and display canes as lines.
// ------------------------------------------------------------------------

// Import a module for visualizing the hurricane data from 'users/jhowarth/eePrimer:modules/caneViz.js'.

var caneViz = require('users/jhowarth/eePrimer:modules/caneViz.js');

// Call makeCaneLines() function from module to create hurricane track lines for each named storm.

var caneLines = caneViz.makeCaneLines(canes_fc);

// Print a list of the named storms for the target year.

print(
  'cane lines',
  caneLines.aggregate_array('name')
    .distinct()
    .sort()
    )
  ;

// Add the track lines to the map as a layer. Display with 'DarkSlateGray' color.

Map.addLayer(caneLines, {color: 'DarkSlateGray'}, 'Cane lines', 1);

// ------------------------------------------------------------------------
// Set up map
// ------------------------------------------------------------------------

// Display feature collection as graduated circles.


// Step 1. Define viz paramters.
// Call makeGraduatedCircles() function from module with four arguments.

var caneGradSize = caneViz.makeGraduatedCircles(
  targetYear,       // Feature collection to symbolize.
  6,                // Size of smallest point symbol.
  'DarkRed',        // Color of point symbols.
  0.5               // Opacity of point symbols.
  );

// Step 2. Create feature view layer.

var gradCircles = caneViz.makeCaneLayer(
  "NOAA/NHC/HURDAT2/atlantic_FeatureView",    // Address of featureView layer.
  caneGradSize,                               // Viz parameters for graduated cricles (you made this in the last step).
  'Hurricane class'                           // Label for the layer.
  )
;

// Step 3. Add featureView layer to map.

Map.add(gradCircles);                         // Note: use .add() with the object you made above as argument (rather than addLayer().



```
