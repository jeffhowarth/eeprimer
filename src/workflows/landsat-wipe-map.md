## Introduction  

This tutorial introduces a general workflow to make a wipe map for exploring land cover changes with satellite imagery. We will use surface reflectance data from the Landsat 5 image collection to identify spring-time scenes with few clouds of Shanghai, China that are taken 25 years apart. We will then develop natural and false color composites to display the imagery and make a false color composite that aims to be more accessible to color blind map readers. Finally, we will display the two images with a wipe map to help people compare differences between the two time steps. Our final result should look and work like the map in the app below.      

<iframe
  src="https://ee-edu-apps.projects.earthengine.app/view/geog0251-05-tutorial"
  style="width:854px; height:480px"
></iframe>

---

## Start a new script  

<iframe width="720" height="405" src="https://www.youtube.com/embed/8P_SX0AITe8?si=RB5GRrwqL7hfNOIs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js
//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  TITLE:      wk06_tutorial_rgb_composites.js
//  AUTHOR:     your name
//  DATE:       today's date
//  PURPOSE:    A template for comparing color composites at two times.     
//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
```

---  

## Start to compose a map

<iframe width="720" height="405" src="https://www.youtube.com/embed/hTVUrvcEu5U?si=-W0hnGcx0bJ1xbqK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js
// ---------------------------------------------------------------------
//  Start a map.
// ---------------------------------------------------------------------

//  Define a point of interest (poi) on Shanghai.

var geometry = ee.Geometry.Point([121.46337, 31.221248]);

//  Center map on geometry (poi) and zoom level 11.



//  Set base map to satellite with labels (hybrid).


```

---

## Load L5 collection

<iframe width="720" height="405" src="https://www.youtube.com/embed/mSO2c_Pejxs?si=V3cl8aUeqCC3neaX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js
// ---------------------------------------------------------------------
//  Load Landsat 5 image collection.
// ---------------------------------------------------------------------

// Load L5 collection from this address: "LANDSAT/LT05/C02/T1_L2"

var ic ;
```

---

## Work out processing routine

<iframe width="720" height="405" src="https://www.youtube.com/embed/TWwen5KINFE?si=zjj5EmdhAGdNR3jL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js
// ---------------------------------------------------------------------
//  Work out how to process the image collection.  
// ---------------------------------------------------------------------

// Go to the L5 page on EE Catalog and grab their script for scale factors.

// Develop the processing workflow.  

var practice ;

// Check your results. 

print(
  "Practice"
  )
;
```

---

## Write routine as a function  

<iframe width="720" height="405" src="https://www.youtube.com/embed/-gdOBsRy4KI?si=A2I2I_q4xBm1mUjm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js
// ---------------------------------------------------------------------
//  Wrap up the workflow as a function.  
// ---------------------------------------------------------------------

var makeImage ;

// Apply function to make base image (April 1984).

var yr1984 ;

```

---

## CHECK

<iframe width="720" height="405" src="https://www.youtube.com/embed/_hF4wfmD6Yw?si=gEyNIzUvml21099I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js
// ---------------------------------------------------------------------
// CHECK
// ---------------------------------------------------------------------

var check = require('users/jhowarth/eePrimer:modules/checks.js');

// print(
//   "CHECK 01:",
//   yr1984.size(),
//   "CHECK 02:",
//   check.cu06(yr1984)
//   )
// ;
```

---

## Stretch Enhancement and Natural Color 

<iframe width="720" height="405" src="https://www.youtube.com/embed/3UUCVJlPimk?si=OsWs2K_HiPQYXH9m" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js
// ---------------------------------------------------------------------
//  Figure out stretch enhancement.  
// ---------------------------------------------------------------------

// Import image tools module.   

var tools = require('users/jhowarth/eePrimer:modules/image_tools.js');

// Make a histogram to see data distribution.  

// var histogram = tools.makeHistogram(
//   yr1984.first(),               // Must be an image (not an image collection)
//   "SR_B3",                      // Select one band at a time.
//   30,                           // Pixel resolution of image.
//   0,                            // Minimum value of x-axis
//   0.5                           // Maximum value of x-axis.
//   )
// ;

// Print, print, print...

// print(
//   "Year 3", 
//   yr1984,
//   yr1984.first().bandNames(),
//   histogram
//   )
// ;

// Viz for natural color composite. 

var nat_viz 
;

```

---

## CHECK  

<iframe width="720" height="405" src="https://www.youtube.com/embed/RnJ4iqukxQo?si=BM3cLYuCamI5Od_F" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js
// ---------------------------------------------------------------------
// CHECK
// ---------------------------------------------------------------------


print(
  "CHECK 03:",
  nat_viz.min[1]
  )
;
```

