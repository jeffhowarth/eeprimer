## Introduction  

This tutorial introduces a general workflow to map the burn severity of wildfire with Sentinel-2 data and compare the result to a global dataset of building footprints. 

We will use the [CZU Lightning Complex fires](https://en.wikipedia.org/wiki/CZU_Lightning_Complex_fires){target=_blank} on California's Slow Coast as a case study.  

As you work through the tutorial, you may find it helpful to refer to the [fire scars](../glossary/fire-scars.md){target=_blank} page in the glossary and the [Sentinel-2](../starters/sentinel2.md){target=blank} page in the starters. 

Your final result should look and work like the map in the app below.  

<iframe
  src="https://ee-edu-apps.projects.earthengine.app/view/geog0251-07-tutorial"
  style="width:854px; height:480px"
></iframe>

[_Link to app_](https://ee-edu-apps.projects.earthengine.app/view/geog0251-07-tutorial){target=_blank}

---  

## Start a new file  

<iframe width="720" height="405" src="https://www.youtube.com/embed/B8YEWKTFs7k?si=iJLmf7jAoNyC02vL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js
//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//  Title: wk07_CZU_fire_complex.js 
//  Author: Jeff Howarth 
//  Date: Oct 24, 2023

//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

```

## Sentinel-2 starter script  

<iframe width="720" height="405" src="https://www.youtube.com/embed/UKBy2Iy_lY0?si=tzqtMyI_gIOfODWi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

---

## Define aoi  

<iframe width="720" height="405" src="https://www.youtube.com/embed/1kwTnMvzgmc?si=GFjbhkwTBhWPgCnn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

---  

## Adjust ingredients   

<iframe width="720" height="405" src="https://www.youtube.com/embed/P4Lkn8GuIRs?si=_Ea4XI3S1-La3zDM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

---  

## Adjust display  

<iframe width="720" height="405" src="https://www.youtube.com/embed/NG1DqfXoTJA?si=mzqd-OTlQVMeG7Q2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js
// Import image tools module.   

var tools = require('users/jhowarth/eePrimer:modules/image_tools.js');

// Make a histogram to see data distribution.  

var histogram = tools.makeHistogram(
  output,              
  viz_bands[2],
  30,
  0,
  0.5
  )
;

// Print, print, print...

print(
  "Histogram", 
  histogram
  )
;
```

---

## Write function  

<iframe width="720" height="405" src="https://www.youtube.com/embed/hYbVaPD90fY?si=jMP6_sUwYcAfsKqF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js
// ----------------------------------------------------------------------
//  Write image processing workflow as a function. 
// ----------------------------------------------------------------------
```

---

## Apply function  

<iframe width="720" height="405" src="https://www.youtube.com/embed/SORdvk0If4o?si=aX2O04sD1YwCGX5V" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js
// ----------------------------------------------------------------------
//  Apply function to create a post- and pre- burn image. 
// ----------------------------------------------------------------------

var post_burn ;
var pre_burn ;

// Display both as map layers.

```

---

## Calculate NBR 

<iframe width="720" height="405" src="https://www.youtube.com/embed/oCswWvg60iE?si=Rj00kTae8Fbdwg1t" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js
// ----------------------------------------------------------------------
//  Calculate normalized burn ratio for both snapshots.  
// ----------------------------------------------------------------------

// var spectral = require("users/dmlmont/spectral:spectral");

// print(spectral);

// // Test the method. 

var nbr_test ;

// Write a function to estimate normalized burn ratio.

var makeBurnRatio ;

// Apply function to post- and pre- conditions.

var post_burn_ratio ;
var pre_burn_ratio ;

// Display as map layers.
```

---  

## Calculate burn severity 

<iframe width="720" height="405" src="https://www.youtube.com/embed/yIh7EsmXMcA?si=A399RqacVAuUU6r8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js
// -------------------------------------------------------------
// Calculate burn severity index.  
// -------------------------------------------------------------

// Subtract NBR values of post-conditions from values of pre-conditions.

var burn_severity ;

// Add as map layer. 

```

---  

## Classify burn severity 

<iframe width="720" height="405" src="https://www.youtube.com/embed/vRrJIts0QSA?si=9SEmtZsqI_2bpbMN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js

// -------------------------------------------------------------
// Classify burn severity based on USGS thresholds.  
// -------------------------------------------------------------

// Apply additive thresholds to burn severity image.

var burn_severity_classes ;

// Quickly see results  
```

---  

## Display layer with color  

<iframe width="720" height="405" src="https://www.youtube.com/embed/ZA17D9CPs2Y?si=r0bbPdhzRfN6j_-I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js

// -------------------------------------------------------------
// Display result as a map layer
// -------------------------------------------------------------

// Make viz parameters for classified layer.

var bsc_viz = {
  min: 0,
  max: 6,
  palette: [
    '#778735', 
    '#a7c04f', 
    '#07e444', 
    '#f6fc0d', 
    '#f7b140', 
    '#f86819', 
    '#a601d4'
  ]
};

Map.addLayer(
  burn_severity_classes, 
  bsc_viz, 
  'Burn severity classes',
  true,
  0.6
  )
;
```

---   

## Display class key    

<iframe width="720" height="405" src="https://www.youtube.com/embed/A0uR1lUogAs?si=aJHzrqXatfxa0sF8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js

// -------------------------------------------------------------
// Add key (legend) for burn severity classes. 
// -------------------------------------------------------------

// Create a list of labels for classes.
// The length of this list must equal the length of class values.  

var bsc_labels = [
  'High post-fire regrowth',
  'Low post-fire regrowth',
  'Unburned',
  'Low Severity',
  'Moderate-low Severity',
  'Moderate-high Severity',
  'High Severity'
  ]
;

var cart = require('users/jhowarth/eePrimer:modules/cart.js');

var legend = cart                                     
      .makeLegend(
        'Burn severity index',                        
        bsc_viz.palette,                              
        bsc_labels,
        'bottom-left'                                 
      );

Map.add(legend);
```

---  

## Create ocean mask  

<iframe width="720" height="405" src="https://www.youtube.com/embed/ySZlc3F2P9Y?si=KoMRhCeHnzratR4z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js
// -------------------------------------------------------------
// Create a mask to hide the ocean. 
// -------------------------------------------------------------

var ocean_mask ;
  

```

---   

## Get building footprints  

<iframe width="720" height="405" src="https://www.youtube.com/embed/TiuP7nwY2TA?si=Bikw9MGub3xy9VFh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js

// ----------------------------------------------------------------------
//  Get building footprints  
// ----------------------------------------------------------------------

var ee_folder ;

// print(ee_folder);

var buildings ;

// print(buildings.size());

// Add layer to map.  

```

---  

## Select burned buildings    

<iframe width="720" height="405" src="https://www.youtube.com/embed/NfDEHwBCdAA?si=ehSn1hM6YoysrFBF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js

// ----------------------------------------------------------------------
//  Select buildings in moderately to severely burned areas     
// ----------------------------------------------------------------------

var burn_severity_buildings 
;

var burned_buildings 
  ;

print(
  "Number of burned buildings",
  burned_buildings.size()
  );
```

---  

## Display building centroids 

<iframe width="720" height="405" src="https://www.youtube.com/embed/0dXN4jPsijI?si=FHJ6WTT61BCg3vco" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js
// ----------------------------------------------------------------------
//  Display centroids on map    
// ----------------------------------------------------------------------

//  Make a centroid function

var makeCentroid ;

// Apply function

var burned_centroids ;

// Display as layer. 

```

---  

## Checks for tutorial  

After you have completed this tutorial, please copy and paste this code block at the end of your script, then run your script, and complete the tutorial quiz on Canvas. 

Please note that these checks simply provide a means to quickly assess if you have successfully reproduced the workflow demonstrated in the tutorial. Developing skills in _map interpretation_ --  understanding what the results can tell us even though they represent a model of the world and not an exact replica of it --  complements skills in _map production_. The checks below, however, simply provide a scalable method to evaluate the latter. The former we will explore more through class discussions.   

```js
// ----------------------------------------------------------------------
//  Tutorial checks. 
//
//  This code block assumes that you have followed ALL the naming 
//   variable names used in the tutorial videos.  
// ----------------------------------------------------------------------

var check = require('users/jhowarth/eePrimer:modules/checks.js');

print(
  "CHECK 01:", aoi.area(1),
  "CHECK 02:", check.t07(post_burn.select("B8")),
  "CHECK 03:", check.t07(pre_burn.select("B8")),
  "CHECK 04:", check.t07(post_burn_ratio),
  "CHECK 05:", check.t07(pre_burn_ratio),
  "CHECK 06:", check.t07(burn_severity),
  "CHECK 07:", check.t07(burn_severity_classes),
  "CHECK 08",  burn_severity_buildings.first().get("max"),
  "CHECK 09",  burned_buildings.first().get("max"),
  "CHECK 10",  burned_centroids.first().geometry()  
  )
;
```