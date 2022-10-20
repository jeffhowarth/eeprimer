If you have completed the [buffer a feature](../../code/features/buffer.md) code, then you can then do the following: 

``` js
// ----------------------------------------------------------------------------
// Filter for features that intersect another feature's geometry.
// ----------------------------------------------------------------------------

var points_in_buffer = point_collection
  .filterBounds(buffer.geometry())          
;

Map.addLayer(points_in_buffer, {color:'red'}, 'Points in buffer',0);

```
