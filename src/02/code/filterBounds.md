![code](../../images/code.png)  

# Filter for features that intersect feature collection  

``` js
// ----------------------------------------------------------------------------
// Filter for features that intersect another feature collection.
// ----------------------------------------------------------------------------

var points_in_buffers = point_collection
  .filterBounds(buffers)
;

Map.addLayer(points_in_buffers, {color:'magenta'}, 'Points in buffers from name filter',0);


```
