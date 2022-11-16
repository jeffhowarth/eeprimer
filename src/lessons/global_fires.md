## Introduction  

Fires are always present on our planet. If you look any day of the year and any time of the day, you will always find a fire burning somewhere.          

- *How do fires differ physically, ecologically, and culturally?*

- *How can satellite imagery help us understand these differences and their relationships to each other?*  

![FIRMS fire map](https://www.earthdata.nasa.gov/s3fs-public/2022-05/FIRMS-fire-map.jpg?VersionId=tvQzN89zIjpktGF.l6HGzylBTJcgG4s_)

- [FIRMS fire map](https://firms.modaps.eosdis.nasa.gov/map/#d:24hrs;@0.0,0.0,3z){target=_blank}  

## Background  

- [spectral signatures](../concepts/spectral_signature.md){target=_blank}
- [additive color](../concepts/additive_color.md){target=_blank}
- _Sample spectral signatures of forest and grasslands near Davenport, California: June 1 - August 1, 2020_

- [burn severity](../concepts/burn_severity.md){target=_blank}  
- _Sample spectral signatures of forest and grasslands near Davenport, California: September 1 - November 1, 2020_


## Burn severity explorer  

Your goal this week is to write a script that functions similar to the app shown below.  

<iframe
  src="https://jhowarth.users.earthengine.app/view/ee-edu-burn-severity"
  style="width:100%; height:800px;"
></iframe>

_This [**link**](https://jhowarth.users.earthengine.app/view/ee-edu-burn-severity){target=_blank} will open the app in a new browser tab._   

## Deliverables  

There are two deliverables for this lesson:  

1. Please complete [**Form 1**](https://forms.gle/QwvAMnU4Vo7Dg9JU9){target=_blank} to interpret global fires. You should be able to use either the app above or the script that you write to answer the questions in this form.  

2. Please complete [**Form 2**](https://forms.gle/BGJsc7TUxgpqiJp16){target=_blank} to submit six (6) checkpoints and a link to your script.

Please submit answers to both forms **by 9:30am on Thursday (11/16)**.  

You will have until **5pm on Friday (11/17)** to revise your script so that it produces correct answers. (Please re-submit the Form 2 with your corrections).    

## New code snippets  

- [cloud masks](../code/ic/cloud_masks.md){target=_blank}  
- [normalized difference ratios](../code/image/normalized_difference.md){target=_blank}   
- [reclassify with defined breaks](../code/image/reclassify.md){target=_blank}   

## Starter script  

```js
/*

  Title: Burn severity explorer
  Author: Your name
  Date: Today's date

*/

// --------------------------------------------------------
// 1. Define study window and region.
// --------------------------------------------------------

//  Initial poi.

var geometry = ee.Geometry.Point([-122.29400855, 37.14993396]);

// Define year (2020) and month (8) as ee number objects.
//  Please name the outputs: study_year and study_month (respectively)



//  Construct a feature collection from "WWF/HydroSHEDS/v1/Basins/hybas_7".
//    
//    Please name the output: regions  



//  Create a study region by filtering regions that intersect geometry variable.
//
//  Please name the output:  
//    study_region



//  Center map on study_region at zoom level 10.



//  Set base map to 'TERRAIN'.





// --------------------------------------------------------
// Visualize global fire scars for the study window.    
// --------------------------------------------------------

// Create list of bands to work with.

var bands = ['SWIR','NIR','Green'];

// Create a list of the MODIS bands (from "MODIS/061/MOD09A1") that are equivalent to the bands list.
//
//  Name the variable:
//    MODIS_bands  



// Load image_tools module to access cloud masks.

var tools = require("users/jhowarth/eePrimer:modules/image_tools.js");

// Load image collection from "MODIS/061/MOD09A1".
//  Filter by calendar year for study year variable.  
//  Filter by calendar data with month variable as start and month plus one as end.
//  Apply the cloud filter (tools.cloudMask_MODIS) to every image in the collection.  
//  Reduce each pixel value to the pixel's minimum in the collection.  
//  Apply the scaling factor (0.0001) to the image.  
//  Select the MODIS bands from the image and rename these bands as defined in first step of section.  
//
//  Please name the output:
//    after_fire_MODIS  



// Define viz parameters for false color swir.

var viz = {
  min: [0, 0, 0],
  max: [0.6, 0.65, 0.5],
  bands: bands,
  gamma: 1.2
};

//  Add image as layer to map with viz parameters.
//  Name the layer 'MODIS for study window'.



//  *******************************************************
//  CHECK 1
//  *******************************************************

// Load module.

var check = require('users/jhowarth/eePrimer:modules/checks.js');

// Use meanValue() function to print mean value of an image (dough) with a geometry (cutter).

// check.meanValue(                        // Call function
//   after_fire_MODIS,                     // Image to check
//   bands,                                // Bands to select in image as a list
//   geometry,                         // Geometry to use as a cutter
//   1000,                                 // Pixel resolution (scale) of image (dough)
//   'CHECK 1'                             // Label to print to console above result.
//   )
// ;

// --------------------------------------------------------
// 2. Display global fires for a study window.    
// --------------------------------------------------------

//  Load FIRMS image collection from 'FIRMS' address.  
//  Filter for calendar year with start and end as defined above.
//  Filter for calendar month with start as defined above and end as above plus 1.  
//  Select the 'T21' band.
//  Reduce each pixel value to each pixel's maximum in the collection.
//  Convert from Kelvin to Celsius.
//
//  Please name the ouput:  
//    fire  



//  Define viz parameters for the fire image.  
//  Stretch values from 50 to 225 and use yellow, orange, and red colors to make the palette.



//  Add the fire layer with the fire viz and label the layer 'Fires'.



// Load cart module.

var cart = require('users/jhowarth/eePrimer:modules/cart.js');

// Construct a gradient legend with the fire viz parameters.
//  Title the legend 'Brightness temp (C) of fires in study month' so that 'in study month' prints on a new line.
//  Place the legend in the bottom left corner of the map.



// Add legend to map.  




//  *******************************************************
//  CHECK 2
//  *******************************************************

// Use meanValue() function to print mean value of an image (dough) with a geometry (cutter).

// check.meanValue(                        // Call function
//   fire,                     // Image to check
//   'T21',                                // Bands to select in image as a list
//   geometry,                         // Geometry to use as a cutter
//   1000,                                 // Pixel resolution (scale) of image (dough)
//   'CHECK 2'                             // Label to print to console above result.
//   )
// ;

// -------------------------------------------------------------
// 3. Investigate at finer scale with Sentinel 2.   
// -------------------------------------------------------------

//  Make list of S2 bands that match band list.  
//
//  Name variable:
//    S2_bands



// Write a function that takes year and month arguments
//  and chains the following:
//    Construct image collection from "COPERNICUS/S2_SR_HARMONIZED".
//    Filter collection for images that intersect study_region.  
//    Filter collection by calendar year (from argument).
//    Filter collection by calendar month, where start is month from argument and end is this month plus one.
//    Apply tools.cloudMask_S2 to every image in the collection
//    Reduce collection to minimum value at each pixel.  
//    Scale the pixel values by 0.0001.
//    Select the S2_bands and rename them regular band names (defined earlier).



//  Call function to make after fire image with study window year and month.  
//
//    Name the variable: after_fire_S2       



//  Call function to make before fire image with study window same month but year minus one.  
//
//    Name the variable: before_fire _S2  




//  Add after fire and before fire layers to map as false color SWIR.
//  Apply the same viz parameters that you used with layer image.
//  Name each layer 'S2 after' or 'S2 before' as appropriate.



//  *******************************************************
//  CHECK 3 & 4
//  *******************************************************

// Use meanValue() function to print mean value of an image (dough) with a geometry (cutter).

// check.meanValue(                        // Call function
//   after_fire_S2,                     // Image to check
//   bands,                                // Bands to select in image as a list
//   geometry,                         // Geometry to use as a cutter
//   10,                                 // Pixel resolution (scale) of image (dough)
//   'CHECK 3'                             // Label to print to console above result.
//   )
// ;
//
// check.meanValue(                        // Call function
//   before_fire_S2,                     // Image to check
//   bands,                                // Bands to select in image as a list
//   geometry,                         // Geometry to use as a cutter
//   10,                                 // Pixel resolution (scale) of image (dough)
//   'CHECK 4'                             // Label to print to console above result.
//   )
// ;

// -------------------------------------------------------------
// 4. Estimate burn severity index for before and after images.    
// -------------------------------------------------------------

// Compute burn ratio (normalized difference between NIR and SWIR) for before_fire_S2 and after_fire_S2

//  Name the outputs:
//    br_before_S2
//    br_after_S2



// Subtract br_after_S2 from br_before_S2.
//
//  Name the output: dbr (for delta burn ratio)



// Load community palettes.

var palettes = require('users/gena/packages:palettes');

// Store the colorbrewer.BrBG[11] palette.
//  Reverse the color ramp so brown shows higher values and teal shows lower values.
//
//  Name the variable: dbr_palette



//  Define viz parameters stretched from -0.75 to 0.75.
//  Display with palette.
//
//  Name the variable: dbr_viz


// Create a land mask from "NASA/NASADEM_HGT/001".
//  All pixels with elevation value greater than 0 should be 1.
//  All other pixels should be 0.

var landMask = ee.Image("NASA/NASADEM_HGT/001")
  .select('elevation')
  .gt(0);

//  Add dbr as layer to map and apply land mask,
//  display with dbr_viz,
//  name the layer 'Difference normalized burn ratio',
//  make not visible by default.



// Construct a gradient legend with the dbr viz parameters.
//  Title the legend 'Difference normalized burn ratio'.
//  Place the legend in the bottom left corner of the map.
//
//  Please name the output: dbr_legend



// Add legend to map.  



//  *******************************************************
//  CHECK 5
//  *******************************************************

// Use meanValue() function to print mean value of an image (dough) with a geometry (cutter).

// check.meanValue(                        // Call function
//   dbr,                                  // Image to check
//   'nd',                                // Bands to select in image as a list
//   geometry,                             // Geometry to use as a cutter
//   10,                                   // Pixel resolution (scale) of image (dough)
//   'CHECK 5'                             // Label to print to console above result.
//   )
// ;

// -------------------------------------------------------------
// Classify burn severity index based on USGS thresholds.  
// -------------------------------------------------------------

// Classify burn severity image according to USGS thresholds.
//
//  Name output: burn_severity_class  

var burn_severity_class = dbr
    .gte(-0.25)
    .add(dbr.gte(-0.1))
    .add(dbr.gte(0.1))
    .add(dbr.gte(0.27))
    .add(dbr.gte(0.44))
    .add(dbr.gte(0.66))
  ;


// Define burn severity class palette (give this to them).

var burn_severity_palette =[
    '#778735',
    '#a7c04f',
    '#07e444',
    '#f6fc0d',
    '#f7b140',
    '#f86819',
    '#a601d4'
  ]
;

// Define vis parameters for classified burn severity index.
//  The min value should be 0 and the max should be 6.
//  Apply the palette defined above.
//  
//  Name the variable: burn_severity_viz  


// Add burn severity classes layer to map with land mask.
//  Apply burn_severity_viz and label the layer 'Classified values from S2'.



// Create a list of labels for classes.
// The length of this list must equal the length of class values.  

var burn_severity_labels = [
  'High post-fire regrowth',
  'Low post-fire regrowth',
  'Unburned',
  'Low Severity',
  'Moderate-low Severity',
  'Moderate-high Severity',
  'High Severity'];


// Make a qualitative legend for burn severity layer.  
//  Place the legend in the bottom-left.
//
//  Name the legend: severity_legend



// Add severity legend to the map.



//  *******************************************************
//  CHECK 6
//  *******************************************************

// Use meanValue() function to print mean value of an image (dough) with a geometry (cutter).

// check.meanValue(                        // Call function
//   burn_severity_class,                                  // Image to check
//   'nd',                                // Bands to select in image as a list
//   geometry,                             // Geometry to use as a cutter
//   10,                                   // Pixel resolution (scale) of image (dough)
//   'CHECK 6'                             // Label to print to console above result.
//   )
// ;



```
