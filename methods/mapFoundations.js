// ===========================
// PRIMER FOR EARTH ENGINE
//
// Map Foundations
//
// Jeff Howarth
//
// ===========================

// -------
// Part 1
// -------

Map.setOptions('HYBRID');
Map.setCenter(140, 35, 3);

// -----------
// Import data
// -----------

var table = ee.FeatureCollection("users/jhowarth/eePrimer/grid20degrees"),
    geometry = /* color: #00ffff */ee.Geometry.Point([139.77926249628308, 35.545853491820665]),
    geometry2 = /* color: #bf04c2 */ee.Geometry.Point([-74.17068033088691, 40.689334262788805]);

// -------
// Part 2
// -------

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

// -------
// Part 3
// -------

var line = ee.Geometry.LineString([geometry, geometry2]);
print('Rhumb line', line);

Map.addLayer(line, {color: 'blue'}, "Rhumb line", 0);

// --------
// Part 4
// ---------

print('grid points', table);
Map.addLayer(table, {color: 'red'}, 'Points',0);

var makeIndicatrix = function(feature) {
  return feature.buffer(600000);
}
;

var tissotIndicatrix = table.map(makeIndicatrix);

Map.addLayer(tissotIndicatrix, {color: 'gold'}, 'Indicatrix',0);
