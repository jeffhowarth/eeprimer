![code](../../images/code.png)  

# Chart area of regions as a percent of a zone      

The snippets below creates the chart that is shown in the [Land Cover app](https://jhowarth.users.earthengine.app/view/eeprimer-working-with-rasters){target=_blank}.

Here are the main steps.

### (1) Convert pixel area into percentage decimal.    

The first step is to store the percent of the study region area represented by each pixel. To do this, we can divide the pixel area layer by a constant (the area of the study region). The snippet below gets this number from the output of a previous step (when we computed the area of the region). The snippet renames the band 'all of town'. This will make the labels look cleaner in the chart at the end.   

```js

// ----------------------------------------------------------------------------
// Chart areas of regions as a percent of a zone.
// ----------------------------------------------------------------------------

// Convert pixel area into precentage decimal.  

var pixel_percentages = pixel_area_layer
  .divide(area_study_region.getNumber('area'))
  .rename('all of town')
;

// Inspect the result. Notice the name of the band in this image.

print('pixel_percentage_layer', pixel_percentages);
```

### (2) Construct an image with dough and cutter bands.

The next step is to set up the image that we will chart. The image needs to contain at least one band to use as the dough and one band to use as the cutter. The cutter must be the last band.  

The snippet below sets up three dough bands:  

1. Pixel percentages for an entire raster.  
2. Pixel percentages for just the protected lands.
3. Pixel percentages for just the uva lands without any permanent protections.  

The last band in the image represents the cutters, or the zones that we want to compute the area for. The snippet also renames the bands again to make the labels on the chart at the end look cleaner.     

```js  

// Construct image with three dough bands and one cutter band.

var simple_lc_area = pixel_percentages                              // Band with pixel percentages.  
  .addBands(pixel_percentages.updateMask(protected_lands_image)     // Band with pixel percentages masked by protected lands binary.  
  .addBands(pixel_percentages.updateMask(uva_not_protected))        // Band with pixel percentages masked by UVA binary without protections.
  .addBands(simple_lc)                                              // Band with simple land cover classes.
  .rename('protected in town', 'uva without permanent protections in town', 'land cover')   // Labels for added bands.  
  )
;

// Inspect the result.  

print('simple_lc_area', simple_lc_area);

```  

### (3) Chart zonal statistic for each dough band by cutter.

```js  

// Chart zonal statistic for each dough band by cutter.

// Create list of labels. The first item is a blank placeholder. The rest are labels for the cutters.  

var lc_labels = [
  '',
  'Tree canopy',
  'Water',
  'Old field',
  'Active field',
  'Developed'
  ]
;

// Create dictionary of chart arguments.

var chart_params = {
  image: simple_lc_area,                      // Image with dough bands and cutter band.
  classBand: 'land cover',                    // Name of the band to use as cutter.  
  region: study_region,                       // Region to perform operation.  
  reducer: ee.Reducer.sum(),                  // Type of zonal statistic to calculate.  
  scale: 10,                                  // Scale to carry out operation.
  classLabels: lc_labels,                     // Labels of cutters to use in chart.
  }
;

// Create the chart.  

var chart = ui.Chart.image.byClass(chart_params)      // Dictionary of chart arguments.  
    .setChartType('BarChart')                         // Type of chart.
    .setOptions({
      title: 'Land cover in study region',            // Title for chart.
      hAxis: {
        title: 'Percent of study region',             // Title for horizontal axis.  
        titleTextStyle: {italic: false, bold: true},
      },
      colors: simple_lc_palette,                      // Colors to use for chart.  
    }
  )
;

// Inspect chart.

print(chart);

```
