
```js  
// ----------------------------------------------------------------------------
// Vector objects.  
// ----------------------------------------------------------------------------

// Here are three starter coordinates stored as a dictionary.

var coords = {
  pt1: [-73.168687, 44.013513],
  pt2: [-73.156242, 44.006167],
  pt3: [-73.173494, 44.008142]
  }
;

// Here are three geometries constructed from these coordinates.  

var geometry = ee.Geometry.Point(coords.pt1);
var geometry2 = ee.Geometry.Point(coords.pt2);
var geometry3 = ee.Geometry.Point(coords.pt3);

// Here are three features.

var point01 = ee.Feature(geometry,{name: 'S', number: 1});
var point02 = ee.Feature(geometry2,{name: 'O', number: 2});
var point03 = ee.Feature(geometry3,{name: 'S', number: 3});

// Here is a feature collection that contains three features.  

var point_collection = ee.FeatureCollection([point01, point02, point03]);

// Inspect the collection.  

print('Point collection', point_collection);  


```
