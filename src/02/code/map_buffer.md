![code](../../images/code.png)  

# Buffer every feature in a collection  

``` js
// ----------------------------------------------------------------------------
// To buffer every feature in a collection:  
// ----------------------------------------------------------------------------

// 1. Define a function.

var buffer_points = function(point){
  var buffered_point = point.buffer(1000);
  return buffered_point;
  }
;

// 2. Map function over collection.  

var buffers = points_filtered_by_number.map(buffer_points);

print('buffer all featuers in collection filtered by number', buffers);

Map.addLayer(buffers, {color:'green'}, 'Buffer all features in collection filtered by number',0);

```
