## Project 1

### Part 1: Story development and analysis  

This week, your main tasks are to:  

1. Develop a story idea that helps a reader understand land cover dynamics of a region with remotely sensed imagery.

2. Choose a study region.  

3. Choose an image collection from the Earth Engine Data Catalog.

4. Conduct analysis.  

5. Participate in a peer review of your work.   

Below, I discuss each part in a little more detail and then provide a worked out example that you can use as a model for your own work.  

### Story objectives  

Your story should aim to help your reader learn how remotely sensed imagery provides evidence about the land cover of a place and how the land cover has changed over time. In terms of change, your interval can be short (seasonal change) or long (decadal or more).   

You will write your story for an audience that has no understanding of remote sensing, multi-spectral imagery, RGB composites, or Google Earth Engine. This means that you have two main objectives:  

1. help reader learn about land cover dynamics of a place, and  

2. help reader learn how remotely sensed imagery provides evidence of land cover dynamics.   

In other words, your story should aim to blend reporting (about a specific place) with teaching (about a method for investigating places more generally).

### Identify study region and theme  

You may find it helpful to review [Earth Observatory articles](https://earthobservatory.nasa.gov/features) for story ideas. Ideally, you will pick a subject and place that interests you.  

In addition to identifying a study region to explore, you should also hone in on a particular aspect of landcover to investigate. Examples include water quality, snow cover, forest patterns, agricultural patterns, urban patterns, etc.   

### Identify image collection  

You can use any of the spectral image collections that we have worked with in the first act of the course, including:  

- MODIS  
- Landsat  
- Sentinel  
- NAIP  

For this first project, you must develop a project that uses the spectral bands from one or more of collections.

When choosing a collection, please refer to your notes about the spatial, temporal, and spectral characteristics of each collection. Choose the collection that is the best fit for the spatial, temporal, and spectral characteristics of your thematic focus.  

### Conduct your analysis  

Your analysis must complete the following tasks:  

1. Filter and reduce an image collection into at least two images, one for each time period.  

2. Visualize each image as an RGB composite that uses the same visualization parameters. Please use  histograms to apply stretch enhancement for each band of your composite.  

3. For each image, produce spectral signature charts of two or more land cover themes.  

### Participate in peer review  

During our peer review, you will read and reproduce a peer's analysis. Your code must be sufficiently commented so that a peer can read your script and understand your steps.       

## Example  

### Imperial shelterbelts of Hokkaido

Please copy this code into the Code Editor and run the script.  

```js
/*
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  NAME:     project0101.js  
  AUTHOR:   Jeff Howarth  
  UPDATE:   3/13/2022

  PURPOSE:  Provide a worked out example of the analysis phase of
            first project. The subject and study site are the
            the shelterbelts of the Konsen Plateau on the island of
            Hokkaido, Japan.   

  ----------------------------------------------------------------
*/

// ----------------------------------------------------------------
// Map of interest  
// ----------------------------------------------------------------

var poi = ee.Geometry.Point([144.990786, 43.515613]);

Map.centerObject(poi, 10);
Map.setOptions('HYBRID');
```

I first noticed this landscape pattern while investigating imagery of Hokkaido in preparation for a research trip. A quick internet search uncovered [this article from Earth Observatory](https://earthobservatory.nasa.gov/images/146664/a-windbreak-grid-in-hokkaido) that explained the pattern and provided some helpful reference leads.  

_You will need to conduct some background research on your region and thematic focus. Your goal should be to provide a little historical context (how the time of your observations connects to a longer chronology) and geographical context (how your region is a part of a larger region)._  

Briefly, the windbreaks were carved out of the native forest in the late 19th century after the end of _Sakoku_, Japan's "locked country" policy. For 264 years, Japan had very little contact with the outside world. Then in 1853, Matthew Perry's _Black Ships_ steamed into what is now Tokyo Bay. The rulers of Japan recognized the technological superiority of the west (expressed through their military might) and quickly opened the country to western ideas.   

![Perry's Black Ships](https://media.davidrumsey.com/rumsey/Size4/RUMSEY~8~1/171/11528000.jpg)  

<center>

_Shinkoku Taihei Take Mori Mata Akira (1854)_<br> Source: [David Rumsey Map Collection](https://www.davidrumsey.com/luna/servlet/s/4k48c2)

</center>

The Imperial government of Japan established the grid of windbreaks that are visible today as part of the agricultural development of Hokkaido following the first imperial topographic survey of the islands. They borrowed the grid idea from Thomas Jefferson's strategy for settling the Great Plains of North America earlier in the century.   

<center>

![Imperial Geological Survey of Japan](https://www.lib.berkeley.edu/EART/maps/g7960s200c6-index.jpg)

_Imperial Geological Survey of Japan, 1888_<br>Source:[UC Berkeley Map Library](https://www.lib.berkeley.edu/EART/maps/g7960s200c6-index.html)  

</center>

The shelterbelts were not planted, rather they were 180 meter wide strips of native forest that were purposefully left to provide the cleared agricultural lands with protection from the island's strong winds. Over time, the old broadleaf trees of the belts were harvested for lumber or destroyed by fire and largely replaced with larch and spruce trees.  

#### Load, filter, and reduce images  

My goal is to use imagery to help a reader see two things:  

1. That the "lines" of the grid are trees.  

2. That the forest composition of the windbreaks differs from the forest composition of the riparian corridors (the strips of forest that follow the rivers). I thought this was an interesting part of the story, this landscape with two kinds of linear features: the geometric lines of the windbreaks, where human activities replaced native broadleaf species with introduced species, and the natural lines of the rivers and streams, where native species associated with the floodplains may persist.

I chose to use Sentinel 2 imagery because:  

1. I wanted a fine enough spatial resolution to compare the composition of windbreaks to the river corridors.  

2. I wanted to compare seasonal differences (deciduous versus conifers), but I did not need a very long record or a particular date in the past.  

3. I wanted to use shortwave and near infrared bands to reveal differences in conifers and deciduous tree species.  

_You will need to choose an image collection with spatial, temporal, and spectral characteristics that best fit the spatial, temporal, and spectral characteristics of your subject and region._

```js
// ----------------------------------------------------------------
// Load and filter image collection
// ----------------------------------------------------------------

var collection = ee.ImageCollection("COPERNICUS/S2_SR")     // This example uses Sentinel 2.
  .filterBounds(poi)                                        // Filter by poi.
  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 20))      // Filter by cloud cover threshold.
  ;

// print(collection.first(), collection.size());

// ----------------------------------------------------------------
// Function to mask S2 clouds  
// ----------------------------------------------------------------

function maskS2clouds(image) {
  var qa = image.select('QA60');

  // Bits 10 and 11 are clouds and cirrus, respectively.
  var cloudBitMask = 1 << 10;
  var cirrusBitMask = 1 << 11;

  // Both flags should be set to zero, indicating clear conditions.
  var mask = qa.bitwiseAnd(cloudBitMask).eq(0)
      .and(qa.bitwiseAnd(cirrusBitMask).eq(0));

  return image.updateMask(mask).divide(10000);
}

// ----------------------------------------------------------------
// Construct fall and summer scenes  
// ----------------------------------------------------------------

var fall = collection
  .filter(ee.Filter.calendarRange(10,11, 'month'))          // Filter by time unit.
  .map(maskS2clouds)                                        // Apply cloud mask.  
  .median()                                                 // Reduce collection to image.
  ;

var summer = collection
  .filter(ee.Filter.calendarRange(7,8, 'month'))
  .map(maskS2clouds)
  .median()
  ;

print('FALL', fall, 'SUMMER', summer);
```

#### Develop visualization parameters  

I used [**this resource on band combinations**](http://web.pdx.edu/~nauna/resources/10_BandCombinations.htm) to identify an RGB composite for my project. Because it is written for Landsat, I just translated the band names for Sentinel.  

_You will need to investigate different band combinations for your subject and choose one. Ideally, you will show the reader how RGB composites allow you to see differences in land cover that are not necessarily obvious through natural color composites. In other words, can you show the added value of false color composites and how they can reveal differences that are not visible through natural composites and natural human vision?_  

I also used the  __makeBoundedHistogram__ tool to choose my display ranges for each band. After using this tool to produce charts for each range, I commented out the section so that the script would refresh faster.  

_You will need to use histograms to develop display ranges for each band in your composite. Please use the same display range for both images (time 1 and time 2). This facilitates comparison, because the difference in the images should be based on differences in the reflectance values and not differences in the way that you are displaying the reflectance values with color._  

```js
// ----------------------------------------------------------------
// Construct histogram of bands to determine display ranges
// ----------------------------------------------------------------

// var imageTools = require('users/jhowarth/eePrimer:modules/image_tools.js');

// print(imageTools.makeBoundedHistogram(region, summer, 'B2', 100, 0, 1,0,100000));

// ----------------------------------------------------------------
// Construct viz parameters
// ----------------------------------------------------------------

var viz = {
  min: 0,
  max: [0.6, 0.4, 0.1],
  bands: ['B8', 'B11', 'B2']
};  

// ----------------------------------------------------------------
// Compose map  
// ----------------------------------------------------------------

Map.addLayer(summer, viz, 'Spring');
Map.addLayer(fall, viz, 'Fall');
```

#### Construct spectral signature charts  

I selected three locations on wind breaks and three locations on riparian corridors to plot spectral signatures. I used this [list of web color names](https://htmlcolorcodes.com/color-names/) to pick two colors to represent each feature type. Honestly, I am not wild about the colors on the chart and may change them, but I wanted to use bright, saturated colors so that they would be visible as points against the RGB composite layers when I composed the map.  

_You will need to pick at least three locations for each land cover type and chart their spectral signatures. Ideally, you find three points that show similar (though probably not identical) signatures._    

```js
// ----------------------------------------------------------------
// Construct spectral signature chart
// ----------------------------------------------------------------

// ---------------------------------
// Step 1. Collect sample locations.
// ---------------------------------

// Function to make sample points.  

var makeSamplePoint = function(x, y, label, scale){
  return ee.Feature(
    ee.Geometry.Point(
      [x,y]).buffer(scale * 1.5),
    {'name': label});
};

// Make sample points.

var S2_scale = 10;

var wind1 = makeSamplePoint(144.907124, 43.433923, 'windbreak 1', S2_scale);
var wind2 = makeSamplePoint(144.832133, 43.560249, 'windbreak 2', S2_scale);
var wind3 = makeSamplePoint(144.96808, 43.46008, 'windbreak 3', S2_scale);

var rip1 = makeSamplePoint(144.904480, 43.436188, 'riparian 1', S2_scale);
var rip2 = makeSamplePoint(144.989888, 43.466744, 'riparian 2', S2_scale);
var rip3 = makeSamplePoint(145.164083, 43.480288, 'riparian 3', S2_scale);

// Create lists of sample points.   

var ss_samples = [
  wind1,
  wind2,
  wind3,
  rip1,
  rip2,
  rip3
  ];

// Define colors for land cover classes.  

var wind_color = 'Lime';
var rip_color = 'Fuchsia';

// Construct list of colors that match sample point list.

var ss_colors = [
  wind_color,
  wind_color,
  wind_color,
  rip_color,
  rip_color,
  rip_color
  ];

print('SAMPLES', ss_samples);

// ---------------------------------
// Step 2. Function to make chart.  
// ---------------------------------

var makeSignatureChart = function(image){

  // Select bands

  var image_select = image              
    .select(
      'B1',
      'B2',
      'B3',
      'B4',
      'B5',
      'B6',
      'B7',
      'B8',
      'B8A',
      'B9',
      'B11',
      'B12'
      )
    ;

  // Define customization options.

  var plotOptions = {
    title: 'Sentinel 2 surface reflectance spectra',
    hAxis: {
      title: 'Wavelength (nanometers)',       
      viewWindow: {
        min: 400,
        max: 2300}
      },
    vAxis: {
      title: 'Reflectance',
      viewWindow: {
        min: 0.0,
        max: 0.5}
      },
    lineWidth: 1,
    pointSize: 2,
    colors: ss_colors,
    curveType: 'function'
  };

  // Define a list of wavelengths for X-axis labels.

  var series = {
    wavelengths:  [ 444, 497,  560, 665, 704, 740, 783, 835, 865, 954, 1614, 2202],
    bands:        ['B1','B2', 'B3','B4','B5','B6','B7','B8','B8A','B9','B11','B12']
  };

  // Load sample points as a feature collection.  

  var samples_fc = ee.FeatureCollection(ss_samples);

  var chart = ui.Chart.image.regions({
    image: image_select,
    regions: samples_fc,
    reducer: ee.Reducer.mean(),
    scale: 10,
    seriesProperty: 'name',
    xLabels: series.wavelengths
    });

  // Return the chart and set options.

  return chart
    .setChartType('ScatterChart')
    .setOptions(plotOptions);

};

// ---------------------------------
// Step 3. Apply function.  
// ---------------------------------

var ss_fall = makeSignatureChart(fall);
var ss_summer = makeSignatureChart(summer);

print('FALL CHART', ss_fall);
print('SUMMER CHART', ss_summer);
```

### Add spectral signature sample points to map  

The last step involved adding the sample points to the layer. To reduce the amount of layers, I made feature collections of the point features for each land cover type. This let me just add two additional layers (one for each land cover type) rather than six layers (one for sample point).  

```js
// ----------------------------------------------------------------
// Add spectral signature sample points to map
// ----------------------------------------------------------------

// Function to convert polygons to centroids.

var getCentroid = function(point){
  return point.centroid();
};

// Create feature collections of each land cover class  

var wind = ee.FeatureCollection([wind1, wind2, wind3]);
var rip = ee.FeatureCollection([rip1, rip2, rip3]);

// Add feature collectoins to map and display with same color

Map.addLayer(wind.map(getCentroid), {color: wind_color}, 'Windbreak points');
Map.addLayer(rip.map(getCentroid), {color: rip_color}, 'Riparian points');

```
