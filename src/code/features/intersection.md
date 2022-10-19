
``` js
// ----------------------------------------------------------------------------
// Intersection two features.
// ----------------------------------------------------------------------------

var intersection_features = buffer.intersection(buffers.first());

print('Intersection of two features', intersection_features);

Map.addLayer(intersection_features, {color: 'gray'}, 'Intersection of two features',0);


```
