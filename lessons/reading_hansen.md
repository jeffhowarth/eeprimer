## Global forest change  

This lesson introduces a global, high-resolution data product developed by Matt Hansen at the University of Maryland. After exploring the dataset, you will review sections of the [tutorial](https://developers.google.com/earth-engine/tutorials/tutorial_forest_01) that introduce new methods of raster and vector analysis, including the use of masks, logical operators, vector overlays, area computations, and charts.  

#### Reference

[Hansen et al, 2013. "High-Resolution Global Maps of 21st-Century Forest Cover Change". _Science_ 342(6160):850-853.](https://www.science.org/doi/10.1126/science.1244693)

![Hansen global forest change](https://lcluc.umd.edu/sites/default/files/hansen_2014.jpg)

_Figure 1. Global forest change dataset by Matt Hansen at the University of Maryland._  

### Explore the dataset  

To get started, please open the [Global Forest Change app](https://glad.earthengine.app/view/global-forest-change#dl=1;old=off;bl=off;lon=20;lat=10;zoom=3;) to explore the dataset.

_Discuss the layers shown in app and highlighted locations/cases._

_Please note that the tutorial dataset is depreciated, because the dataset is updated every year. This is a good reason to list the data that you accessed the date in your data source credit._  

For example: [Hansen Global Forest Change v1.8 (2000-2020)](https://developers.google.com/earth-engine/datasets/catalog/UMD_hansen_global_forest_change_2020_v1_8?hl=en), accessed 1/26/2021.

### Masks    

This section of the tutorial placed masks on bands when adding them to the map as layers.  

```js
// Introduction to Hansen
// ----------------------

var gfc2014 = ee.Image('UMD/hansen/global_forest_change_2015');

var treeCover = gfc2014.select(['treecover2000']);
var lossImage = gfc2014.select(['loss']);
var gainImage = gfc2014.select(['gain']);

// Add the tree cover layer in green.
Map.addLayer(treeCover.updateMask(treeCover),
    {palette: ['000000', '00FF00'], max: 100}, 'Forest Cover');

// Add the loss layer in red.
Map.addLayer(lossImage.updateMask(lossImage),
            {palette: ['FF0000']}, 'Loss');

// Add the gain layer in blue.
Map.addLayer(gainImage.updateMask(gainImage),
            {palette: ['0000FF']}, 'Gain');
```

<details>
<summary><b>Check your understanding.</b></summary>
<br>
<li>What is a mask?</li>
<br>
<li>When should you use one?</li>
<br>
<li>How do the differ from .clip()?</li>
<br>
<li>What is the correct syntax for masks in Earth Engine?</li>
</details>  

### Logical comparisons  

This section introduced logical comparisons with raster.

```js
// Load the data and select the bands of interest.
var gfc2014 = ee.Image('UMD/hansen/global_forest_change_2015');
var lossImage = gfc2014.select(['loss']);
var gainImage = gfc2014.select(['gain']);

// Use the and() method to create the lossAndGain image.
var gainAndLoss = gainImage.and(lossImage);

// Show the loss and gain image.
Map.addLayer(gainAndLoss.updateMask(gainAndLoss),
    {palette: 'FF00FF'}, 'Gain and Loss',0);
```

<details>
<summary><b>Check your understanding.</b></summary>
<br>
<li>What math operation is analogous to the AND logical comparison?</li>
<br>
<li>What are other common logical operators?</li>
</details>  

### Zonal operation

This section produced a zonal statistic with a method that differed a little from what we used in the 'green blocks' lesson.   

```js
// Load country features from Large Scale International Boundary (LSIB) dataset.
var countries = ee.FeatureCollection('USDOS/LSIB_SIMPLE/2017');

// Subset the Congo Republic feature from countries.
var congo = countries.filter(ee.Filter.eq('country_na', 'Rep of the Congo'));

// Get the forest loss image.
var gfc2014 = ee.Image('UMD/hansen/global_forest_change_2015');
var lossImage = gfc2014.select(['loss']);

// Sum the values of forest loss pixels in the Congo Republic.
var stats = lossImage.reduceRegion({
  reducer: ee.Reducer.sum(),
  geometry: congo,
  scale: 30,
  maxPixels: 1e9
});
print(stats);

```
<details>
<summary><b>Check your understanding.</b></summary>
<br>
<li>What does the result of this operation tell you?</li>
<br>
<li>How does this application differ from what we did in the 'green blocks' tutorial?</li>
<br>
<li>How could you <b>normalize</b> this computation to report the percentage of Congo deforested?</li>
</details>

## Pixel area

This section introduced a method for computing area.

```js
// Load country features from Large Scale International Boundary (LSIB) dataset.
var countries = ee.FeatureCollection('USDOS/LSIB_SIMPLE/2017');

// Subset the Congo Republic feature from countries.
var congo = countries.filter(ee.Filter.eq('country_na', 'Rep of the Congo'));

// Get the forest loss image.
var gfc2014 = ee.Image('UMD/hansen/global_forest_change_2015');
var lossImage = gfc2014.select(['loss']);
var areaImage = lossImage.multiply(ee.Image.pixelArea());

// Sum the values of forest loss pixels in the Congo Republic.
var stats = areaImage.reduceRegion({
  reducer: ee.Reducer.sum(),
  geometry: congo,
  scale: 30,
  maxPixels: 1e9
});
print('pixels representing loss: ', stats.get('loss'), 'square meters');

```

<details>
<summary><b>Check your understanding.</b></summary>
<br>
<li>What would this workflow look like as a flow diagram?</li>
<br>
<li>How could you <b>normalize</b> this computation to report the areal proportion of Congo deforested?</li>
<br>
<li>Would the percentage of area ever differ from the percentage of pixels?</li>
</details>


### Vector overlay

This section introduced a vector overlay method that returns the intersection of two feature collections.

```js
// Load country features from Large Scale International Boundary (LSIB) dataset.
var countries = ee.FeatureCollection('USDOS/LSIB_SIMPLE/2017');

// Subset the Congo Republic feature from countries.
var congo = ee.Feature(
  countries
    .filter(ee.Filter.eq('country_na', 'Rep of the Congo'))
    .first()
);

// Subset protected areas to the bounds of the congo feature
// and other criteria. Clip to the intersection with congo.
var protectedAreas = ee.FeatureCollection('WCMC/WDPA/current/polygons')
  .filter(ee.Filter.and(
    ee.Filter.bounds(congo.geometry()),
    ee.Filter.neq('IUCN_CAT', 'VI'),
    ee.Filter.neq('STATUS', 'proposed'),
    ee.Filter.lt('STATUS_YR', 2010)
  ))
  .map(function(feat){
    return congo.intersection(feat);
  });

// Get the loss image.
var gfc2014 = ee.Image('UMD/hansen/global_forest_change_2015');
var lossIn2012 = gfc2014.select(['lossyear']).eq(12);
var areaImage = lossIn2012.multiply(ee.Image.pixelArea());

// Calculate the area of loss pixels in the Congo Republic.
var stats = areaImage.reduceRegion({
  reducer: ee.Reducer.sum(),
  geometry: congo.geometry(),
  scale: 30,
  maxPixels: 1e9
});
print(
  'Area lost in the Congo Republic:',
  stats.get('lossyear'),
  'square meters'
);

// Calculate the area of loss pixels in the protected areas.
var stats = areaImage.reduceRegion({
  reducer: ee.Reducer.sum(),
  geometry: protectedAreas.geometry(),
  scale: 30,
  maxPixels: 1e9
});
print(
  'Area lost in protected areas:',
  stats.get('lossyear'),
  'square meters'
);
```

<details>
<summary><b>Check your understanding.</b></summary>
<br>
<li>Draw a picture to illustrate an intersection.</li>
<br>
<li>How does a vector intersection differ from the raster logical comparison <b>AND</b>?</li>
</details>

### Groups  

This section introduced a method to aggregate zonal statistics with a group criterion.  

```js
// Load country boundaries from LSIB.
var countries = ee.FeatureCollection('USDOS/LSIB_SIMPLE/2017');
// Get a feature collection with just the Congo feature.
var congo = countries.filter(ee.Filter.eq('country_co', 'CF'));

// Get the loss image.
// This dataset is updated yearly, so we get the latest version.
var gfc2017 = ee.Image('UMD/hansen/global_forest_change_2017_v1_5');
var lossImage = gfc2017.select(['loss']);
var lossAreaImage = lossImage.multiply(ee.Image.pixelArea());

var lossYear = gfc2017.select(['lossyear']);
var lossByYear = lossAreaImage.addBands(lossYear).reduceRegion({
  reducer: ee.Reducer.sum().group({
    groupField: 1
    }),
  geometry: congo,
  scale: 30,
  maxPixels: 1e9
});
print(lossByYear);
```

<details>
<summary><b>Check your understanding.</b></summary>
<br>
<li>What does the argument for the groupField reference?</li>
<br>
<li>How would the output differ if we had not <b>grouped</b> it.</li>
</details>

### Chart from array  

This section introduced a method to chart a time series. 

```js
var statsFormatted = ee.List(lossByYear.get('groups'))
  .map(function(el) {
    var d = ee.Dictionary(el);
    return [ee.Number(d.get('group')).format("20%02d"), d.get('sum')];
  });
var statsDictionary = ee.Dictionary(statsFormatted.flatten());
print(statsDictionary);

var chart = ui.Chart.array.values({
  array: statsDictionary.values(),
  axis: 0,
  xLabels: statsDictionary.keys()
}).setChartType('ColumnChart')
  .setOptions({
    title: 'Yearly Forest Loss',
    hAxis: {title: 'Year', format: '####'},
    vAxis: {title: 'Area (square meters)'},
    legend: { position: "none" },
    lineWidth: 1,
    pointSize: 3
  });
print(chart);
```

<details>
<summary><b>Check your understanding.</b></summary>
<br>
<li>What are alternative methods for producing charts from images and image collections?</li>
</details>
