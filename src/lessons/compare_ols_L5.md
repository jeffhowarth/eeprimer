##Introduction  

Your goal is to write a script that will allow you to compare changes in nighttime lights across three time periods with false color composites for each time period. The app below illustrates the map you will produce.     

<iframe
  src="https://jhowarth.users.earthengine.app/view/eeprimer-investigate-ols-l5"
  style="width:910px; height:605px;"
></iframe>

This [link](https://jhowarth.users.earthengine.app/view/eeprimer-investigate-ols-l5){target=_blank} opens the app in a new browser tab.  

##Prerequisites  

This lesson follows [changes in the night](changes_in_the_night.md) and [natural/false color](natural_false_color.md).  

## Code blocks  

The script draws on the following _new_ code blocks:  

- [Construct number](../code/number/construct_number.md)  
- [Math with number objects](../code/number/math.md)  
- [Add bands to an image](../code/ic/add_bands.md)  
- [Sort by cloud cover](../code/ic/sort_cloud_cover.md)  
- [Check image with module](../code/image/check_module.md)


##Dropbox  

Please report requested checks and a link to the script in this [dropbox](https://docs.google.com/forms/d/e/1FAIpQLSfHjylITHJ4JD0h7S1BruqzmZRKsHwwSHKBCixXD-6bjf3hzA/viewform?usp=sf_link){target=_blank}.

##Starter script  

```js
//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  problem:      rgbLights_practice.js
//  your name:    
//  date:           
//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//  --------------------------------------------------------------------------------
//  Define Study Periods for Nighttime Lights collection.
//  --------------------------------------------------------------------------------

//  Load image collection from "NOAA/DMSP-OLS/NIGHTTIME_LIGHTS".
//
//  Please use this name for the output:
//    ic

var ic =

//  Define three target years (2012, 2002, 1992) as ee.Number() objects.
//
//  Please use these names for the outputs:
//    red_year (for 2012 target)
//    green_year (for 2002 target)  
//    blue_year (for 1992 target)  



//  Filter image collection to create a separate image collections for three study periods,
//  where a study period begins one year before and ends one year after the target years defined in last step.
//
//  Please use these names for the outputs:
//    red_year_ic (based on red_year target)
//    green_year_ic (based on green_year target)
//    blue_year_ic (based on blue_year target)


// CHECK 1
// Inspect each year and report how many images you have in each .

print('CHECK 1');


//  --------------------------------------------------------------------------------
//  Reduce each study period to a single image.
//  --------------------------------------------------------------------------------

//  Reduce each image collection to the mean value of each pixel
//  Select the 'stable_lights' band
//  Rename the band to convery the sequence in time each image represents ('last', 'middle', 'first')
//
//  Please use these names for the outputs:
//    mean_red_year (based on red_year_ic) should have band 'last'
//    mean_green_year (based on green_year_ic) should have band name 'middle'
//    mean_blue_year (based on blue_year_ic) should have band name 'first'




//  CHECK 2
//  Inspect the result for each year and report the # of bands and data type for the new images.  
//  Hint: they should all have the same number of bands and the same data type.

print('CHECK 2');


//  --------------------------------------------------------------------------------
//  Construct a new image that contains three bands.
//  --------------------------------------------------------------------------------

//  Construct a three band image by adding the 'middle' and 'first' bands to the 2013 image.
//
//  Please use this names for the output:
//    lights_change_image    



//  CHECK 3
//  Inspect your output and report the band name and data type for each band index (0, 1, 2) in the output.

print('CHECK 3');


//  ---------------------------------------------------------------------
//  Compose map
//  ---------------------------------------------------------------------

//  Define a point of interest.

var geometry = ee.Geometry.Point([120.603693, 31.310461]);

//  Center map on point of interest and zoom level 12.



//  Set basemap to satellite with labels.



//  Add three-band image to map with display range from 0 to 63.
//  Label the layer 'Changes in the night'



//  ---------------------------------------------------------------------
//  Load and filter Landsat 5 image collection.
//  ---------------------------------------------------------------------

//  Load Landsat 5 collection from ee address 'LANDSAT/LT05/C02/T1_L2'
//  and filter collection by point of interest.
//
//  Please use this name for the output:
//    L5



//  Create a new image collection for each study period (as defined previously).
//
//  Please use these names for the outputs:
//    red_5 (based on red_year target)
//    green_5 (based on green_year target)
//    blue_5 (based on blue_year target)


//  CHECK 4
//  Inspect results and report the size of each image collection

print('CHECK 4');

//  ---------------------------------------------------------------------
//  Sort images by cloud cover and pick the first in the list.  
//  ---------------------------------------------------------------------

//  Sort each image collection by 'CLOUD_COVER'.  
//
//  Please use these names for the outputs:
//    red_5_sort (based on red_5 study period)
//    green_5_sort (based on green_5 study period)
//    blue_5_sort (based on blue_5 study period)


//  Check to see that the last step worked as you expected.
//  The images in the collection should now be sorted from least cloudy to most cloudy.


//  Select the first image in each sorted collection.
//
//  Please use these names for the outputs:
//    red_5_all_clear (based on red_5_sort)
//    green_5_all_clear (based on green_5_sort)
//    blue_5_all_clear (based on blue_5_sort)


//  CHECK 5
//  Inspect the results and report the id of the image for each time period.

print('CHECK 5');

//  ---------------------------------------------------------------------
//  Display each image as a SWIR false color composite.
//  ---------------------------------------------------------------------

//  Define a list of bands to use for a SWIR false color composite.
//
//  Please use this name for the outputs:
//    bands


//  Define viz paramters of the composite.
//  Call the variable you made in the last step to define the bands.
//  Set display range to be 8000 - 17000.
//
//  Please use this name for the outputs:
//    viz



//  Add SWIR false color composte layer for each all_clear image to map.
//  The most recent image should be the 'top' L5 layer and the oldest image should be the 'bottom' L5 layer.


//  CHECK 6
//  Use the meanValue() function to check your results from the imported module to check your final results.
//  For each time period, you should be able to report the mean value at your point of interest for each band in your composite.

print('CHECK 6');
var check = require('users/jhowarth/eePrimer:modules/checks.js');


```
