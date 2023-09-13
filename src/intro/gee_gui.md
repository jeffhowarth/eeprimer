## Introduction 

In this course, we will work with Google Earth Engine via the GEE Code Editor. The tutorial below provides an overview of the different components of the Code Editor's graphical user interface (GUI).   

## Tutorial  

I split this tutorial into separate videos. If I show code in the video, you can find the snippets below each video.  

To follow along with the videos, you will need to open the GEE Code Editor in a web browser. Please see the previous tutorial if you forget how to access the editor. 

### Explore the map interface. 

<iframe width="720" height="405" src="https://www.youtube.com/embed/71lDbWlqZec?si=2XSmOzjZvE8vAznJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Write a header. 

<iframe width="720" height="405" src="https://www.youtube.com/embed/b3TPJSb5CNU?si=QuRg4mAhfYgOmiib" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js
//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  Name:     gee_ui.js 
//  Author:   Jeff Howarth
//  Date:     9/7/2023 
//  Purpose:  Introduce Earth Engine Graphical User Interface (Code Editor)
//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  
```

### Center map and set zoom level. 

<iframe width="720" height="405" src="https://www.youtube.com/embed/EKhfGl6A6Gw?si=xPDUF6f7kgczWJ2C" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js
//  Center and set zoom level the map.

Map.setCenter(
  -50,                  // Longitude
   40,                  // Latitude
   3                    // Zoom level
  )
;
```

### Set the default base map. 

<iframe width="720" height="405" src="https://www.youtube.com/embed/lFiWSTi-luc?si=czgfEgrPRQ-CRdho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js
//  Set the default base map. 

Map.setOptions('SATELLITE');
```

### Load LST module. 

<iframe width="720" height="405" src="https://www.youtube.com/embed/djy4oVgaFlE?si=sDsY8yK1AWRZBB5M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js
//  Load module

var tool = require('users/jhowarth/eePrimer:modules/modis_lst_demo.js');

// You can then call functions in the module as methods of this object.

tool.makeMap();
```

### Inspect data. 

<iframe width="720" height="405" src="https://www.youtube.com/embed/Gv4ASCrLMB4?si=1PCOu2oLaRg8EcAg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


```js
// Print info about map layers. 

print("Layers on this map:", Map.layers());

```

---

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.