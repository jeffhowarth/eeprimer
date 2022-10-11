![code](../../images/code.png)  

# Union features in a collection  

``` js
// ----------------------------------------------------------------------------
// Union features in a feature collection.    
// ----------------------------------------------------------------------------

var union_feature_collection = buffers.union();

print('Union from feature collection', union_feature_collection);

Map.addLayer(union_feature_collection, {color: 'black'}, 'Union from feature collection',0);


```
