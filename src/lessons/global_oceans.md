# Global oceans    

## Motivating questions      

- How does the elevation of the ocean's floor relate to phytoplankton blooms?
- How does sea surface temperature relate to phytoplankton blooms?  
- How does one season differ from a long term average?  
- How do these anomalies in sea surface temperature relate to hurricanes?  
- How does SST relate to El Ni&ntilde;o and La Ni&ntilde;a events ([hint](https://psl.noaa.gov/enso/mei/){target=_blank})?  
- How do sea surface temperatures and phytoplankton blooms change over seasons([hint](https://earthobservatory.nasa.gov/features/Phytoplankton){target=_blank})?      


##Map goal  

This week, we will use Earth Engine to compile map layers that allow us to explore these kinds of questions about global ocean systems.

<iframe
  src="https://jhowarth.users.earthengine.app/view/eeprimer-global-oceans"
  style="width:100%; height:800px;"
></iframe>

_Here is [a link](https://jhowarth.users.earthengine.app/view/eeprimer-global-oceans){target=_blank} to the app that will open in a separate window._

##Background resources    

- **Global Circulation**
    - [Part one: differential heating](https://youtu.be/7fd03fBRsuU){target=_blank}  
    - [Part two: the three cells](https://youtu.be/xqM83_og1Fc){target=_blank}  
    - [Part three: the Coriolis effect and winds](https://youtu.be/PDEcAxfSYaI){target=_blank}   
- [Ocean's Green Machines](https://www.youtube.com/watch?v=H7sACT0Dx0Q){target=_blank}
- [SST and Hurricanes](https://vermont.pbslearningmedia.org/resource/clim10.sci.ess.watcyc.seasurftemp/the-effect-of-sea-surface-temperature-on-hurricanes/){target=_blank}   
- **Earth Engine datasets**  
    - ['NOAA/NGDC/ETOPO1'](https://developers.google.com/earth-engine/datasets/catalog/NOAA_NGDC_ETOPO1){target=_blank}  
    - ['NASA/OCEANDATA/MODIS-Terra/L3SMI'](https://developers.google.com/earth-engine/datasets/catalog/NASA_OCEANDATA_MODIS-Terra_L3SMI){target=_blank}  
- [MODIS](https://modis.gsfc.nasa.gov/){target=_blank}  

##Starter script (1)  

Please try to complete this script and submit a link to your code in this [DROPBOX](https://docs.google.com/forms/d/e/1FAIpQLSentt6e0L3Fxro_MLaIhH2dBBBt0PTY686c1_1nAqVuZkgHZg/viewform?usp=sf_link){target=_blank} by the end of class.

If you have worked until the end of lab and have not finished the script, please still submit a link to your script to the dropbox and try to complete the script before lecture tomorrow.  

```js

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// TITLE:        week_05_practice_problem.js
// NAME:         Jeff Howarth
// DATE:         10/12/22
// PURPOSE:      Explore sst and chlorophyll-a of global oceans.
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// ------------------------------------------------------------------------
// 1. BATHYMETRY
// ------------------------------------------------------------------------

// Load bathymetry dataset from 'NOAA/NGDC/ETOPO1' and select for 'bedrock' band.



// Create a land mask.



// Load the community palette module.



// Select a community palette.
// Please use cmocean.Deep[7].
// Please be sure deeper is darker colors and shallower elevations are lighter colors.



// Config viz parameters. Stretch color palette over -5000 - 0 data values.



// Add layer to map with land mask.



// // ------------------------------------------------------------------------
// // 2. OCEAN WATER
// // ------------------------------------------------------------------------

// Load 'NASA/OCEANDATA/MODIS-Terra/L3SMI'. Select 'sst' and 'chlor_a' bands.



// Inspect first record and print size (number of images) of collection.



// To filter image collection by calendarRange to make long term record.
// 1. Define variables to make August and November the start and end months.



// 2. Define 2000 and 2020 as start and end years for long term record.



// 3. Filter by calendar range and call the startYear, endYear, startMonth, and endMonth variables defined above.



// Reduce image collection into an image that represents the long term average (average value for each pixel).



// Select community palette for sst. Please use colorbrewer.Spectral[11].
// Please make sure cool to warm colors map to cool to warm temperatures.



// Define vis parameters for sst. Stretch palette from 10 to 30 data values.



// Draw layer of sst long term average with land mask.



// Select community palette for chorophyll-a.
// Please use only the first six colors of niccoli.linearl[7].



// Define vis parameters for chlorophyl. Stretch values from 0 to 1 data values.



// Draw chlorophyll-a layer with land mask.



// ------------------------------------------------------------------------
// 3. ANOMALIES
// ------------------------------------------------------------------------

// Define 2017 as the target year (or short term record).



// Filter for the target year (defined above).



// Inspect results.



// Take the mean of the target and subtract the mean of the long term record.



// Select community palette for sst anomaly.
// Please use colorbrewer.RdBu[9].
// Please be sure cooler to warmer colors match cooler to warmer temperatures.



// Define viz parameters. Stretch palette from -2 to 2 data values.



// Select community palette for chlorophyll-a anomaly.



// Define viz parameters. Stretch palette from -0.1 to 0.1.



// Add anomaly layers to map.



```

##New code snippets  

The list below introduces _new_ methods that you need to solve this problem.   

- Community palette module  
- Palettes for multiband images  
- Load image collection  
- Select bands  
- Inspect image collection  
- Filter by dates  
- Reduce with local operations  

##Starter script (2)   

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
