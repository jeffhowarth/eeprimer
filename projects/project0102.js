/*

  TITLE:   UI Layout
  AUTHOR:  Jeff Howarth
  DATE:    3/28/2022

  Purpose: To make a layout for first project.
*/


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ANALYSIS SECTION
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// You will need to paste a copy of your analysis script here.

// Please note that you will need to comment out any lines where you
// print to Console and modify the Map object.


// ----------------------------------------------------------------
// Map of interest
// ----------------------------------------------------------------

var poi = ee.Geometry.Point([144.99078647720984, 43.51561385889657]);

// Map.centerObject(poi, 10);
// Map.setOptions('HYBRID');

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

// print('FALL', fall, 'SUMMER', summer);

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

// You will need to move these lines to a new section below.

// Map.addLayer(summer, viz, 'Spring');
// Map.addLayer(fall, viz, 'Fall');

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

var wind_color = 'Black';
var rip_color = 'FireBrick';

// Construct list of colors that match sample point list.

var ss_colors = [
  wind_color,
  wind_color,
  wind_color,
  rip_color,
  rip_color,
  rip_color
  ];

// print('SAMPLES', ss_samples);

// ---------------------------------
// Step 2. Function to make chart.
// ---------------------------------

var makeSignatureChart = function(image, label){

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
    title: label,
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

var ss_fall = makeSignatureChart(fall, 'S2 reflectance in fall');
var ss_summer = makeSignatureChart(summer, 'S2 reflectance in summer');

// print('FALL CHART', ss_fall);
// print('SUMMER CHART', ss_summer);

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

// You will need to move these lines to a new secion below.

// Map.addLayer(wind.map(getCentroid), {color: wind_color}, 'Windbreak points');
// Map.addLayer(rip.map(getCentroid), {color: rip_color}, 'Riparian points');




// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// LAYOUT SECTION
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// ---------------------------------------------------------------
// Make style dictionaries for label hierarchy.
// ---------------------------------------------------------------

// Dictionary for sans and serif pairing.

var labelMaster = {
  font:
    {
      sans: 'Helvetica, sans-serif',
      serif: 'Georgia, serif'
    },
  align:
    {
        padding: '12px',
        margin: '4px',
        position: 'top-left',
    }
};

// Dictionary for label styles.

var labelStyles = {
  titleStyle:
    {
      padding: '12px 16px 12px 16px',
      margin: '0 px',
      backgroundColor: '444444',
      color: 'white',
      fontSize: '24px',
      fontWeight: 'bold',
      fontFamily: labelMaster.font.sans,
      textAlign: 'left',
      position: labelMaster.align.position,
      whiteSpace: 'wrap',
      stretch: 'horizontal'
    },
  abstractStyle:
    {
      padding: labelMaster.align.padding,
      margin: labelMaster.align.margin,
      color: 'black',
      fontSize: '14px',
      fontWeight: 'normal',
      fontFamily: labelMaster.font.serif,
      textAlign: 'left',
      position: labelMaster.align.position,
      whiteSpace: 'wrap',
      stretch: 'horizontal'
    },
  instructionStyle:
    {
      padding: labelMaster.align.padding,
      margin: labelMaster.align.margin,
      color: 'black',
      fontSize: '12px',
      fontWeight: 'normal',
      fontFamily: labelMaster.font.sans,
      textAlign: 'left',
      position: labelMaster.align.position,
      whiteSpace: 'wrap',
      stretch: 'horizontal'
    },
  creditStyle:
    {
      padding: labelMaster.align.padding,
      margin: labelMaster.align.margin,
      color: '#656665',
      fontSize: '10px',
      fontWeight: '400',
      fontFamily: labelMaster.font.sans,
      textAlign: 'left',
      position: labelMaster.align.position,
      whiteSpace: 'pre',
      stretch: 'horizontal'
    },
  mapLabelStyle:
    {
      // padding: labelMaster.align.padding,
      // margin: '0px 40px 0px 40px',
      color: 'white',
      backgroundColor: '#666666',
      fontSize: '14px',
      fontWeight: 'bold',
      fontFamily: labelMaster.font.sans,
      whiteSpace: 'wrap',
      stretch: 'horizontal',
      height: '30px',
    }
  }
;

// print('Test', testLabel.style().set(labelStyles.titleStyle));

// ---------------------------------------------------------------
// Make labels.
// ---------------------------------------------------------------

var title = ui.Label({
  value: 'The title of this project is...',
  style: labelStyles.titleStyle
  }
);

var abstract = ui.Label({
  value: 'Here is a short description of your thesis or research question and how this map helps someone explore it.',
  style: labelStyles.abstractStyle
});

var instructions = ui.Label({
  value: 'Here is a short description of instructions for using your map and any widgets that it contains.',
  style: labelStyles.instructionStyle
});

var storyLink = ui.Label({
  value: 'LINK TO STORY',
  style: labelStyles.creditStyle,
  targetUrl: 'https://geog0150.github.io/w22/'
  }
);

var credits = ui.Label({
  value: 'Your name\nGeography 150\nWinter 2022\nMiddlebury College',
  style: labelStyles.creditStyle
  }
);

var leftLabel = ui.Label({
  value: 'Label for left map',
  style: labelStyles.mapLabelStyle
  }
);

leftLabel.style().set({
  textAlign: 'left',
  position: 'bottom-left',
});

var rightLabel = ui.Label({
  value: 'Label for right map',
  style: labelStyles.mapLabelStyle
  }
);

rightLabel.style().set({
  textAlign: 'right',
  position: 'bottom-right',
});

// ---------------------------------------------------------------
// Make widget to move between study sites.
// ---------------------------------------------------------------

var selectStyles =
  {
    padding: labelMaster.align.padding,
    margin: labelMaster.align.margin,
    stretch: 'horizontal'
  }
;

var places =
  {
    'Windbreak 1': wind1,
    'Windbreak 2': wind2,
    'Windbreak 3': wind3,
    'Riparian 1': rip1,
    'Riparian 2': rip2,
    'Riparian 3': rip3
  }
;

print(places['Windbreak 1']);

var selectPlaces = ui.Select({
  items: Object.keys(places),
  placeholder: 'Choose a location',
  style: selectStyles,
  onChange: function(key) {
    leftMap.centerObject(places[key], 14);
  }
});

// print(selectPlaces);

// ---------------------------------------------------------------
// Make root panel.
// ---------------------------------------------------------------

// Configure the layouts for how the panels flow together.
ui.root.setLayout(ui.Panel.Layout.flow('vertical'));

// Compose panels.
var rootPanel = ui.Panel(                         // Highest-level container.
  {
    // layout: ui.Panel.Layout.flow('horizontal'),
    style:
      {
        height: '100%',
        width: '100%'
      }
  }
);

// ---------------------------------------------------------------
// Configure map panels.
// ---------------------------------------------------------------

// Initialize two maps for swipe panel.

var leftMap = ui.Map({          // Map panel.
  style:
    {
      height: '95%'
    }
  }
);

leftMap.setOptions('HYBRID');
leftMap.add(leftLabel);

var rightMap = ui.Map({          // Map panel.
  style:
    {
      height: '95%'
    }
  }
);

rightMap.setOptions('TERRAIN');
rightMap.add(rightLabel);

// Initialize swipe panel.

var splitMap = ui.SplitPanel(           // Initialize split panel.
  leftMap,                              // Put on left side of panel.
  rightMap,                             // Put on right side of panel.
  'horizontal',                         // Arrange split in horizontal direction.
  true                                  // Make a SWIPT transition.
  )
;

// Link our maps together.
ui.Map.Linker([
    leftMap,
    rightMap
  ])
;


// Initialize a map panel (because you can not add a split panel to a split panel).

var mapPanel = ui.Panel({          // Map panel.
  style:
    {
      stretch: 'vertical'
    }
  }
);

mapPanel
  .add(splitMap);                 // Add swipe map to map panel.


// ---------------------------------------------------------------
// Compose maps.
// ---------------------------------------------------------------

leftMap.centerObject(poi, 10);
leftMap.setOptions('HYBRID');

leftMap.addLayer(summer, viz, 'Spring');
leftMap.addLayer(wind.map(getCentroid), {color: wind_color}, 'Windbreak points');
leftMap.addLayer(rip.map(getCentroid), {color: rip_color}, 'Riparian points');

rightMap.addLayer(fall, viz, 'Fall');
rightMap.addLayer(wind.map(getCentroid), {color: wind_color}, 'Windbreak points');
rightMap.addLayer(rip.map(getCentroid), {color: rip_color}, 'Riparian points');

// ---------------------------------------------------------------
// Make side panel.
// ---------------------------------------------------------------

var sidePanel = ui.Panel(                         // Side panel
  {
  widgets: [
    abstract,
    instructions,
    ss_summer,
    ss_fall,
    selectPlaces,
    storyLink,
    credits],
  layout: ui.Panel.Layout.flow('vertical'),
  style:
    {
      position: 'top-left',
      height: '90%',
      width: '20%',
      // padding: '10px',
      // margin: '10px',
      // backgroundColor: '#cccccc',
      // border:'4px solid orange',
      shown: true
    }
  }
);

// ---------------------------------------------------------------
// Compose layout.
// ---------------------------------------------------------------

// Initialize split layout.
var splitLayout = ui.SplitPanel(        // Split panel.
  sidePanel,                            // Add side panel to left side.
  mapPanel,                             // Add map panel (with swipe map) to right side.
  'horizontal',                         // Make split in horizontal direction.
  false                                 // Do NOT make swipe transition for split screen.
);

ui.root.clear();
ui.root.add(title);
ui.root.add(rootPanel);
rootPanel.add(splitLayout);
