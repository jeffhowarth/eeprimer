/*
01 Tutorial 

Jeff Howarth
*/

var lst = ee.ImageCollection('MODIS/006/MOD11A2')
  .filterDate('2018-01-01', '2018-05-01')
  .select('LST_Day_1km');

print(lst,'LST');

var lstCelsius = lst
  .mean()
  .multiply(0.02)
  .subtract(273.15);

var palette = [
  '#d73027','#f46d43','#fdae61',
  '#fee090','#ffffbf','#e0f3f8',
  '#abd9e9','#74add1','#4575b4'
  ];

var landSurfaceTemperatureVis = {
  min: 50,
  max: -50,
  palette: palette
};

Map.setCenter(20,0,2); 
Map.setOptions('HYBRID');
Map.addLayer(lstCelsius, landSurfaceTemperatureVis,'Mean Annual Land Surface Temperature',1);