//  ----------------------------------------------------
//  Title:  map101.js
//  Author: Jeff Howarth
//  ----------------------------------------------------

//  -----------------
//  Base map options
//  -----------------

Map.setOptions('HYBRID');
Map.setCenter(140, 35, 3);

//  -------------------
//  Geographic Circles
//  -------------------

//  Place point on Haneda Airport

var geometry = ee.Geometry.Point([139.77926249628308, 35.545853491820665]);

// Haneda Airport

var circle = geometry.buffer(1000000);
var circle2 = geometry.buffer(10000000);

var circleVis = {
  eeObject: circle,
  visParams: {color: 'red'},
  name: '1000 km',
  shown: 0,
  opacity: 1
};

Map.addLayer(circleVis);
Map.addLayer(circle2, {color: 'yellow'}, '10,000 km', 0, 1);

//  -----------------
//  Geographic Lines
//  -----------------

//  Place point on JRK airport
var geometry2 = ee.Geometry.Point([-74.17068033088691, 40.689334262788805]);

var line = ee.Geometry.LineString([geometry, geometry2]);
print('Rhumb line', line);

Map.addLayer(line, {color: 'blue'}, "Rhumb line", 0);

//  --------------------
//  Mercator distortion
//  --------------------

var tissot = require('users/jhowarth/eePrimer:modules/tissot.js');

Map.addLayer(tissot.grid, {color: 'white'}, 'Points', 0);
Map.addLayer(tissot.indicatrix, {color: 'gold'}, 'Indicatrix',0);
