If you have completed the [buffer every feature in a collection](../fc/map_buffer.md) code, then you can then do the following:

``` js
// ----------------------------------------------------------------------------
// Union features in a feature collection.    
// ----------------------------------------------------------------------------

var union_feature_collection = buffers.union();

print('Union from feature collection', union_feature_collection);

Map.addLayer(union_feature_collection, {color: 'black'}, 'Union from feature collection',0);


```
