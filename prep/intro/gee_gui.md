## Introduction 

In this course, we will work with Google Earth Engine via the GEE Code Editor. The tutorial below provides an overview of the different components of the Code Editor's graphical user interface (GUI).   

## Tutorial  

To follow along, you will need to open the GEE Code Editor in a web browser. Please see the previous tutorial if you forget how to access this. 

<iframe width="720" height="405" src="https://www.youtube.com/embed/MOYT7L0ViMI?si=o232NTwyQE9-Wk6j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Code snippets  

### Write a header. 

```js
//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  Name:     gee_ui.js 
//  Author:   Jeff Howarth
//  Date:     9/7/2023 
//  Purpose:  Introduce Earth Engine Graphical User Interface (Code Editor)
//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  
```

### Center map and set zoom level. 

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

```js
//  Set the default base map. 

Map.setOptions('SATELLITE');
```

### Load a module and call a function to draw layers on the map. 

```js
//  Load module

var tool = require('users/jhowarth/eePrimer:modules/modis_lst_demo.js');

// You can then call functions in the module as methods of this object.

tool.makeMap();
```

### Print to Console panel. 

```js
// Print info about map layers. 

print("Layers on this map:", Map.layers());

```


### Export a sample region. 

```js
// Export a sample region.

tool.exportSample();

```