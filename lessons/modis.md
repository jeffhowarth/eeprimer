## MODIS  

This lesson explores the Moderate Resolution Imaging Spectroradiometer (MODIS) instrument aboard the Terra and Aqua satellites. By the end of the lesson, you should be able to describe the spatial, temporal, and spectral characteristics of MODIS on both satellites. You should also be able to describe some of the MODIS products that are available through the Earth Engine Data Catalog. Finally, you should also be comfortable loading and filtering the image collections with surface reflectance bands for terrestrial and marine applications. Ideally, this lesson will encourage you to think about strategies for choosing a dataset for a research story based on the dataset's spatial, temporal, and spectral characteristics.   

## MODIS

[NASA MODIS intro video](https://www.youtube.com/watch?v=X16cfGPL2wA)

[NASA intro to Aqua](https://www.youtube.com/watch?v=unlfchZaRo0)

[NASA MODIS website](https://modis.gsfc.nasa.gov/about/)  

![MODIS bands](https://geol260.academic.wlu.edu/files/lecture_notes/C6AXwkmU0AEct5P.jpg)

## MODIS characteristics     

If you would like to use satellite imagery as evidence, you should be able to explain differences in image datasets. This will help you:  

- choose the best dataset for a research question,  
- conduct longitudinal studies (across time) over a sensor's mission life,
- make comparisons across datasets.  

Please try to answer the following questions about MODIS in the Earth Engine Data Catalog:

__Spatial__  

- What are the bands' pixel scale/resolution?  
- What is the regional extent of the collection?  
- Does the collection contain single images or global mosaics?  

__Temporal__  

- When did the mission start and end (temporal extent)?  
- How often do you get a picture of a place (recurrence interval)?  
- What time of day is the picture captured?  
- How long does it take for the picture to get into the earth engine data catalog (latency)?  

__Spectral__   

- How many bands does the image contain?  
- How do they parse the spectrum?  

__Processing history__  
- Are the data raw or processed?  
- If processed, what data products are available?  
- If processed, what criteria or algorithms were applied?  

## MODIS Image Collections in Earth Engine  

To start, please write a script that loads data from the two image collections listed below. Please filter the data for October 2020 and center the map on California. Please use a SWIR, NIR, Green RGB composite and compare how the two data collections show the extent of wildfire in the state.      

[Terra Surface Reflectance Daily Global 1km and 500m](https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MOD09GA)  


[Terra Surface Relectance 8-Day Global 500m](https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MOD09A1)   

_This is as far as we got on 2/28. Please find the lecture script below._

```js

// Import table of states
var states = ee.FeatureCollection("TIGER/2018/States");

// To inspect the state vector data that we imported.
print(states.first());

// To filter the state table for just California.
var california = states.filter(ee.Filter.eq('NAME','California'));
print(california);

// Define start and end dates as variables for both image collections.
var start = '2020-10-01';
var end = '2020-11-01';

// Load and filter the daily MODIS dataset.
var dataset = ee.ImageCollection('MODIS/006/MOD09GA')
  .filter(ee.Filter.date(start, end))
  .select(['sur_refl_b07', 'sur_refl_b02', 'sur_refl_b04']) // For SWIR, NIR, G RGB composite
  .mean()
  ;

print('DATASET CHECK', dataset);  

// Load and filter the 8-day average.

var dataset2 = ee.ImageCollection('MODIS/006/MOD09A1')
  .filter(ee.Filter.date(start, end))
  .select(['sur_refl_b07', 'sur_refl_b02', 'sur_refl_b04'])
  .mean()
  ;

print('DATASET 2 CHECK', dataset2);

// Define min and max diplay range.  

var imageViz = {
  min: -100.0,
  max: 3000.0,
};

// Center map on CA before adding layers.

Map.centerObject(california, 6);

// Add layers.
Map.addLayer(dataset, imageViz, 'Daily',0);
Map.addLayer(dataset2, imageViz, '8 day');
Map.addLayer(california, {color:'gold'}, 'California',0);
```

_To be continued..._


Next, please write a new script that loads data from the image collection listed below. Please create two map layers that show mean surface reflectance in January 2016 and July 2016. Please add the two layers as natural color RGB composites.    

[Ocean Color SMI](https://developers.google.com/earth-engine/datasets/catalog/NASA_OCEANDATA_MODIS-Aqua_L3SMI?hl=en)
