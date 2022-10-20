If you have completed the [buffer a feature](../../code/features/buffer.md) code, then you can do the following:  

``` js
// ----------------------------------------------------------------------------
// Intersection of two features.
// ----------------------------------------------------------------------------

var buffer = point01.buffer(1000);
var buffer2 = point02.buffer(1000);

var intersection_features = buffer.intersection(buffer2;

print('Intersection of two features', intersection_features);

Map.addLayer(intersection_features, {color: 'gray'}, 'Intersection of two features',0);


```
