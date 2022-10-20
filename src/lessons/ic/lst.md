##Introduction  

This week we will estimate land surface temperature from Landsat imagery and then compare how parts of a region differ from the whole region.  

Our key technical questions this week include:  

- What are _scenes_?  
- What are common _sources_ for image scenes and how do they differ?
- How does a _mosaic_ differ from a _composite_?

[_Link to background materials_](../../concepts/scenes.md){target=_blank}  

Our thematic questions include:  

- What is _land surface temperature_ (LST)?  
- What is a _spatial anomaly_ and how does this differ from the anomalies that we derived last week?  
- How are spatial anomalies related to the principle of _distributive justice_?  

[_Link to background materials_](../../concepts/LST.md){target=_blank}  

##Readings     

In prep for this week's problem, please read [this article](https://www.nytimes.com/interactive/2020/08/24/climate/racism-redlining-cities-global-warming.html?searchResultPosition=1){target=_blank} from *The New York Times*.   

##Map goal  

<iframe
  src="https://jhowarth.users.earthengine.app/view/eeprimer-holc-2022"
  style="width:100%; height:800px;"
></iframe>

_Here is [a link](https://jhowarth.users.earthengine.app/view/eeprimer-holc-2022){target=_blank} to the app that will open in a separate window._  

##Dropbox  

By the end of lab, please submit a link to your solution in this [DROPBOX](https://docs.google.com/forms/d/e/1FAIpQLSdQ0R_Dnn2oNoIhs7KAk6asWzVu7VZUCNc5PWYyboPsWD5NNA/viewform?usp=sf_link){target=_blank}. If you have worked through the end of lab and have not completed the solution, please try to complete the work and submit a link that updates your solution to the same dropbox before the start of lecture tomorrow.  

##New methods  

The starter script below draws on many methods that you have learned previously. Here is a list of the new methods that you will need for this problem:  

- [Filter image collection by image property](../../code/ic/filter_by_image_property.md)  
- [Reduce image by regions](../../code/image/reduce_by_regions.md)
- [Convert feature collection to image](../../code/fc/convert_to_image.md)
- [Construct a gradient legend](../../code/cart/gradient_legend.md)
- [Construct a qualitative legend](../../code/cart/qualitative_legend.md)   
- [Check image output during workflow](../../code/image/self_check_image.md)
- [Check feature collection during workflow](../../code/fc/self_check_fc.md)  

##Starter script  

```js
//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  Problem:      LST and HOLC in US Cities
//  Date:         10/19/2022
//  Author:       Your name here please
//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// -------------------------------------------------------------------
// 1. LOAD HOLC ZONES FOR A STUDY REGION
// -------------------------------------------------------------------

// Import feature collection of HOLC maps from 'projects/ee-primer/assets/holc_numeric_grades'

var holc = ee.FeatureCollection('projects/ee-primer/assets/holc_numeric_grades');

// Inspect feature collection.
//  Print first feature in collection.
//  And print list of US cities in 'city' property of the feature collection.
//    This list should show every distinct city name sorted alphabetically.
//    Your result should contain 196 elements (city names).



// Filter feature collection for a study region.
// To start, please filter for features where 'city' property is 'Baltimore'.



// -------------------------------------------------------------------
// 2. Load Landsat image collection.
// -------------------------------------------------------------------

// Import module for LST computation from 'users/sofiaermida/landsat_smw_lst:modules/Landsat_LST.js'

var LandsatLST = require('users/sofiaermida/landsat_smw_lst:modules/Landsat_LST.js');

// Apply module to produce image collection.
// Use the 'L8' collection.
// Start: 2020-07-01'. End: '2022-09-01'

var collection = LandsatLST
  .collection
    (
      'L8',                               // landsat collection
      '2020-07-01',                       // start date
      '2022-09-01',                       // end date
      fc                                  // name of study region to filter images  
    )
;

// Print first image in collection and size of collection.
// If you used Baltimore as study city,
// the collection should contain 42 images.



// -------------------------------------------------------------------
// 3. Filter Landsat image collection.
// -------------------------------------------------------------------

// Filter the collection from last step (output of LandsatLST)
// for images collected in summer months (July and August)
// with cloud cover less that 10 percent.
// Also select only the 'LST' band from the images.



// Print first image and size of collection.
// If you used Baltimore as study city,
// the collection should now contain 4 images.



// --------------------------------------------------------------------------------
// 4. Reduce image collection to image.
// --------------------------------------------------------------------------------

// Write a function that does two things:
//  (1) reduce summer month collection to mean image (grr!)
//  (2) convert units of reduced image from Kelvin to Fahrenheit.
//
// K to F conversion involves three steps:
//  (1) Subtract 273.15 from Kelvin temperature
//  (2) Multiply by 1.8
//  (3) Add 32



// Apply function to summer month image collection.



// Print your result.
// The output should now be an Image rather than an Image collection.
// If you check for min and max values, your min should be 68.2 and your max 118.8.



// --------------------------------------------------------------------
// 5. Reduce image by regions.
// --------------------------------------------------------------------

// First you want to find the mean temp in each part of your study city.
// To do this, reduce mean summer temperature values within each study city HOLC feature.
//  where HOLC features are cookie cutters,
//  and mean summer month LST is dough.
//
// Set the scale so that it is the same as the 'dough'.



// Inspect the result.
// This should be a feature collection.
// For Baltimore, you should have 59 features in collection.
// Each feature will have a new property called 'mean' that holds mean temp of feature.
// The min value should be 92.4 and the max should be 110.7.   



// Now you want to represent the 'whole' study region as a single feature.
// To do this, union all HOLC features in study city.



// Inspect result. You should have a Feature Collection with 1 Feature in it.



// Now you can find the mean temp in your whole study region.
// Reduce mean summer month land surface temperature within union of holc features




// Inspect result. This should be a feature collection with one feature.
// Again, the feature should have a property 'mean'
// that holds the mean LST in the whole study region.
// The min and max should be 102.1.



// --------------------------------------------------------------------
// 6. Convert vector to raster.
// --------------------------------------------------------------------

// Create a function to convert feature collection to image.



// Apply function to convert mean summer temperature in each HOLC feature into an image.



// Inspect result. Output should now be an Image.
// The min should be 110.7 and the max should be 92.4.



// Apply function to convert mean summer temperature for the union of HOLC features into an image.



// Inspect result. Again, output should now be an Image.
// The min and max should both be 102.1.



// --------------------------------------------------------------------
// 7. Compute spatial anomalies as percent difference.
// --------------------------------------------------------------------

// Use map algebra to estimate the 'percent difference' between parts and whole:
//  percent_diff =  (mean_part - mean_whole) / mean_whole * 100


// If you check, the min should be -9.5 and the max 8.5.

// --------------------------------------------------------------------
// 8. Compose map.
// --------------------------------------------------------------------

// Load modules.

var customBase = require('users/jhowarth/eePrimer:modules/darkBase.js');
var palettes = require('users/gena/packages:palettes');

// Set base map to 'darkBase'.

Map.setOptions('darkBase', {'darkBase': customBase.darkBase});

// Center map on study city HOLC collection at zoom level 11.



// Configure visualization parameters for percent different image.
//  Show values from -7 to 7
//  and use crameri.vik[25] from ee-palettes.



// Add percent difference image as layer to map.
//  Label layer 'Percent difference from average'.
//  Make layer display 0.5 opacity by default.


// --------------------------------------------------------------------
// 9. Construct HOLC zone reference map and masked layers.
// --------------------------------------------------------------------

// Convert HOLC study city feature collection into an image.
// Use the 'grade' property to paint image values.



// Inspect the result from above.




// Add layer of percent differences that only shows the redlined zones.
// Label this layer 'Redlined neighborhoods'.



// Add layer of percent differences that only shows the non-redlined zones.
// Label this layer 'Not redlined neighborhoods'.


// Define vis parameters for HOLC zones.
// Here is a palette based on the original HOLC color scheme:
// ['#74a161','#7caeb6','#d5c958','#d97867']



// Add HOLC reference layer to map with vis parameters defined in last step.




// --------------------------------------------------------------------
// 10. Add map keys (legends) for map layers.
// --------------------------------------------------------------------

// Load cart module.

var cart = require('users/jhowarth/eePrimer:modules/cart.js');

// Construct gradient legend for percent difference of LST layer.



// Add legend to map.



// Make labels for HOLC grades.

var holc_grades = [
  'A: Best',
  'B: Still desirable',
  'C: Definitely declining',
  'D: Hazardous'
  ]
;

// Construct qualitative legend for HOLC reference map.



// Add legend to map.







```

##Further resources  

This topic was also covered by [National Public Radio](https://www.npr.org/2020/01/14/795961381/racist-housing-practices-from-the-1930s-linked-to-hotter-neighborhoods-today){target=_blank} soon after publication of this [academic research article](https://www.mdpi.com/2225-1154/8/1/12/htm){target=_blank}.   

In fall 2020, Zach Levitt '20.5 developed the earth engine app shown below as an independent study with me in Geography. The study compared graphical presentations of data in news and academic outlets, reproduced the presentations in one or more source, and piloted designs to support novice readers. Zach is currently a [graphics editor](https://www.nytimes.com/by/zach-levitt){target=_blank} at *The New York Times*.

<iframe
  src="https://jhowarth.users.earthengine.app/view/holc-env-legacies"
  style="width:100%; height:800px;"
></iframe>

_Here is [a link](https://jhowarth.users.earthengine.app/view/holc-env-legacies){target=_blank} to the app that will open in a separate window._  
