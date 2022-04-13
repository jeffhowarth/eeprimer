## Spatial anomalies of LST    

In this lesson, we compare how the mean LST within census blocks differ from the mean LST of the region, or the concept of mapping _spatial anomalies_. You will write a script that generates the map shown in Figure 1. You will again write the script so that you can by reapply the analysis to any city in the USA simply by changing the point of interest.  

![Tutorial goal](images/lst_blocks_diff.png)   
_Figure 1. Difference between block mean and regional map for Brooklyn, NY._

This workflow involves several new methods:  

1. A method to create high-resolution land surface temperature (LST) images from Landsat image collections. To do this, we will use a module developed and kindly shared by [Sophia Ermida](https://github.com/sofiaermida).  

2. A method to select features based on their spatial relationship to attributes in an image, or what is generally called _select by location_.  

3. Merging multiple features into a single feature, or what is generally called a _dissolve_ or _union_.   

### Concepts

#### Spatial anomaly  

> Review general concept

#### High-resolution LST images    

Please open [this earth engine app](https://jhowarth.users.earthengine.app/view/eeprimer-lst-landsat8).  

>_Discuss LST in Middlebury and stretch enhancement._

#### Select by location  

> Review general concept.  

#### Dissolve or union  

> Review general concept  

### Workflow      

Please work with a partner to complete this script. Your final result should produce the map shown in Figure 1. When you have completed the script, please show your work to either Jeff or Derrick. You should be able to reapply your analysis to another city in the USA simply by changing the point of interest. You are excused from lecture after we have approved your work.  

In prep for our meeting on Monday, please read [this article](https://www.nytimes.com/interactive/2020/08/24/climate/racism-redlining-cities-global-warming.html?searchResultPosition=1) from the New York Times.

```js
/*

  TITLE:    Spatial anomalies of land surface in census blocks
  AUTHOR:   Jeff Howarth
  DATE:     4/13/2022

  Purpose:

            To show show census blocks that are anomalously hot or
            cool in a region.

*/

// --------------------------------------------------------------------
// CONFIGURE MAP.
// --------------------------------------------------------------------

// Center map on point geometry at zoom level 12.


// Set base layer to 'HYBRID'.


// -------------------------------------------------------------------
// MAKE LST LAYER FROM LANDSAT.
// -------------------------------------------------------------------

// Import module for LST computation from L8.

var LandsatLST = require('users/sofiaermida/landsat_smw_lst:modules/Landsat_LST.js');

// Apply module to produce image collection.  

var image = LandsatLST
  .collection
    (
      'L8',                               // landsat collection
      '2019-07-01',                       // start date  
      '2019-09-01',                       // end date
      XXXX                            // poi to filter collection
    )
;

// -------------------------------------------------------------------
// Function to convert Kelvin to Fahrenheit    
// -------------------------------------------------------------------

// Write function.

var convert_k2f = function() {
  return  image                                       // image collection input
  .select('LST')                                      // Select LST band
  .median()                                           // reduce image collection to image
  .subtract(273.15).multiply(9).divide(5).add(32)     // convert K to F
  ;
};

// Apply function to make DOUGH layer.

// -------------------------------------------------------------------
// Chart histogram to determine min and max display range.      
// -------------------------------------------------------------------

var image_tools = require('users/jhowarth/eePrimer:modules/image_tools.js');

// Add histogram to Map.

var histogram = image_tools
  .makeBoundedHistogram
    (
      geometry.buffer(5000),            //  region (because image is unbounded)
      XXXX,                             //  use data from this image
      'LST',                            //  select this band
      30,                               //  use this scale (same as image)
      70,                               //  min value of x-axis
      130,                              //  max value of x-axis
      0,                                //  min value of y-axis
      5000                              //  max value of y-axis
    )
;

// Print histogram to module.


// -------------------------------------------------------------------
// Define viz parameters.  
// -------------------------------------------------------------------

// Import module to access community palette library.  

var palettes = require('users/gena/packages:palettes');

// Define visualization parameters.

var lst_viz = {
  min: XXXX,                                          // min display value.
  max: YYYY,                                         // max display value.
  palette: palettes.kovesi.linear_bmy_10_95_c78[7]  // palette to stretch.
};

// Add layer to map. Do not show layer by default.

Map.addLayer(
    XXXX,                                 // image to draw
    YYYY,                                 // viz parameters  
    'LST',                                // Layer name  
    ZZZZ                                  // Do not show by default
    )
  ;


// --------------------------------------------------------------------
// MAKE COOKIE CUTTERS
// --------------------------------------------------------------------

// Import county polygons.

var counties = ee.FeatureCollection("TIGER/2018/Counties")
  .filterBounds(geometry);              // Filter by point geometry.


// Import block polygons.

var blocks = ee.FeatureCollection("TIGER/2010/Blocks")
  .filterBounds(counties)               // Filter by selected county.
  ;

// Create a land mask from 'USGS/NLCD_RELEASES/2019_REL/NLCD'.
// Filter for 2019 year.
// Select 'landcover' band.
// Select first image in collection.
// Reclassify image so that value 11 = 0 and everything else = 1.   


// Print the land mask to Console.


// Compute the mode of the land_mask within each census block.    


// Print the first feature in the output of above step to Console.  


// Filter blocks for only those blocks on land (or where the mode equals 1).


// Check your work visually.
// Display all block features in selected county as a map layer with white color (and make not shown by default).  


// Display all land block features with black color and again make not shown by default.  



// Merge all land blocks into a single region.


// Display the merged block layer with red color and again make not shown by default.


// --------------------------------------------------------------------
// CUT THE DOUGH.
// --------------------------------------------------------------------

// Derive mean LST within each land census block.


// Derive mean LST within union of land census blocks.


// --------------------------------------------------------------------
// CONVERT VECTOR TO RASTER
// --------------------------------------------------------------------

// Import image tools module

var imageTools = require('users/jhowarth/eePrimer:modules/image_tools.js');

// Convert census block feature collection with mean LST into an image.
// Use the property that reports mean LST to populate the image pixel values.

var mean_lst_block_image = imageTools       // module
  .makeImageFromFeatures(                   // function
    XXXX,                                   // feature collection  
    YYYY                                    // property of fc to use as pixel values
  )
;

// Display mean LST in blocks with LST viz parameters.
// Make not shown by default.


// Convert union census block feature collection with mean LST into an image.
// Use the property that reports mean LST to populate the image pixel values.

var mean_lst_block_union_image = imageTools   // module
  .makeImageFromFeatures(                     // function
    XXXX,                     // feature collection  
    YYYY                                    // property of fc to use as pixel values
  )
;

// Compute difference of block mean LST from union mean LST.


// Create viz paramters

var lst_diff_viz = {
  min: -10,
  max: 10,
  palette: palettes.colorbrewer.RdBu[11].reverse()
};

// Add difference layer to map. Show by default.



// -------------------------------------------------------------------
// Composte legend.  
// -------------------------------------------------------------------

// Import module.

var cart = require('users/jhowarth/eePrimer:modules/cart.js');

// Create legend and place in bottom-left.

var difference_key = cart                         // module
  .makeGradientLegend                     // function
    (                
      XXXX,                               // viz parameters
      YYYY,                               // legend title
      ZZZZ                                // position on map
    )
;

// Add legend to map.

Map.add(difference_key);

```
