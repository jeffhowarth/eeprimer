## Introduction    

The goal today is to visualize changes over the last 30 years in the vicinity of [Muynak, Uzbekistan](https://www.nytimes.com/2018/08/09/world/asia/aral-sea-disappearing-uzbekistan.html){target=_blank} by making a gif animation similar to [Google's Time Lapse](https://earthengine.google.com/timelapse/){target=_blank}.  

## Background   

- [What is Landsat?](../concepts/what_is_landsat.md){target=_blank}  
- [Mother of Landsat](../concepts/mother_of_landsat.md){target=_blank}  
- [Landsat lexicon](../concepts/landsat_lexicon.md){target=_blank}  

## New code  

- [Landsat scaling function](../code/ic/landsat_scaling_function.md){target=_blank}    


## Starter script    

```js
/*
    TITLE:  Changes near Muynak, Uzbekistan with Landsat  
    AUTHOR: Jeff Howarth  
    UPDATE: 11/9/2022  

*/

// -----------------------------------------------------------------------------------
// Define study region
// -----------------------------------------------------------------------------------

// Create a point on Muynak, Uzbekistan and buffer by 400 kilometers
//  Name the output: roi
//  Short for "region of interest"  



// Center the map on the roi and zoom level 7.  



// Change the base layer to 'TERRAIN'.  



// -----------------------------------------------------------------------------------
// Test a workflow
// -----------------------------------------------------------------------------------

// Write a function to apply scaling factors for Landsat collections.



// Step 1: Chain a workflow that does the following steps:  
//  1. Constructs an image collection from the 'LANDSAT/LT05/C02/T1_L2' address
//  2. Filters by roi
//  3. Filters by calendar year 1989
//  4. Filters by 'CLOUD_COVER' less than 20
//  5. Maps the applyScaleFactors function over the image collection
//  6. Sorts by 'CLOUD_COVER'
//  Name the output: test




// Step 2: Print the following to console:
//  1. The year as a string,
//  2. The size of the collection,
//  3. All of the images in the collection.   



// Step 3: Reduce the image collection by median value of each pixel.
//  Name the output: median_test  



// Step 4: Print the year as string and the image to Console.



// Step 5: Define viz parameters for the image collection to display a natural color composite from 0.0 and 0.3.
//  Name the variable: viz_nc  



// Step 6: Add the median_test layer to the map
//  Apply viz_nc
//  Name the layer 'test'



// Define a swir false color composite that ranges from 0.0 to 0.5.  




// -----------------------------------------------------------------------------------
// Generalize workflow as a function.
// -----------------------------------------------------------------------------------

// Define a global variable for cloud cover criterion as 25.
//  Name the variable: cloud



// Write a function that implements your test workflow and takes three arguments:
//  ic: image collection address
//  yr: year for calendar range
//  vp: viz parameters
//
// This function should implement:
//  Step 1
//  Step 2
//  Step 3
//  Step 4
//  Step 6
//
// And it should return the image.

// Name the function:
//  doItAll



// -----------------------------------------------------------------------------------
// Apply the function to make a time series.
// -----------------------------------------------------------------------------------

// Use the following collections and years with viz_fc:
//  "LANDSAT/LT05/C02/T1_L2", 1989
//  "LANDSAT/LT05/C02/T1_L2", 1994
//  "LANDSAT/LT05/C02/T1_L2", 2000
//  "LANDSAT/LE07/C02/T1_L2", 2004
//  "LANDSAT/LE07/C02/T1_L2", 2009
//
// Name each output to identify Landsat mission and image year:
//  For example: L4_1989




// Create another viz parameters for L8 and later missions
//  Name the variable: viz_L8_fc


// Use the following collections and years with viz_fc:
//  "LANDSAT/LC08/C02/T1_L2", 2014
//  "LANDSAT/LC08/C02/T1_L2", 2019
//  "LANDSAT/LC09/C02/T1_L2", 2022
// Following naming convention as above.

```

## Make animation

If you followed the naming conventions in the starter script, then the script below should print a gif animation to the Console.  

```js
// -----------------------------------------------------------------------------------
// MAKE ANIMATION
// -----------------------------------------------------------------------------------

// Combine time series of images that use viz_fc into an image collection;

var time_series_01 = ee.ImageCollection.fromImages([
  L5_1989,
  L5_1994,
  L5_2000,
  L7_2004,
  L7_2009
  ]
);

// Combine time series of images that use viz_fc_L* into a second image collection;


var time_series_02 = ee.ImageCollection.fromImages(
  [
  L8_2014,
  L8_2019,
  L9_2022
  ]
);

// Define a function to convert an image to an RGB image and copy
// properties from the original image to the new RGB image.

var convert_1 = function(img) {
  return img.visualize(viz_fc).copyProperties(img, img.propertyNames());
};

var convert_2 = function(img) {
  return img.visualize(viz_fc_L8).copyProperties(img, img.propertyNames());
};

// Map over the image collection to convert each image to an RGB visualization
// using the previously defined visualization function.

var time_series_rgb = time_series_01.map(convert_1);
var time_series2_rgb = time_series_02.map(convert_2);


// Merge two image collections

var time_series_merge = time_series_rgb.merge(time_series2_rgb);  


// Check to see if everything worked.

print("Going ok?", time_series_merge);

// Define arguments for animation function parameters.

var videoArgs = {
  dimensions: 720,
  framesPerSecond: 0.5,
  region: roi
};

// Print thumbnail to the Console.

print(ui.Thumbnail(time_series_merge, videoArgs));

```