---

## False color  

<iframe width="720" height="405" src="https://www.youtube.com/embed/d_rlRKePNu8?si=BUYfm44yQu7ycNj2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js
// ---------------------------------------------------------------------
// Make viz and display false color (on their own. 
// ---------------------------------------------------------------------

// Use histograms to figure out viz parameters with good contrast for 
//  "SR_B7", "SR_B4", "SR_B2" in a 742 composite.

var false_viz ;

// Display base year in false color. 


```

---

## Try to accommodate color blindness

<iframe width="720" height="405" src="https://www.youtube.com/embed/Fgfxxa_ZEDY?si=ZiI2JjAFdMqk5Ye2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js
// ---------------------------------------------------------------------
// Try to accommodate color blindness. 
// ---------------------------------------------------------------------

// Swap the G and B bands to avoid magenta and green.

var cb_viz ;

// Add as map layer.

```

---

## CHECK

<iframe width="720" height="405" src="https://www.youtube.com/embed/U1tsztX2jLY?si=dLBw95NXzaUG2tnV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js

// ---------------------------------------------------------------------
// CHECK
// ---------------------------------------------------------------------

print(
  "CHECK 04:",
  false_viz.max[1],
  "CHECK 05:",
  cb_viz.max[1]
  )
;
```

---

## Explore Potential Time 2 Layers  

<iframe width="720" height="405" src="https://www.youtube.com/embed/uO9VtgJflHA?si=r7A_xNolanU-6SsH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js
// ---------------------------------------------------------------------
//  Explore potential Time 2 layers  
// ---------------------------------------------------------------------

// How does 1994 look and work?

var yr1994 ;

// Or 2004?

var yr2004 ;

// Or 2009?

var yr2009 ;

```

---

## CHECK

<iframe width="720" height="405" src="https://www.youtube.com/embed/xbv6fZpr8YE?si=39uN6KMUs8cOiSyP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js
// ---------------------------------------------------------------------
// CHECK
// ---------------------------------------------------------------------

// print(
//   "CHECK 06:",
//   yr1994.size(),
//   "CHECK 07:",
//   check.cu06(yr1994),
//   "CHECK 08:",
//   yr2004.size(),
//   "CHECK 09:",
//   check.cu06(yr2004),
//   "CHECK 10:",
//   yr2009.size(),
//   "CHECK 11:",
//   check.cu06(yr2009)
//   )
// ;
```

---

## Wipe template  

<iframe width="720" height="405" src="https://www.youtube.com/embed/s7YJD0ikadI?si=lWkYPIWhcfsnY0Zb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js
// -------------------------------------------------------------------------------
// Wipe Template  
// -------------------------------------------------------------------------------

// Make another map and add a color-NIR composite to it.

var linkedMap = ui.Map();

// Link the default Map to the other map.

var linker = ui.Map.Linker([ui.root.widgets().get(0), linkedMap]);

// Create a SplitPanel which holds the linked maps side-by-side.

var splitPanel = ui.SplitPanel({
  firstPanel: linker.get(0),
  secondPanel: linker.get(1),
  orientation: 'horizontal',
  wipe: true,
  style: {stretch: 'both'}
});

// Set the SplitPanel as the only thing in root.

ui.root.widgets().reset([splitPanel]);
```

---

## Fix the linked map

<iframe width="720" height="405" src="https://www.youtube.com/embed/D6HWPIR1ik0?si=yEVosylN4gxA0ty4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js
// -------------------------------------------------------------------------------
//  Work out the linked map. 
// -------------------------------------------------------------------------------

// Center the linked map.  



// Recreate Time 2 image (if we commented it out). 

// var yr2009 = ;

// Display Time 2 image as natural, false color, and accessible false color.   


```

---

## Link to your code  

<iframe width="720" height="405" src="https://www.youtube.com/embed/lpWXgcDuZKE?si=GxUCCzjNfLrePGQy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<center>

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdCNJyLKUnBJNLy5YzeETO7YjA9wg-nDJM-DVNKhCxCEc_32g/viewform?embedded=true" width="640" height="608" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

</center>

If the embedded form does not work for you, here is a [link](https://docs.google.com/forms/d/e/1FAIpQLSdCNJyLKUnBJNLy5YzeETO7YjA9wg-nDJM-DVNKhCxCEc_32g/viewform?usp=sf_link){target=_blank}.

---

<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivs 4.0 International License</a>.