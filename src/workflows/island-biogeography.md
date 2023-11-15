## Introduction

This tutorial introduces a general workflow to chart islands by area, distance, and recent geological history based on digital elevation models (DEM).  

We use the __California Channel Islands__ as a case to develop the model. Your script should produce a map like the one shown below. 

<iframe
  src="https://ee-edu-apps.projects.earthengine.app/view/geog0251-10-tutorial"
  style="width:854px; height:480px"
></iframe>

[_Link to app_](https://ee-edu-apps.projects.earthengine.app/view/geog0251-10-tutorial){target=_blank}

In addition, your script should produce a chart like the one shown below (but without the "demo" tag). 

![Island chart](https://geography.middlebury.edu/howarth/ee_edu/islands.png)


---  

## Define key terms

<iframe width="720" height="405" src="https://www.youtube.com/embed/BmZ2vnIuWQA?si=idYjvMuhul89Eazt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//  Title: wk10_island_biogeography.js 
//  Author: Jeff Howarth 
//  Date: Nov 15, 2023

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//  Module

var palettes = require('users/gena/packages:palettes');

//  Key variable

var ice_age_sea_level = -140;  // meters

//  A. Wenner and D. Johnson, "Land Vertebrates on the California Islands: 
//  Sweepstakes or Bridges?" In The California Islands: Proceedings of a
//  Multidisciplinary Symposium. Edited by D Power. SBMNH: Santa Barbara.
//  1980: 497-530.
```

---

## Load and display bathymetry  

<iframe width="720" height="405" src="https://www.youtube.com/embed/-n-GpDLSgEc?si=FIwHiCWl5AqDCyio" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


```js
// -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
//  ACT 1: ICE
// -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

// --------------------------------------------------------------------
//  1.1. Load and display bathymetry 
// --------------------------------------------------------------------

//  Load image collection from "projects/sat-io/open-datasets/gebco/gebco_grid"
//  Reduce collection to an image of median values.
//  Clip the image by the study region.

var gebco_grid  
;

//  Define viz parameters. 

var bath_viz = {
  min: -3000.0,
  max: 3000.0,
  palette: palettes.colorbrewer.Blues[9].reverse(),
};

//  Set up map. 

Map.centerObject(geometry);
Map.setOptions('satellite');

//  Display as map layer. 
//  Apply viz parameters. 
//  Name the layer "1.1. Bathymetry".
//  Display by default. 

```

---  

## Make land binary 

<iframe width="720" height="405" src="https://www.youtube.com/embed/9YIvmuO7ZjE?si=eLCqrRJYJe7Upbd5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js
// --------------------------------------------------------------------
//  1.2. Make and display land binary for Pleistocene. 
// --------------------------------------------------------------------

//  Make land binary for Pleistocene. 
//  Rename "land".

var land_pleistocene 
;

//  Display as map layer.
//  Use "#D3D3D3" for palette. 
//  Name the layer "1.2. Pleistocene Land"

```

---  

## Make islands

<iframe width="720" height="405" src="https://www.youtube.com/embed/G5JTrkeBilc?si=NjPpSgIoh-QgVetY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


```js
// --------------------------------------------------------------------
//  1.3. Make and display Pleistocene islands. 
// --------------------------------------------------------------------

//  Write a function to make islands from land binary. 

var makeIslands ;

//  Apply the function for Pleistocene land binary. 

var islands_pleistocene 
;

//  Display as map layer. 
//  Name the layer "1.3. Pleistocene islands"


```

---  

## Select mainland  

<iframe width="720" height="405" src="https://www.youtube.com/embed/Y9qUdWFPzDI?si=r15PNlAVXn6rb0ij" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js
// --------------------------------------------------------------------
//  1.4. Select Pleistocene mainland
// --------------------------------------------------------------------

//  Write a function to select mainland from "islands". 

var selectMainland 
;

//  Apply the function for Pleistocene islands. 

var mainland_target 
;

//  Display as map layer. 
//  Use color: "Yellow"
//  Name the layer "1.4. Mainland Pleistocene"


```

---  

## Find minimum distance  

<iframe width="720" height="405" src="https://www.youtube.com/embed/cwbQ6i_1zlA?si=kTneDedFiQy9t_dY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js
// --------------------------------------------------------------------
//  1.5. Find minimum distance between each island and the mainland
// --------------------------------------------------------------------

//  Write a function to find the minimum distance from the mainland for an island.

var islandDistance 
;

//  Apply the function over all Pleistocene islands. 
//  Remove the mainland from the collection.

var distance_pleistocene 
;

//  CHECK 01: How many islands are in your final result for Act I? 

print(
  "CHECK 01"
  );

```

---  

## Act II: Current conditions  

<iframe width="720" height="405" src="https://www.youtube.com/embed/juFOOKE6MQY?si=oI7NPyqWFNvyQB2e" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js
// -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
//  ACT 2: NOW
// -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

// --------------------------------------------------------------------
//  2.1 Make land binary
// --------------------------------------------------------------------

// Load dataset 

// var dem = ee.Image('MERIT/DEM/v1_0_3')
//     .clip(geometry)
//     ;

// Make land binary (use 1 m above sea level to define coasts)
// Multiply binary by 2
// Rename band "land"

var land_now ;

// Add layer to map
// Use "#242E33" for palette.
// Name the map layer  "2.1. Land Now"



// --------------------------------------------------------------------
//  2.2 Create modern island objects
// --------------------------------------------------------------------

//  Make islands for current conditions
//  Filter for islands where "area_sq_km" is greater than 0.1.

var islands_now 
;

// CHECK 2: How many island objects are in the collection?


// Add layer to map.
// Name the layer "2.2. Islands Now objects"


// --------------------------------------------------------------------
//  2.3. Distinguish mainland from islands
// --------------------------------------------------------------------

// Select the mainland from the current islands. 

var mainland_target 
;

//  Display mainland on the map as a layer
//  Use "Yellow" color.
//  Name the layer "2.3. Mainland Now"



// --------------------------------------------------------------------
//  2.4. Find minimum distance between each island and the mainland
// --------------------------------------------------------------------

//  Calculate the distance of each island from the mainland.
//  Remove the mainland from the collection. 

var islands_distance 
  ;

//  CHECK 3: How many islands are in the collection?


//  Display result as a map layer.
//  Name the layer "2.4. Islands with area and distance"

```

---  

## Identify oceanic islands  

<iframe width="720" height="405" src="https://www.youtube.com/embed/GzAVlh5yq38?si=wmFczK_t1sVJ3Lyc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js

// -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
//  ACT 3: ACROSS TIMES
// -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

// --------------------------------------------------------------------
//  3.1. Identify Oceanic Islands
// --------------------------------------------------------------------

//  Convert Pleistocene islands to image. 

var pleistocene_islands_image 
;

//  Identify current islands that overlap pleistocene islands. 

var now_and_then 
;

//  Isolate oceanic islands. 

var islands_oceanic
;

```

--- 

## Identify and tag continental islands

<iframe width="720" height="405" src="https://www.youtube.com/embed/PL8Vd9mhE20?si=mxBaVIwPpBBFlvLy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js

// --------------------------------------------------------------------
//  3.2. Identify and tag continental islands 
// --------------------------------------------------------------------

//  Write a function to tag continental islands. 

var tagContinental
;

// Create an continental islands feature collection and apply the function. 

var islands_continental
;

```

--- 

--- 

## Combine islands with history classes

<iframe width="720" height="405" src="https://www.youtube.com/embed/Zd6KamlFCw8?si=wn-xqJy4HEZhRD3D" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js

// --------------------------------------------------------------------
//  3.3. Combine islands with history classes. 
// --------------------------------------------------------------------

//  Merge all the islands into a single collection.

var all_islands 
;

//  Display as map layer.
//  Name layer "3.3. Islands with history"

```

--- 

## Make area-distance chart

<iframe width="720" height="405" src="https://www.youtube.com/embed/id28l-dLGSA?si=EqMWUJTZVhBKrbE0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js
// --------------------------------------------------------------------
//  3.4. Make area - distance chart
// --------------------------------------------------------------------

// Define the chart and print it to the console.

var chart = ui.Chart.feature.groups(
  {
    features: all_islands.sort("land"), 
    xProperty: 'distance_km', 
    yProperty: 'area_sq_km',
    seriesProperty: 'land'
    
  })
  .setChartType('ScatterChart')
  .setOptions(
    {
      title: 'Area vs Distance',
      hAxis: {
        title: 'km',
        titleTextStyle: {italic: false, bold: true}
      },
      vAxis: {
        title: 'square km',
        titleTextStyle: {italic: false, bold: true}
      },
      pointSize: 10,
      colors: ['#A8A422', "#D3D3D3", "#227BA8"],
      position: 'bottom-left'
      
    }
  )

;

print(chart);
```

---  

## Make a highlighter layer

<iframe width="720" height="405" src="https://www.youtube.com/embed/Ck_jv4Rg6rQ?si=NQ2WVzOPGn213EfK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


```js
// --------------------------------------------------------------------
//  3.5. Highlight Islands
// --------------------------------------------------------------------

//  Define target properties

// var target_property = "area_sq_km";
// // var target_property = "distance_km";

//  Define target value

var target_value = ee.Number(-9999);

//  Make target layer.

var target 
;

//  Display as map layer. 
//  Use color "Orchid".
//  Name the layer "3.5. Selected Feature"


```

---

<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivs 4.0 International License</a>.