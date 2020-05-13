/*
02 Tutorial

Very rough DRAFT
Mean annual land surface temperature

Jeff Howarth
10.19.2019

======================================================
01 Gather and filter data
======================================================
*/

var lst = // create a container called lst for
  ee.ImageCollection('MODIS/006/MOD11A2') // an image collection from MODIS
  .filterDate('2018-01-01', '2018-05-01') // just keep records between these dates
  .select('LST_Day_1km'); // just keep this band

print(lst,'LST'); //print out this dataset in the console and label it LST

/*
=======================================================
02 Reduce Image Collection to Image and convert units
=======================================================
*/

var lstCelsius = lst // create a container
  .mean() // reduce the image collection to the mean values at each location
  .multiply(0.02) // multiply the value at each location by 0.02 to handle scale factor
  .subtract(273.15); // subtract by this constant to convert from Kelvin to Celsius

/*
=======================================================
03 Define symbology for the image
=======================================================
*/

// the next chunk creates a container to store our palette
// I took the palette from Color Brewer
// http://colorbrewer2.org/#type=diverging&scheme=RdYlBu&n=9
// if you visit this site, you'll notice that the colors go from red to blue

var lstPalette = [
  '#d73027','#f46d43','#fdae61',
  '#fee090','#ffffbf','#e0f3f8',
  '#abd9e9','#74add1','#4575b4'
  ];

// now we'll create a dictionary to store our display ramp
// the curly brackets {} contain the dictionary

var lstDisplayRamp = {
  min: 50, // the data value we want to display with the first color in our palette
  max: -50, // the data value we want to display with the last color in our palette
  palette: lstPalette // the list of colors we defined above
};

/*
=======================================================
04 Set up map and add layers
=======================================================
*/

Map.setCenter(20,0,2); // centers map on 20N longitude, 0 latitude, and zoom factor 2
Map.setOptions('HYBRID'); // sets the base map to the hybrid option
Map.addLayer(lstCelsius, lstDisplayRamp,'Mean Annual Land Surface Temperature',1); //adds layer, applies symbology, provides a label
