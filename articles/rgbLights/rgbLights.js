//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  name:     rgbLights.js
//  purpose:  RGB of stable nighttime lights (1993-2013)
//
//  author:   Jeff Howarth
//  update:   11/20/2021
//  license:  Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)
//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//  load images, select stable lights band, rename after year

var lights93 = ee.Image('NOAA/DMSP-OLS/NIGHTTIME_LIGHTS/F101993')
  .select('stable_lights').rename('1993');

var lights03 = ee.Image('NOAA/DMSP-OLS/NIGHTTIME_LIGHTS/F152003')
  .select('stable_lights').rename('2003');

var lights13 = ee.Image('NOAA/DMSP-OLS/NIGHTTIME_LIGHTS/F182013')
  .select('stable_lights').rename('2013');

//  construct three band image

var changeImage = lights13.addBands(lights03).addBands(lights93);


//  add image to map

Map.addLayer(changeImage, {min:0,max:63}, "RGB composite", 1, 1);
