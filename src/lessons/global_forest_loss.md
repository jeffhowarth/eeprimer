![Vox graphic](https://cdn.vox-cdn.com/uploads/chorus_asset/file/24064162/line_final.jpg)

<center>  

[_source_](https://www.vox.com/down-to-earth/2022/9/29/23373427/amazon-rainforest-brazil-jair-bolsonaro-lula-deforestation){target=_blank}  

</center>  

## Introduction  

- Over the last twenty years, how has the rate of deforestation changed in different regions of the world?  

- How can satellite imagery distinguish different human and environmental factors that cause deforestation?

- How does the size and shape of study regions influence the calculation of deforestation?  

## Background  

- [Motivation](https://www.science.org/content/article/deforestation-amazon-shooting-brazil-s-president-calls-data-lie){target=_blank}  

- [Earth observatory stories](https://earthobservatory.nasa.gov/collection/1676/amazon-deforestation){target=_blank}  

- [High-Resolution Global Maps of 21st-Century Forest Cover Change](https://www.science.org/doi/10.1126/science.1244693){target=_blank}

- [Hansen Global Forest Change (2000 - 2021)](https://developers.google.com/earth-engine/datasets/catalog/UMD_hansen_global_forest_change_2021_v1_9){target=_blank}

- [Global Forest Change](https://glad.earthengine.app/view/global-forest-change#dl=1;old=off;bl=off;lon=20;lat=10;zoom=3;){target=_blank}

## Global forest loss explorer  

Your goal this week is to write a script that reproduces the app shown below.  

<iframe
  src="https://jhowarth.users.earthengine.app/view/ee-edu-global-forest-loss"
  style="width:100%; height:800px;"
></iframe>

_This [**link**](https://jhowarth.users.earthengine.app/view/ee-edu-global-forest-loss){target=_blank} will open the app in a new browser tab._   

## Deliverables (part 1)  

Before the start of lab on Wednesday (11/30), please complete [**Form 1**](https://forms.gle/14Yn4YEM36ZD9tGv6){target=_blank} to submit answers for the four checkpoints and a link to your script.      

## Starter script (part 1)  

```js
//  NAME:     Global forest loss Part 1
//  AUTHOR:   your name
//  DATE:     today's date

//  Construct image from address: "UMD/hansen/global_forest_change_2021_v1_9"
//  Name the output: dataset



//  Threshold image so that land is 1 and everything else is 0
//  Name the output: land_mask



//  Add land mask as layer.
//  Make land 'black' and not land 'DarkSlateGray'.
//  Name the layer 'land'.



//  Create viz parameters for 'treecover2000' band.
//  Display range from 0 to 100.
//  Use 'black' to display min and '#00992B' to display max.
//  Name the variable: tree_viz



//  Add dataset to map as a layer and apply land_mask and tree_viz.
//  Name the layer 'tree cover' and make not shown by default.



//  Define the loss palette. (Give this to them).

var loss_palette = [
  '#19faaf',
  '#4ff398',
  '#6cec81',
  '#82e46c',
  '#95dc57',
  '#a5d344',
  '#b4ca32',
  '#c2c020',
  '#cfb610',
  '#daab04',
  '#e59f06',
  '#ef9313',
  '#f78620',
  '#fd782d',
  '#ff693a',
  '#ff5a47',
  '#ff4b55',
  '#ff3b63',
  '#ff2b72',
  '#fb1d81',
  '#f11590',
  '#e5179f'
  ]
;

//  Define viz parameters for 'lossyear' band
//  Display range from 0 to 21 and call loss_palette.
//  Name the variable: loss_viz.



//  Add dataset as layer to map and apply loss_viz.
//  Name the layer 'tree loss year' and make shown by default.



//  Select swir2, nir, and red bands from the last year and rename SWIR2, NIR, and Red.
//  Name the variable: last_composite.



//  Add last_composite as a layer to the map and apply land_mask as a mask.  
//  Display as a SWIR2 false color composite with display range from 0 to 100.
//  Name the layer 'Last image' and make shown by default.



//  Compute the normalized difference in vegetation index (NDVI) with the 'NIR' and 'Red' bands from the last_composite.
//  Name the variable: last_ndvi.



//  Load the community palettes from 'users/gena/packages:palettes'.

var palettes = require('users/gena/packages:palettes');

//  Define viz parameters for the NDVI layer.
//  Display the colorbrewer.PRGn[11] community palette stretched from -0.8 to 0.8.
//  Name the variable: ndvi_viz



//  Add last_ndvi as a layer and apply the land_mask and ndvi_viz.
//  Name the layer 'Last ndvi' and do not show layer by default.



//  Compute the normalized burn ratio from last_composite.
//  Name the variable: last_nbr



//  Define viz paramters for the normalized burn ratio.
//  Apply the colorbrewer.BrBG[11] palette and stretch from -0.8 to 0.8.
//  Name the variable: nbr_viz



//  Add last_nbr as a layer to the map and apply land_mask as a mask and nbr_viz.
//  Name the layer 'Last burn ratio' and make not shown by default.  



//  Construct a feature collection from address: "FAO/GAUL/2015/level1".
//  Name the variable: regions


//  Add regions to the map as a layer.
//  Display the regions with a white color and name the layer 'Regions'.
//  Do not show layer by default.



//  Construct a feature collection from address: "WCMC/WDPA/current/polygons"
//  Filter the feature collection for features where the 'STATUS' is not 'proposed'
//  And where the 'IUCN_CAT' is not 'VI'.
//  Name the variable: protected_lands



//  Add protected lands as a layer to the map. Display with color: '#17E551'.
//  Label the layer 'Protected Lands' and do not show by default.



//  *******************************************************
//  CHECKS
//  *******************************************************

//  Please uncomment all the lines below and run.
//  (If you followed the naming prompts, the code below should run.)

// var check = require('users/jhowarth/eePrimer:modules/checks.js');
//
// var poi = ee.Geometry.Point([-53.56837074828233, -6.485893364659269]);
//
// check.meanValue(                                // Call function
//   dataset,                                      // Image to check
//   ['treecover2000', 'lossyear', 'datamask'],    // Bands to select in image as a list
//   poi,                                     // Geometry to use as a cutter
//   900,                                          // Pixel resolution (scale) of image (dough)
//   'CHECK 1'                                     // Label to print to console above result.
//   )
// ;
//
// check.meanValue(                                // Call function
//   last_ndvi,                                    // Image to check
//   'nd',                                         // Bands to select in image as a list
//   poi,                                     // Geometry to use as a cutter
//   900,                                          // Pixel resolution (scale) of image (dough)
//   'CHECK 2'                                     // Label to print to console above result.
//   )
// ;
//
// check.meanValue(                                // Call function
//   last_nbr,                                     // Image to check
//   'nd',                                         // Bands to select in image as a list
//   poi,                                     // Geometry to use as a cutter
//   900,                                          // Pixel resolution (scale) of image (dough)
//   'CHECK 3'                                     // Label to print to console above result.
//   )
// ;
//
// print('CHECK 4', 'size', protected_lands.size());


```

## Starter scripts (part 2)  

Making the Global Forest Loss app involves the following steps:  

1. Initialize widgets for the layout (a side panel and a split panel that holds two linked maps).  

2. Initialize and add widgets to the side panel (for the title, instructions, cart panel, and credits).

3. Make and add image layers for the left map (land, tree cover, tree loss year).    

4. Make and add image layers for the right map (last image, last ndvi, last burn ratio).   

5. Make and add reference feature layers for both maps (regions, protected lands).    

6. Prepare an image to chart change over time.    

7. Select a study region and center map on it.    

8. Chart change over time in selected region and add to side panel.  

9. Write functions to make app interactive.

In the sections below, I have posted a starter script for each step of the solution. Some of the chunks require you to fill in missing code blocks. Other chunks are complete and should run as long as you follow the naming conventions.  

---

### 1. Initialize widgets for the layout.     

This step works with _widgets_ (user interface objects). Widgets are the basic elements for creating panels, labels, charts, even maps and map layers.   

New code:  

- [Panel widget](../code/cart/widget_panel.md)   
- [Map widget](../code/cart/widget_map.md)  
- [Swipe maps](../code/cart/widget_swipe.md)  

---  

```js
//  NAME:     Global forest loss app
//  AUTHOR:   Jeff Howarth
//  DATE:     1/28/2022  

//  ----------------------------------------------------------------------------
//  1. Initialize layout
//  ----------------------------------------------------------------------------

//  Initialize side panel. Define width as 20%.
//  Name the variable: side_panel



//  Initialize a map widget for the left map.
//  Set basemap to SATELLITE.
//  Name the variable: left_map



//  Initialize a map widget for the right map.
//  Set basemap to SATELLITE.
//  Name the variable: right_map.



//  Initialize a map linker widget and link left_map and right_map.
//  Name the variable: map linker   



//  Initialize a split panel widget to hold the two linked maps.   
//  Define the orientation as 'horizontal' and wipe as true.
//  Name the variable: split_panel  



//  Clear root.
//  Then add side panel and split panel to root.



```

### 2. Initialize widgets for the side panel.  

New code:  

- [Label widgets](../code/cart/widget_label.md)  

---

```js
//  ----------------------------------------------------------------------------
//  2. Initialize and add widgets to the side panel.
//  ----------------------------------------------------------------------------

//  Initialize style parameters for title labels.
//  Name the variable: title_style



//  Initialize a label widget for the title and apply title_style.
//  Name the variable: title



//  Initialize style parameters for instructions.
//  Name the variable: instructions_style



//  Initialize a label widget for instructions and apply instructions_style.
//  Name the variable: chart_instructions



//  Initialize a panel widget to put the chart.
//  Name the variable: chart_panel



//  Define style parameters for region labels.
//  Name the variable: region_style  



//  Initialize label widget for level 1 name and apply style parameters.   
//  Name the variable: a1_label


//  Initialize label widget for level 0 name and apply style parameters.   
//  Name the variable: a0_label



//  Define style parameters for credits.
//  Name the variable: credits_style



//  Initialize label widget for credits and apply credits style.
//  Name the variable: credits  



//  Add label widgets to the side_panel.



```

### 3. Make and add image layers for left map.  

The code below creates and displays the global forest data layers from part 1 onto the left map.  

```js
//  ----------------------------------------------------------------------------
//  3. Make and add image layers for left map.
//  ----------------------------------------------------------------------------

//  Construct image from address: "UMD/hansen/global_forest_change_2021_v1_9"
//  Name the output: dataset

var dataset = ee.Image('UMD/hansen/global_forest_change_2021_v1_9');

//  Threshold image so that land is 1 and everything else is 0
//  Name the output: land_mask

var land_mask = dataset.select('datamask').eq(1);

//  Add land mask as layer.
//  Make land 'black' and not land 'DarkSlateGray'.
//  Name the layer 'land'.

left_map.addLayer(land_mask, {palette: ['DarkSlateGray', 'Black']}, 'Land');

//  Create viz parameters for 'treecover2000' band.
//  Display range from 0 to 100.
//  Use 'black' to display min and '#00992B' to display max.
//  Name the variable: tree_viz

var tree_viz = {
  bands: ['treecover2000'],
  min: 0,
  max: 100,
  palette: ['black', '#00992B']
};

//  Add dataset to map as a layer and apply land_mask and tree_viz.
//  Name the layer 'tree cover' and make not shown by default.

left_map.addLayer(dataset.updateMask(land_mask), tree_viz, 'tree cover',0);

//  Define the loss palette. (Give this to them).

var loss_palette = [
  '#19faaf',
  '#4ff398',
  '#6cec81',
  '#82e46c',
  '#95dc57',
  '#a5d344',
  '#b4ca32',
  '#c2c020',
  '#cfb610',
  '#daab04',
  '#e59f06',
  '#ef9313',
  '#f78620',
  '#fd782d',
  '#ff693a',
  '#ff5a47',
  '#ff4b55',
  '#ff3b63',
  '#ff2b72',
  '#fb1d81',
  '#f11590',
  '#e5179f'
  ]
;

//  Define viz parameters for 'lossyear' band
//  Display range from 0 to 21 and call loss_palette.
//  Name the variable: loss_viz.

var loss_viz = {
  bands: ['lossyear'],
  min: 0,
  max: 21,
  palette: loss_palette
};

//  Add dataset as layer to map and apply loss_viz.
//  Name the layer 'tree loss year' and make shown by default.

left_map.addLayer(dataset, loss_viz, 'tree loss year');

```

### 4. Make and add image layers for right map.  

The code below creates and displays the global forest data layers from part 1 onto the right map.  

```js
//  ----------------------------------------------------------------------------
//  4. Make and add image layers for the right map.
//  ----------------------------------------------------------------------------

//  Select swir2, nir, and red bands from the last year and rename SWIR2, NIR, and Red.
//  Name the variable: last_composite.

var last_composite = dataset
  .select(['last_b70', 'last_b40', 'last_b30'], ['SWIR2', 'NIR', 'Red']);

//  Add last_composite as a layer to the map and apply land_mask as a mask.  
//  Display as a SWIR2 false color composite with display range from 0 to 100.
//  Name the layer 'Last image' and make shown by default.

right_map.addLayer(last_composite.updateMask(land_mask), {min:0, max:100}, 'Last image',1);

//  Compute the normalized difference in vegetation index (NDVI) with the 'NIR' and 'Red' bands from the last_composite.
//  Name the variable: last_ndvi.

var last_ndvi = last_composite.normalizedDifference(['NIR', 'Red']);

//  Load the community palettes from 'users/gena/packages:palettes'.
//  Name the variable: palettes.

var palettes = require('users/gena/packages:palettes');

//  Define viz parameters for the NDVI layer.
//  Display the colorbrewer.PRGn[11] community palette stretched from -0.8 to 0.8.
//  Name the variable: ndvi_viz

var ndvi_viz = {
  min: -0.8,
  max: 0.8,
  palette: palettes.colorbrewer.PRGn[11]
};

//  Add last_ndvi as a layer and apply the land_mask and ndvi_viz.
//  Name the layer 'Last ndvi' and do not show layer by default.

right_map.addLayer(last_ndvi.updateMask(land_mask), ndvi_viz, 'Last ndvi',0);

//  Compute the normalized burn ratio from last_composite.
//  Name the variable: last_nbr

var last_nbr = last_composite.normalizedDifference(['NIR', 'SWIR2']);

//  Define viz paramters for the normalized burn ratio.
//  Apply the colorbrewer.BrBG[11] palette and stretch from -0.8 to 0.8.
//  Name the variable: nbr_viz

var nbr_viz = {
  min: -0.8,
  max: 0.8,
  palette: palettes.colorbrewer.BrBG[11]
};

//  Add last_nbr as a layer to the map and apply land_mask as a mask and nbr_viz.
//  Name the layer 'Last burn ratio' and make not shown by default.  

right_map.addLayer(last_nbr.updateMask(land_mask), nbr_viz, 'Last burn ratio',0);

```

### 5. Make and add reference layers  

New code:

- [Show feature outlines without fill](../code/cart/feature_outlines.md)  

```js

//  ----------------------------------------------------------------------------
//  5. Make reference feature layers for both maps.
//  ----------------------------------------------------------------------------

//  Construct a feature collection from address: "FAO/GAUL/2015/level1".
//  Name the variable: regions

var regions = ee.FeatureCollection("FAO/GAUL/2015/level1");

//  Define style parameters for region layer.  
//  Name the variable: style_regions



//  Initialize map layer as a widget.
//  Call style_regions with .style method.
//  Label the layer 'regions_layer'.



//  Add map layer widget to left map.




//  Write a function to make map layer as a widget.
//  We will discuss on Thursday.

var makeLayer = function(fc, style, name, show) {
  return ui.Map.Layer(fc.style(style), {}, name, show);
};

//  Call function to add regions layer as a widget to the right map.

right_map.add(makeLayer(regions, style_regions, 'Regions', 1));

//  Construct a feature collection from address: "WCMC/WDPA/current/polygons"
//  Filter the feature collection for features where the 'STATUS' is not 'proposed'
//  And where the 'IUCN_CAT' is not 'VI'.
//  Name the variable: protected_lands



//  Define style parameters for the protected lands layer.
//  Use color '#17E551' for strokes.
//  Name the variable: pro_lands_style



//  Call makeLayer() to add protected lands with pro_lands_style to both left and right maps.
//  Label the layers 'Protected Lands' and do not show by default.



```

### 6. Prepare image to chart change over time.  

Most of this step you have done previously and involves converting a feature collection into a binary image.  

The last step involves create an image for charting and I give you the code for this. We will discuss how this works in class tomorrow.  

---  

```js

//  ----------------------------------------------------------------------------
//  6. Prepare image to chart change over time.
//  ----------------------------------------------------------------------------

// Write a function to give a feature a property named 'tag' and a specified value.  



// Apply function to all features in a feature collection (fc).  



// Create a function to convert feature collection to binary image.



// Use function to convert a feature collection to an image.  
//  Name the variable: pro_binary  



//  Create image with a band stack to chart.
//  Last band must be integers that define classes.
//  Uncomment the sbippet below - it should run if you followed naming conventions.  
//  We will discuss in class on Thursday.  

// var loss = ee.Image.pixelArea().multiply(0.000001)
//   .addBands(ee.Image.pixelArea().multiply(0.000001).updateMask(pro_binary))
//   .addBands(dataset.select(['lossyear'])
//   );


```

###7. Select a study region and center map on it.  

```js
//  ----------------------------------------------------------------------------
//  7. Select a study region and center map on it.
//  ----------------------------------------------------------------------------

//  Define poi.
//  Name the variable: poi

var poi = ee.Geometry.Point([-56.64116785106647, -13.042136580282266]);

//  Filter regions by poi to define study region
//  Name the variable: study_region



//  Center the left map on the selected study region at zoom level 6.



//  Define style parameters for selected region (show outlines without interiors).
//  Make the outlines 'yellow' and the width 1.
//  Name the variable: style_selected_region.




//  Add the selected study region as layer to both left and right maps and apply style parameters.



//  Print region names to labels (initialized previously).
//  Please uncomment the code block below. It should run if you have followed the naming conventions.

var cart = require('users/jhowarth/eePrimer:modules/cart.js');  

// cart.printFeaturePropertyLabel(study_region, 'ADM1_NAME', a1_label);
// cart.printFeaturePropertyLabel(study_region, 'ADM0_NAME', a0_label);

//  Add labels to the chart panel.


```

### 8. Chart change over time in selected region and add to side panel.

If you have followed the naming conventions, then the code block below should run. We will discuss how this steps work on Thursday.  

---

```js
//  ----------------------------------------------------------------------------
//  8. Chart change over time in selected region and add to side panel.   
//  ----------------------------------------------------------------------------

//  Define labels for the integer clases.
//  Name the variable: loss_labels

var loss_labels = [
  '2000',
  '2001',
  '2002',
  '2003',
  '2004',
  '2005',
  '2006',
  '2007',
  '2008',
  '2009',
  '2010',
  '2011',
  '2012',
  '2013',
  '2014',
  '2015',
  '2016',
  '2017',
  '2018',
  '2019',
  '2020',
  '2021'
  ]
;

//  Define chart computation parameters.
//  Name the variable: loss_chart_params

var loss_chart_params = {
  image: loss,                          //  Image stack with
  classBand: 'lossyear',                //  Band that defines nominal zones.
  region: study_region,                //  Cutter feature
  reducer: ee.Reducer.sum(),            //  Reducer for zonal statistic
  scale: 900,                           //  Scale for reducer
  classLabels: loss_labels,             //  Labels for values in dough band
  xLabels: [                            //
    'loss in whole region',
    'loss in protected areas'
    ]
  }
;

//  Define chart style parameters.
//  Name the variable: loss_chart_style

var loss_chart_style = {
  colors: loss_palette,
  legend: {
    position: 'none'
    },
  vAxis: {
    title: 'area (sq km)',
    titleTextStyle: {italic: true, bold: false}
    },
  }
;

//  Make the chart with the computation parameters and set the style options.
//  Name the variable: chart

var chart = ui.Chart.image.byClass(loss_chart_params)
  .setOptions(loss_chart_style);

//  Add the chart to the chart panel  

chart_panel.add(chart);

```

### 9. Write functions to make app interactive.  

The code block below should run if you have followed the naming conventions. We will discuss on Thursday, but don't get too nervous about this chunk. I will not ask you to create an app that can handle map clicks as part of an IP.  

```js
//  ----------------------------------------------------------------------------
//  9. Write functions to make app interactive.   
//  ----------------------------------------------------------------------------

//  Initialize a configuration object to store temporary variables.
//  Name the variable: config

var config = {};

// Write a function to store study region in config object.
//  Name the variable: makeStudyRegion

var makeStudyRegion = function() {
  config.region = regions.filterBounds(config.poi);
};

//  Write a function that returns a chart using study region in config object.
//  Name the variable: makeLossChart

var makeLossChart = function() {

  //  Define chart computation parameters.

  var loss_chart_params = {
    image: loss,                          //  Image stack with
    classBand: 'lossyear',                //  Band that defines nominal zones.
    region: config.region,                //  Cutter feature
    reducer: ee.Reducer.sum(),            //  Reducer for zonal statistic
    scale: 900,                           //  Scale for reducer
    classLabels: loss_labels,             //  Labels for values in dough band
    xLabels: [                            //
      'loss in whole region',
      'loss in protected areas'
      ]
    }
  ;

  //  Define chart style parameters.

  var loss_chart_style = {
    colors: loss_palette,
    legend: {
      position: 'none'
      },
    vAxis: {
      title: 'area (sq km)',
      titleTextStyle: {italic: true, bold: false}
      },
    }
  ;

  return ui.Chart.image.byClass(loss_chart_params)
    .setOptions(loss_chart_style);
};

//  Write a function to update the chart based on study region from config object.
//  Name the variable: updateChart


var updateChart = function() {
  chart_panel.clear();                                                        // Clear widgets from the panel.
  cart.printFeaturePropertyLabel(config.region, 'ADM1_NAME', a1_label);       // Print admin1 property to label.
  cart.printFeaturePropertyLabel(config.region, 'ADM0_NAME', a0_label);       // Print admin0 property to label.
  chart_panel.add(a1_label).add(a0_label);                                    // Add labels to chart panel        
  chart_panel.add(makeLossChart());                                           // Add makeLossChart() to panel
};

//  Write a function to update the map with study region from config object.  
//  Name the variable: updateMap

var updateMap = function() {
  left_map.centerObject(config.region, 6);
  left_map.layers().set(5, makeLayer(config.region, style_selected_region, 'Selected region',1));  
  right_map.layers().set(5, makeLayer(config.region, style_selected_region, 'Selected region',1));  
};

//  Write a function that adds the clicked point to the config object
//  and updates the chart and map based on the new study region.
//  Name the variable: handleMapClick

var handleMapClick = function(coordinates) {
  config.poi = ee.Geometry.Point([coordinates.lon, coordinates.lat]);
  makeStudyRegion();
  updateChart();
  updateMap();
};

//  Call the function when user clicks the left map.  

left_map.onClick(handleMapClick);

```

## Deliverables (part 2)  

Please submit a link to your completed code in this [DROPBOX](https://forms.gle/wJCDgxzEXjn7W2HD9){target=_blank} by 9am on Thursday (12/1). We will discuss how to publish you code as an app in class.

## Explore global forest loss  

For each region listed below, please use the App and try to answer these questions:  

- how has the location of deforestation changed over time in the region?  
- are the proximate drivers of deforestation from wildfire, farming, ranging, mining, or another kind of land use?  
- how has the location of deforestation in protected areas changed over time?   

Regions:  

- Mato Grosso, Brazil  
- Para, Brazil  
- Rondonia, Brazil  
- Madre de Dios, Peru  
- Equateur, Democratic Republic of Congo  
- Kasai, Democratic Republic of Congo  
- Kalimantan Timur, Indonesia  
- Nimrod, Oregon  
- Panama City, Florida  

## Deliverables (part 3)  

Please choose one region in the world to investigate (not from the list above) and respond to the prompts in [**this form**](https://forms.gle/bxLGr8xnmjL347Ru9){target=_blank}. Thank you.   
