## Introduction  

This tutorial introduces a general workflow to map land surface temperature (LST) anomalies for locations in a region.  

We use __Baltimore, MD__ as a case to develop the model. We then test and adapt the model by changing our area of interest to __Houston, Texas__.   

As you work through the tutorial, you may find it helpful to refer to the [land surface temperature](../glossary/lst.md){target=_blank} and [anomalies](../glossary/anomalies.md){target=_blank} pages in the Glossary. 

The app below shows what your final result should look like for the Test Case (Houston) by the end of the tutorial.   

<iframe
  src="https://ee-edu-apps.projects.earthengine.app/view/geog0251-08-tutorial"
  style="width:854px; height:480px"
></iframe>

[_Link to app_](https://ee-edu-apps.projects.earthengine.app/view/geog0251-08-tutorial){target=_blank}

---

## Start a new script  

<iframe width="720" height="405" src="https://www.youtube.com/embed/bQMMZP91G-E?si=zdUVAkyWpG2nOvqU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js
//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  Name:         wk08_tutorial_lst_spatial_anomalies.js 
//  Problem:      LST anomalies within urban areas
//  Date:         10/29/2023  
//  Author:       Jeff Howarth  
//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
```

## Define area of interest

<iframe width="720" height="405" src="https://www.youtube.com/embed/xLCWwOQQdig?si=Cgl4DpoH8jWMSjyw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js
// ------------------------------------------------------------------------
//  Define area of interest
// ------------------------------------------------------------------------

// Import feature collection of Census 2020 Urban Areas from "projects/ee-primer/assets/regions_usa/uac20" 
// Filter for Baltimore, MD.

var aoi 
;

print(
  'Urban Area'
)
;
```

[2020 Tiger/Line Shapefiles](https://www.census.gov/geographies/mapping-files/2020/geo/tiger-line-file.html){target=_blank} 

---

## Define AOI extent rectangle

<iframe width="720" height="405" src="https://www.youtube.com/embed/X3SH2P2WQvs?si=O-NThHNx3mBzwXr4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js
// ------------------------------------------------------------------------
//  Define area of interest extent rectangle.
// ------------------------------------------------------------------------

var aoi_extent 
;

// Map.centerObject(aoi_extent, 10);
// Map.setOptions('hybrid');


print(
  "AOI",
  "EXTENT"
  )
;

```

---

## Calculate LST from Landsat   

<iframe width="720" height="405" src="https://www.youtube.com/embed/EzyHImkeDIA?si=tozliuYFesXNoSBu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js
// ------------------------------------------------------------------------
//  Calculate LST from Landsat Collection.
// ------------------------------------------------------------------------

// Import module for LST computation from 'users/sofiaermida/landsat_smw_lst:modules/Landsat_LST.js'

var LandsatLST = require('users/sofiaermida/landsat_smw_lst:modules/Landsat_LST.js');

// Apply module to produce image collection.
// Use the 'L8' collection.
// Start: '2020-07-01'. End: '2022-09-01'.

var dataset = LandsatLST
  .collection
    (
                      // landsat collection
                      // start date  
                      // end date
                      // filter by aoi extent rectangle
    )
;

// Print first image in collection and size of collection.

print(
  'LST collection'
  )
;

```

---

## Filter collection  

<iframe width="720" height="405" src="https://www.youtube.com/embed/Hy_8KLUK6n0?si=vGGaq69TbbeSy2XC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js

// ------------------------------------------------------------------------
//  Filter Landsat image collection.
// ------------------------------------------------------------------------

// Filter the dataset for images collected in summer months (July and August)
// with cloud cover less that 10 percent.
// Also select only the 'LST' band from the images.

var output
;

// Print first image and size of collection.  

print(
  'Filtered Output'
  )
;
```

---  

## Reduce collection to image  

<iframe width="720" height="405" src="https://www.youtube.com/embed/ewBJA8ojC-w?si=OJip108Ph-rQx3Y7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js
// --------------------------------------------------------------------------------
//  Reduce image collection to image.  
// --------------------------------------------------------------------------------

// Process image collection as follows:  
//  (1) calculate the average (mean) temperature of summer month for each pixel; 
//  (2) convert units of reduced image from Kelvin to Fahrenheit;
//  (3) clip to the aoi bounding geometry
//  (4) rename the band "AVG_LST_F" in the output image.
//
// K to F conversion involves three steps:  
//  (1) Subtract 273.15 from Kelvin temperature
//  (2) Multiply by 1.8 
//  (3) Add 32

var output_image 
;

// Print your result. 

print(
  'Output image'
  )
;
```

---  

## Display as map layer  

<iframe width="720" height="405" src="https://www.youtube.com/embed/AncThjAsG3A?si=VUq2xnkTTFnZBlgh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js
// ---------------------------------------------------------------------
//  Display image as a map layer.  
// ---------------------------------------------------------------------

// Import modules.   

var tools = require('users/jhowarth/eePrimer:modules/image_tools.js');
var palettes = require('users/gena/packages:palettes');


// Define viz parameters.

var output_viz = {
  // bands: [],
  min: [0],
  max: [150],
  palette: palettes.colorbrewer.YlOrRd[9]
};

// Make a histogram to see data distribution.  

// var histogram = tools.makeHistogram(
//         // Must be an image (not an image collection)
//         // Select one band at a time.
//         // Pixel resolution of image.
//         // Minimum value of x-axis
//         // Maximum value of x-axis.
//   )
// ;

// Print, print, print...

print(
  "Histogram"
  )
;


```

---  

## Calculate median of AOI    

<iframe width="720" height="405" src="https://www.youtube.com/embed/MyoXwNyaNZE?si=PhtCyYrMQcfYHrEA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js
// ---------------------------------------------------------------------
//  Calculate median LST value for the urban area. 
// ---------------------------------------------------------------------

var median_LST = 
;

print(
  "Median LST"
  )
;
```

---  

## Convert feature collection to image  

<iframe width="720" height="405" src="https://www.youtube.com/embed/UpUFAojbeag?si=hXnG4CJGO6wf4Fop" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js
// ---------------------------------------------------------------------
//  Convert to image. 
// ---------------------------------------------------------------------

var median_LST_image 
;

```

---  

## Calculate anomalies 

<iframe width="720" height="405" src="https://www.youtube.com/embed/pVQCHVUAAx8?si=7RrPIkFV2pob1qId" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js
// ---------------------------------------------------------------------
//  Calculate anomalies as percent difference from regional median 
// ---------------------------------------------------------------------

var anomaly 
;

var anomaly_viz 
;

// Make a histogram to see data distribution.  

// var histogram = tools.makeHistogram(
//     // Must be an image (not an image collection)
//     // Select one band at a time.
//     // Pixel resolution of image.
//     // Minimum value of x-axis
//     // Maximum value of x-axis.
//   )
// ;

// Print, print, print...

print(
  "Histogram"
  )
;

// Display as layer.

```

---  

## Add legend  

<iframe width="720" height="405" src="https://www.youtube.com/embed/AabEr62mw1o?si=L0v8FOmD-c5tIAcT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js
// ---------------------------------------------------------------------
//  Add legend 
// ---------------------------------------------------------------------

//  Load cart module.

var cart = require('users/jhowarth/eePrimer:modules/cart.js');

// Call makeGradientLegend function and pass three parameters.

// var legend = cart                                                     // module
//   .makeGradientLegend(                                                // function
//       // viz parameters
//       // a title for legend
//       // position on map
//   )
// ;

// Map.add(legend);

```

---  

## Test model on another region  

<iframe width="720" height="405" src="https://www.youtube.com/embed/tvb6GCRILHI?si=HMk2zfNLehTFogdl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

--- 

## Tutorial Checks 

```js
// --------------------------------------------------------------------------------
//  Tutorial Checks  
// --------------------------------------------------------------------------------

var check = require('users/jhowarth/eePrimer:modules/checks.js');

// Please be sure to modify the model to fit the Test Case (Houston).
// Please be prepared to report the following checks on the tutorial quiz.
// These checks assume that you followed the names used in the tutorial. 


print(
  "CHECK 01:", aoi.first(),
  "CHECK 02:", aoi_extent.area(1).divide(1000000),
  "CHECK 03:", dataset.size(),
  "CHECK 04:", output.size(),
  "CHECK 05:", check.t08(output_image, aoi),
  "CHECK 06:", median_LST.first().get("median"),
  "CHECK 07:", check.t08(anomaly, aoi)
);
```

---

<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivs 4.0 International License</a>.