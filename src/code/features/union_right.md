
If you have completed the [vector objects](../../code/features/starter_coords.md) code, you can then do the following: 

``` js
// ----------------------------------------------------------------------------
// Union two features.
// ----------------------------------------------------------------------------

var buffer = point01.buffer(1000);
var buffer2 = point02.buffer(1000);

var union_features = buffer.union(buffer2);

print('Union of two features', union_features);

Map.addLayer(union_features, {color: 'gray'}, 'Union from two features',0);

```
