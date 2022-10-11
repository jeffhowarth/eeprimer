![code](../../images/code.png)  

# Union two features  

``` js
// ----------------------------------------------------------------------------
// Union two features.
// ----------------------------------------------------------------------------

var union_features = buffer.union(buffers.first());

print('Union of two features', union_features);

Map.addLayer(union_features, {color: 'gray'}, 'Union from two features',0);

```
