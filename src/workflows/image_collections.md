## Introduction  

This tutorial introduces a basic workflow for processing and visualizing image collections with Earth Engine. You will use a MODIS Land Surface Temperature product to make a map that shows the mean LST for January 2023 in degrees Celsius. By the end of the tutorial, you should have a map that looks like the image below. 

![Week 02 tutorial result](https://geography.middlebury.edu/GEOG0251/tutorials/wk02_tutorial.png)

---
## Start a new script

<iframe width="720" height="405" src="https://www.youtube.com/embed/YhEWHyGuLZU?si=umtJ1-Q7oLMJBPNJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


```js
//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  TITLE:      wk02_tutorial.js
//  AUTHOR:     your name
//  DATE:       today's date
//  PURPOSE:    A basic workflow for processing image collections.     
//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 

// Load check module. 

var check = require('users/jhowarth/eePrimer:modules/checks.js');

// ----------------------------------------------------------------
//  Process the image collection.
// ----------------------------------------------------------------
```

---
## Load image collection 

<iframe width="720" height="405" src="https://www.youtube.com/embed/6rNqFlevP84?si=TbOVfN8V3mHKO___" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js

// Step 1: Load image collection

var step_1 = ee.ImageCollection();
```

---
## Filter by date

<iframe width="720" height="405" src="https://www.youtube.com/embed/ZJ0K3S09qZw?si=SJYiyTAC3lsH0rrX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js
// Step 2: Filter image collection by date.

var step_2 = step_1.filter(ee.Filter.date());

```

---
## Select band

<iframe width="720" height="405" src="https://www.youtube.com/embed/vQn7sbxEIas?si=FWuKEPhxEpVNqwNE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js
// Step 3: Select band.

var step_3 = step_2.select();

```

---
## Reduce to image

<iframe width="720" height="405" src="https://www.youtube.com/embed/zmbCTJ5Yx6Y?si=pgU-ycey_bYyeOB3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js
// Step 4: Reduce image collection.

var step_4 = step_3;

```

---
## Scale data (if necessary)

<iframe width="720" height="405" src="https://www.youtube.com/embed/mPJZQngtq3E?si=ftVEyVPqAoFxLPod" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js
// Step 5: Apply scalar (if EE data catalog tells you the data are scaled).

var step_5 = step_4;

```

---
## Convert units (if necessary)

<iframe width="720" height="405" src="https://www.youtube.com/embed/Q-mFdMr01g8?si=t3t2CzYtjzII-s1i" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js

// Step 6: Convert units (if units need conversion).

var step_6 = step_5;


```

---
## Visualize results as layer

<iframe width="720" height="405" src="https://www.youtube.com/embed/n3-wm5z9lc0?si=PxS_2wh0FGnl5nKb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js
// ----------------------------------------------------------------
//  Visualize results as layer.
// ----------------------------------------------------------------

//  Set base map.



//  Load community palettes. 

var palettes = require('users/gena/packages:palettes');

// print('Community palettes', palettes);

//  Define visualization parameters. 

// var viz = {
//   bands: ,
//   min: ,
//   max: , 
//   palette: palettes.colorbrewer.RdBu[11]
// };

//  Display the data values with the visualization parameters.

// Map.addLayer();
```

---
## Add a legend

<iframe width="720" height="405" src="https://www.youtube.com/embed/jhSf0esOElM?si=dluYy9SJyuah5cAM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js
// ---------------------------------------------------------------------
//  Add a legend.
// ---------------------------------------------------------------------

//  Load cart module.

var cart = require('users/jhowarth/eePrimer:modules/cart.js');

// Call makeGradientLegend function and pass three parameters.

var legend = cart                                           // module
  .makeGradientLegend(                                      // function
    viz,                                                    // viz parameters
    'degrees (C)',                                          // a label for legend
    'bottom-left'                                           // position on map
  )
;

// Add legend to map. 

// Map.add();
```

