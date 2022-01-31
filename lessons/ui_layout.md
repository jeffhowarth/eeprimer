## UI layout  

This lesson introduces you to widgets and how to use them to compose a layout for an earth engine app so that you can share your work with people who do not have earth engine accounts.  

By the end of the lesson, you should have a script to make a layout like [this app.](https://jhowarth.users.earthengine.app/view/eeprimer-ui-layout)  


## Introduction to widgets  


### Make a label

```js
// ---------------------------------------------------------------
// Introduction to labels
// ---------------------------------------------------------------

var testLabel = ui.Label(
  {
    value: 'The Quick Brown Fox Jumps Over The Lazy Dog!',
    // targetUrl: 'https://geog0150.github.io/w22/',
  }
);

print('Test label', testLabel);

```

### Style a label

```js

testLabel.style().set(
    {
      // height: '100px',
      // width: '100%',
      padding: '10px',
      margin: '20px',
      color: 'red',
      // backgroundColor: '#cccccc',
      // border:'4px solid orange',
      fontSize: '24px',
      fontWeight: 'bold',
      fontFamily: 'Helvetica, sans-serif',
      textAlign: 'left',
      // textDecoration: 'underline',
      whiteSpace: 'wrap',
      shown: true,
      stretch: 'horizontal'
    }
);

print('Test label with style', testLabel);
```

## A workflow to make a layout  

### Configure visual hierarchy of labels   

```js

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

print('Test styles', testLabel.style().set(labelStyles.titleStyle))

```

### Initialize labels


```js

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

```

### Configure the root panel  

```js

// ---------------------------------------------------------------
// Make root panel.
// ---------------------------------------------------------------

// Configure the layouts to define how the panels flow.
ui.root.setLayout(ui.Panel.Layout.flow('vertical'));

// Compose panels.
var rootPanel = ui.Panel(                         // Highest-level container.
  {                      
    layout: ui.Panel.Layout.flow('horizontal'),   
    style:
      {
        height: '100%',
        width: '100%'
      }
  }
);           
```

### Configure the map panels

```js

// ---------------------------------------------------------------
// Initialize the map panels and swipe layout.
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

```

### Initialize the side panel  

```js
// ---------------------------------------------------------------
// Make side panel.
// ---------------------------------------------------------------

var sidePanel = ui.Panel(                         // Side panel
  {
  widgets: [
    abstract,
    instructions,
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
      backgroundColor: '#cccccc',
      // border:'4px solid orange',
      shown: true
    }
  }
);
```

### Compose layout  

```js

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

```

### Add a layer to map  

```js

// ---------------------------------------------------------------
// Make config dictionary
// ---------------------------------------------------------------

var config = {};

// Set initial map center and zoom

config.poi = [-73.181911, 44.013317];
config.zoom = 12;

// ---------------------------------------------------------------
// Add example of global thematic dataset.
// ---------------------------------------------------------------

var dataset = ee.ImageCollection("ESA/WorldCover/v100").first();

var visualization = {
  bands: ['Map'],
};

// Map.centerObject(dataset);

rightMap.addLayer(dataset, visualization, "Landcover");

print(dataset);

// ---------------------------------------------------------------
// Make a map key.
// ---------------------------------------------------------------

config.lc_palette = [
  '#006400',
  '#ffbb22',
  '#ffff4c',
  '#f096ff',
  '#fa0000',
  '#b4b4b4',
  '#f0f0f0',
  '#0064c8',
  '#0096a0',
  '#fae6a0',
  '#00cf75'
];

config.lc_labels = [
  'Trees',
  'Shrubland',
  'Grassland',
  'Cropland',
  'Built-up',
  'Barren / sparse vegetation',
  'Snow and ice',
  'Open water',
  'Herbaceous wetland',
  'Mangroves',
  'Moss and lichen',
  ]
;

var cart = require('users/jhowarth/eePrimer:modules/cart.js');

var legend = cart.makeLegend(
  'Land cover',
  config.lc_palette,
  config.lc_labels,
  'top-left')
;

sidePanel.insert(1, legend);

```

### Add scene as layer to map  

```js

// ---------------------------------------------------------------
// Add example of scene layer.
// ---------------------------------------------------------------

// Initialize parameters in config dictionary.

config.s2_t1 = ['2020-04-01', '2020-05-01'];
config.s2_t2 = ['2020-09-01', '2020-10-01'];
config.cloud = 20;


// Function to scale clouds.

var maskS2clouds = function(image) {
  var qa = image.select('QA60');

  // Bits 10 and 11 are clouds and cirrus, respectively.
  var cloudBitMask = 1 << 10;
  var cirrusBitMask = 1 << 11;

  // Both flags should be set to zero, indicating clear conditions.
  var mask = qa.bitwiseAnd(cloudBitMask).eq(0)
      .and(qa.bitwiseAnd(cirrusBitMask).eq(0));

  return image.updateMask(mask).multiply(0.0001);
};

// Function to update image with config paramters.

var updateImage = function(start, end) {
  return ee.ImageCollection('COPERNICUS/S2_SR')
    .filterBounds(ee.Geometry.Point(config.poi))
    .filterDate(start, end)
    // Pre-filter to get less cloudy granules.
    .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE',config.cloud))
    .map(maskS2clouds)
    .median();
};

// Make visualization parameters.

config.s2_viz = {
  min: 0.0,
  max: 0.3,
  bands: ['B11', 'B8', 'B2'],
  gamma: 1.2
};

// Function to set center and add layers to map.

var updateMap = function() {
  leftMap.setCenter(config.poi[0], config.poi[1], config.zoom);
  leftMap.layers().set(
    0,
    ui.Map.Layer(
      updateImage(config.s2_t1[0], config.s2_t1[1]),
      config.s2_viz,
      'April - May 2020',
      true)
    );
  rightMap.layers().set(
    1,
    ui.Map.Layer(
      updateImage(config.s2_t2[0], config.s2_t2[1]),
      config.s2_viz,
      'August - Sept 2020',
      true)
      );
};

// updateMap()

```

### Add a select widget to layout  

```js

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
    'Manaus, Brasil': [-60.020555, -3.119977],
    'Zurich, Switzerland': [8.536, 47.376],
    'Shanghai, China': [121.477796, 31.226548],
    'Middlebury, VT': [-73.181911, 44.013317],
  }
;

var selectPlaces = ui.Select({
  items: Object.keys(places),
  placeholder: 'Choose a location',
  style: selectStyles,
  onChange: function(key) {
    config.poi = places[key];
    config.zoom = 12;
    updateMap();
  }
});

sidePanel.insert(3, selectPlaces);

// ---------------------------------------------------------------
// Run update function.
// ---------------------------------------------------------------


updateMap();
```
