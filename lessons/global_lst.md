## Daily and seasonal changes of global land surface temperatures (LST)  

Please complete the workflow sketched below. Your script should produce a map that looks like [this app](https://jhowarth.users.earthengine.app/view/globallst).  

Please work with a partner. When you have completed the script, please show your result to either Jeff or Derrick. After we have approved your work, you are free to leave.  


```js
//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  Title:        Global land surface temperatures   
//  Author:       Jeff Howarth
//  Last edited:  4/5/2022   
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/*  PURPOSE:  Technically, this problem provides an opportunity to write a
              script that is analogous to the global oceans workflow.

              Conceptually, this lesson also encourages you to compare seasonal
              averages to longer-term average, to identify analogous regions,
              and to produce difference layers as a method of computing changes
              directly as an alternative to interpreting changes between states.  
*/

// ------------------------------------------------------------------------
// TERRAIN  
// ------------------------------------------------------------------------

// Load digital elevation model (DEM) from "NASA/NASADEM_HGT/001" and
// select 'elevation' band.



// Reclassify image to distinguish below sea-level (<0 m),
//  low elevations (>0 and <1000 m), and high elevations (>1000 m)



// Create a palette of 'White', 'Khaki', 'Goldenrod'.



// Config viz parameters for elevation.   



// Config legend
// -------------

// Load cart module.

var cart = require('users/jhowarth/eePrimer:modules/cart.js');

// Define labels for classes.



// Create map key.



// Compose Map
// -----------

// Set center and zoom level of map.

Map.setCenter(-100, 20, 2);


// Add elevation key and elevation class layer


// ------------------------------------------------------------------------
// ANNUAL AVERAGES FROM MODIS IMAGES   
// ------------------------------------------------------------------------

// Define start and end year (2018, 2020).



// Load image collection from "MODIS/006/MOD11A2"
// Filter by start and end years.



// Select 'LST_Day_1km' band, reduce to mean, convert to Celsius.



// print(lst_mean);

// Select 'LST_Night_1km' band, reduce to mean, scale, and convert to Celsius.



// ------------------------------------------------------------------------
// COMPOSE MAP OF ANNUAL AVERAGES  
// ------------------------------------------------------------------------

// Load community palettes

var palettes = require('users/gena/packages:palettes');

// Config palette for LST.

var lst_palette = palettes.cmocean.Balance[7];

// Config viz parameters for LST (-40 - 40).
// (You can use the same viz parameters for day and night LST.)



// Make map key.  



// Compose map (add one legend, day layer, and night layer).


// ------------------------------------------------------------------------
// CONSTRUCT SEASONAL IMAGES
// ------------------------------------------------------------------------

// Write function to make seasonal images.



// Apply function to make images for fall, summer, spring, winter  
// for both day and night LST.      



// Add seasonal layers to map for both day and night LST.  
// By default, these layers should not be visible.    



// ------------------------------------------------------------------------
// COMPOSE DIFFERENCE MAPS   
// ------------------------------------------------------------------------

// Compose difference layer between day and night LST for full, mean dataset.



// Add difference layer to map (with LST viz parameters).



// Write a function to compute difference layers between day and night LST.




// Compose difference layers of day and night LST for each season.



// Add different layers to map (with LST viz parameters).
// By default, these layers should not be visible.  



// ------------------------------------------------------------------------
// ADD GEOGRAPHIC REFERENCE LINES   
// ------------------------------------------------------------------------

// Load graticule (lines of lat and long).

var graticule_10d = ee.FeatureCollection('projects/ee-primer/assets/reference_lines/graticule_10d');

// Load geographic lines (equator, circles, tropics).

var geographic_lines = ee.FeatureCollection('projects/ee-primer/assets/reference_lines/geographic_lines');

// Add graticule and geographic lines as reference lines.

Map.addLayer(graticule_10d, {color: 'Honeydew'}, 'Graticule 10 degrees',0);
Map.addLayer(geographic_lines, {color: 'Gainsboro'}, 'Geographic lines',0);


```
