
``` js
// ----------------------------------------------------------------------------
// Intersection between a feature and collection.      
// ----------------------------------------------------------------------------

// 1. Define a function.

var intersect_features = function(feature) {
  var intersection = feature.intersection(buffer);
  return intersection;
  }
;

// 2. Map function across collection.

var intersection_feature_collection = buffers.map(intersect_features);

print('Intersection from feature collection', intersection_feature_collection);

Map.addLayer(intersection_feature_collection, {color: 'black'}, 'Intersection from feature collection',0);

```
