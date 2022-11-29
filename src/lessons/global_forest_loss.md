![Vox graphic](https://cdn.vox-cdn.com/uploads/chorus_asset/file/24064162/line_final.jpg)

<center>  

[_source_](https://www.vox.com/down-to-earth/2022/9/29/23373427/amazon-rainforest-brazil-jair-bolsonaro-lula-deforestation){target=_blank}  

</center>  

## Introduction  

- Over the last twenty years, how has the annual amount of deforestation changed in different regions of the world?  

- How can satellite imagery distinguish different patterns of deforestation?  
- What human and environmental factors influence these patterns?

## Background  

- [Motivation](https://www.science.org/content/article/deforestation-amazon-shooting-brazil-s-president-calls-data-lie){target=_blank}  
- [Earth observatory stories](https://earthobservatory.nasa.gov/collection/1676/amazon-deforestation){target=_blank}  
- [High-Resolution Global Maps of 21st-Cnetury Forest Cover Change](https://www.science.org/doi/10.1126/science.1244693){target=_blank}  
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
