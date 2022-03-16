/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    TITLE:        cloud_mask_examples.js
    AUTHOR:       Jeff Howarth
    LAST EDITED:  3/15/2022

    PURPOSE:      Examples for filtering with cloud masks from module for:

                  Landsat 4,5,7,8,9
                  Sentinel 2
                  MODIS (Terra Surface Reflectance Daily Global 1km and 500m)

   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


var tools = require('users/jhowarth/eePrimer:modules/image_tools.js');

// Set POI.

var poi = ee.Geometry.Point([-73.181545, 44.013323]);

// Center map on POI.

Map.centerObject(poi,12);

// Set key variables.

var startMonth = 6;
var endMonth = 9;

// ----------------------------------------------------------------------
// Sample application for L4.
// ----------------------------------------------------------------------

var L4 = ee.ImageCollection('LANDSAT/LT04/C02/T1_L2')
  .filterBounds(poi)
  .filter(ee.Filter.calendarRange(1989, 1989, 'year'))
  .filter(ee.Filter.calendarRange(startMonth, endMonth, 'month'))
  .filter(ee.Filter.lt('CLOUD_COVER', 20))
  .map(tools.scale_L457)
  .map(tools.cloudMask_L457)
  .median()
;

var viz_L4 = {
  bands: ['SR_B3', 'SR_B2', 'SR_B1'],
  min: 0.0,
  max: 0.3,
};

Map.addLayer(L4, viz_L4, 'L4', 1);

// ----------------------------------------------------------------------
// Sample application for L5.
// ----------------------------------------------------------------------

var L5 = ee.ImageCollection('LANDSAT/LT05/C02/T1_L2')
  .filterBounds(poi)
  .filter(ee.Filter.calendarRange(1985, 1985, 'year'))
  .filter(ee.Filter.calendarRange(startMonth, endMonth, 'month'))
  .filter(ee.Filter.lt('CLOUD_COVER', 20))
  .map(tools.scale_L457)
  .map(tools.cloudMask_L457)
  .median()
;

var viz_L5 = {
  bands: ['SR_B3', 'SR_B2', 'SR_B1'],
  min: 0.0,
  max: 0.3,
};

Map.addLayer(L5, viz_L5, 'L5', 0);

// ----------------------------------------------------------------------
// Sample application for L7.
// ----------------------------------------------------------------------

var L7 = ee.ImageCollection("LANDSAT/LE07/C02/T1_L2")
  .filterBounds(poi)
  .filter(ee.Filter.calendarRange(2000, 2000, 'year'))
  .filter(ee.Filter.calendarRange(startMonth, endMonth, 'month'))
  .filter(ee.Filter.lt('CLOUD_COVER', 20))
  .map(tools.scale_L457)
  .map(tools.cloudMask_L457)
  .median()
;

var viz_L7 = {
  bands: ['SR_B3', 'SR_B2', 'SR_B1'],
  min: 0.0,
  max: 0.3,
};

Map.addLayer(L7, viz_L7, 'L7', 0);

// ----------------------------------------------------------------------
// Sample application for L8.
// ----------------------------------------------------------------------

var L8 = ee.ImageCollection("LANDSAT/LC08/C02/T1_L2")
  .filterBounds(poi)
  .filter(ee.Filter.calendarRange(2015, 2015, 'year'))
  .filter(ee.Filter.calendarRange(startMonth, endMonth, 'month'))
  .filter(ee.Filter.lt('CLOUD_COVER',20))
  .map(tools.scale_L89)
  .map(tools.cloudMask_L89)
  .median()
;

var viz_L8 = {
  bands: ['SR_B4', 'SR_B3', 'SR_B2'],
  min: 0.0,
  max: 0.3,
};

Map.addLayer(L8, viz_L8, 'L8', 0);

// ----------------------------------------------------------------------
// Sample application for L9.
// ----------------------------------------------------------------------

var L9 = ee.ImageCollection("LANDSAT/LC09/C02/T1_L2")
  .filterBounds(poi)
  .filter(ee.Filter.calendarRange(2022, 2022, 'year'))
  .filter(ee.Filter.calendarRange(startMonth, endMonth, 'month'))
  .filter(ee.Filter.lt('CLOUD_COVER',20))
  .map(tools.scale_L89)
  .map(tools.cloudMask_L89)
  .median()
;

var viz_L9 = {
  bands: ['SR_B4', 'SR_B3', 'SR_B2'],
  min: 0.0,
  max: 0.3,
};

Map.addLayer(L9, viz_L9, 'L9',0);



// ----------------------------------------------------------------------
// Sample application for Sentinel 2.
// ----------------------------------------------------------------------

var S2 = ee.ImageCollection("COPERNICUS/S2_SR")
  .filterBounds(poi)
  .filter(ee.Filter.calendarRange(2020, 2020, 'year'))
  .filter(ee.Filter.calendarRange(startMonth, endMonth, 'month'))
  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE',20))
  .map(tools.cloudMask_S2)
  .median()
  .multiply(0.0001)
;

var viz_S2 = {
  bands: ['B4', 'B3', 'B2'],
  min: 0.0,
  max: 0.3,
};

Map.addLayer(S2, viz_S2, 'S2', 0);

// ----------------------------------------------------------------------
// Sample application for MODIS.
// ----------------------------------------------------------------------

var MODIS = ee.ImageCollection("MODIS/006/MOD09GA")
  .filterBounds(poi)
  .filter(ee.Filter.calendarRange(2021, 2021, 'year'))
  .filter(ee.Filter.calendarRange(startMonth, endMonth, 'month'))
  .map(tools.cloudMask_MODIS)
  .median()
  .multiply(0.0001)
;

var viz_MODIS = {
  bands: ['sur_refl_b01', 'sur_refl_b04', 'sur_refl_b03'],
  min: 0.0,
  max: 0.3,
};

Map.addLayer(MODIS, viz_MODIS, 'MODIS', 0);
