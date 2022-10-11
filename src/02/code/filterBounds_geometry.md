![code](../../images/code.png)  

# Filter for features that intersect geometry  

``` js
// ----------------------------------------------------------------------------
// Filter for features that intersect another feature's geometry.
// ----------------------------------------------------------------------------

var points_in_buffer = point_collection
  .filterBounds(buffer.geometry())          
;

Map.addLayer(points_in_buffer, {color:'red'}, 'Points in buffer',0);

```
