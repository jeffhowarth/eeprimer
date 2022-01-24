## Global land surface temperature anomalies  

[Anomalies app](https://jhowarth.users.earthengine.app/view/eeprimer-lst-global-anomalies-modis)


### Practicum  


#### Write header and load modules  

```js
/*

  TITLE:   Land surface temperature anomalies with MODIS
  AUTHOR:  Jeff Howarth
  DATE:    1/23/2022

  Purpose: To make and display low resolution global maps of land surface
    temperature from MODIS.

*/

var palettes = require('users/gena/packages:palettes');
var cart = require('users/jhowarth/eePrimer:modules/cart.js');

```
#### Write functions to mask clouds

```js

// ------------------------------------------------------
// Functions to mask clouds in MODIS imagery.
// ------------------------------------------------------

// A helper function to extract the QA bits
function getQABits(image, start, end, newName) {
    // Compute the bits we need to extract.
    var pattern = 0;
    for (var i = start; i <= end; i++) {
      pattern += Math.pow(2, i);
    }
    // Return a single band image of the extracted QA bits, giving the band
    // a new name.
    return image.select([0], [newName])
                  .bitwiseAnd(pattern)
                  .rightShift(start);
}

// A function to mask out cloudy pixels.
function maskQuality(image) {
  // Select the QA band.
  var QA = image.select('QC_Day');
  // Get the internal_cloud_algorithm_flag bit.
  var internalQuality = getQABits(QA,8, 13, 'internal_quality_flag');
  // Return an image masking out cloudy areas.
  return image.updateMask(internalQuality.eq(0));
}
```
#### Initialize config dictionary.

```js
// ------------------------------------------------------
// Config
// ------------------------------------------------------

var config = {
  month:1,
  year: 2022,
  lst: '',
  lst_diff: '',
  lst_lta: '',
  lst_oya: ''
};


print('Initial configuration', config);

```
#### Write functions to filter and mask image collection  

```js
// Make mean temperature collections
// ---------------------------------

var makeTempImageCollections = function() {
  config.lst =
    ee.ImageCollection('MODIS/006/MOD11A1')             // IMPORT Collection
      .filter(
        ee.Filter.calendarRange(                        // FILTER by month
          config.month,                           // start month
          config.month,                             // end month
          'month'))                                     
      .map(maskQuality)                                 // MASK clouds
      .select('LST_Day_1km')                            // SELECT bands
  ;

};

// Implement function.

makeTempImageCollections();

// Inspect result.

print('After makeTempImageCollections()', config)


```
#### Write function to scale units

```js

// Scale units.
// ---------------------------------

var makeMeanTemp_K2F = function(ic) {
  return ic
    .mean()                                           // REDUCE to mean
    .multiply(0.02)                                   // SCALE
    .subtract(273.15).multiply(9).divide(5).add(32)  // CONVERt from Kelvin to Fahrenheiht
    ;
};

```
#### Write function to compute anomalies.

```js

// Make anomalies
// ---------------------------------

var makeAnomaly = function() {
  config.lst_lta = makeMeanTemp_K2F(config.lst);
  config.lst_oya = makeMeanTemp_K2F(
      config.lst
        .filter(
          ee.Filter.calendarRange(config.year, config.year, 'year')
        )
      )
  ;  
  config.lst_diff = config.lst_oya.subtract(config.lst_lta);
};

makeAnomaly();

```
#### Configure viz parameters.  

```js

// Configure viz parameters.  
// ---------------------------------

print('Community palettes', palettes);

var lst_viz = {
  min: -30,
  max: 150,
  palette: palettes.misc.jet[7]
};

var anomaly_viz = {
  min: -15,
  max: 15,
  palette: palettes.colorbrewer.RdBu[11]
};

```
#### Initialize map layout.  

```js

// -------------------------------------------------------------
// initialize layout
// -------------------------------------------------------------

Map.setOptions('SATELLITE');
Map.setCenter(6.746, 46.529, 2);
Map.addLayer(config.lst_diff, anomaly_viz, 'LST difference from average');
Map.addLayer(config.lst_oya, lst_viz, 'LST average', false);

```
#### Configure and compose labels.  

```js

// --------------------------------------------------------------------
// Configure and compose labels.
// --------------------------------------------------------------------

// style dictionary for labels

var styles = {
  title: {
    fontSize: '24px',
    fontWeight: 'bold'
    },
  subTitle: {
    fontSize: '14px',
    // color: '#478EC9',
    whiteSpace: 'pre'
    // backgroundColor: background
    },
  instruction: {
    fontSize: '14px',
    color: '#478EC9',
    whiteSpace: 'pre'
    // backgroundColor: background
    }
};

// Create labels
// -------------

var title = ui.Label( {
  value: 'Surface temperature from MODIS',
  style: styles.title,
  targetUrl: {},
  // imageUrl:  {}
});

var top_instructions = ui.Label( {
  value: 'Pan and zoom to region of interest.',
  style: styles.subTitle,
  // targetUrl: {},
  }
)
;

```
#### Initialize legends.  

```js

// --------------------------------------------------------------------
// Initialize legends.
// --------------------------------------------------------------------

// LST average for one month legend  
// --------------------------------

var lst_legend = cart                                                     // module
  .makeGradientLegend(                                                // function
    lst_viz,                                                      // viz parameters
    'MEAN SURFACE TEMP\n' + String(config.month) + '/' + String(config.year) + '\ndegrees (F)',                          // legend title
    'bottom-left'                                                     // position on map
  )
;

// LST Anomaly legend  
// ------------------

var lst_a_legend = cart                                                     // module
  .makeGradientLegend(                                                // function
    anomaly_viz,                                                      // viz parameters
    'DIFFERENCE FROM LONG-TERM MEAN\n' + String(config.month) + '/' + String(config.year) + '\ndegrees (F)',                          // legend title
    'bottom-left'                                                     // position on map
  )
;

```
#### Initialize marginalia panel.  

```js

// -------------------------------------------------------------------
// Initialize panel for marginalia.
// -------------------------------------------------------------------

// Configure  panel.  

var panel = ui.Panel                      // Initialize panel widget.
  (
    {
      widgets:                            // List widgets to add to panel.
        [
          title,
          lst_legend,
          lst_a_legend
        ],
      layout:
        ui.Panel.Layout.flow('vertical'), // Widgets flow in vertical direction.
      style:    
        {
          width: '250px',                 // Width of panel
          height: '450px',                // Height of panel
          position: 'top-left'            // Position of panel on screen.
        }
    }
);

// Add panel to map.

Map.add(panel);                           // Add panel to the Map UI.

```
#### Inspect conf dictionary at end.  

```js


// Print config dictionary to see how it was populated

print('Ending configuration', config);

```
