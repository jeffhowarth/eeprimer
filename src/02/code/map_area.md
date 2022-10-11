![code](../../images/code.png)  

# Compute area of every feature in collection   

``` js
// ----------------------------------------------------------------------------
// To compute area of every feature in a collection:  
// ----------------------------------------------------------------------------

// 1. Define a function.

var compute_area = function(feature) {
  var area_feature = feature.area();
  var features_with_area = feature.set({area: area_feature});
  return features_with_area;
};

// 2. Map function over collection.

var buffers_with_area = buffers.map(compute_area);

print('buffers with area', buffers_with_area);

```
