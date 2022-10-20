If you have completed the [buffer every feature in a collection](../../code/fc/map_buffer.md) code, then you can then do the following:   

``` js
// ----------------------------------------------------------------------------
// Filter for features that intersect another feature collection.
// ----------------------------------------------------------------------------

var points_in_buffers = point_collection
  .filterBounds(buffers)
;

Map.addLayer(points_in_buffers, {color:'magenta'}, 'Points in buffers from name filter',0);


```
