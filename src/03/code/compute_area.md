![code](../../images/code.png)  

# Compute area of a zone    

This snippet shows how to compute the area of a region as a _zonal statistic_. A zonal statistic computes a statistic with the values of one layer in one or more zones defined by a second layer. I tend to think of the zones as cookie cutters and the image that provides the statistics as the cookie dough. We will draw this out in class.


```js
// Create a layer where each pixel value reports the pixel's area.

var pixel_area_layer = ee.Image
  .pixelArea()
;

// Inspect the result. This should be an image with one band named "area".  

print('pixel area layer', pixel_area_layer);

// Create a dictionary for reducer arguments.  

var reduce_params = {
  reducer: ee.Reducer.sum(),          // Name of reducer
  geometry: cutter_features,          // Cutter: Feature collection, feature, or geometry that defines the zone.     
  scale: 10,                          // Scale to perform operation. This usually needs to be coarser than dough image, otherwise Google complains about the work involved.
  maxPixels: 1e12                     // How many pixels should Google work with before bailing on task? I usually set this at 1e12.
  }
;

// Perform zonal statistic on dough by calling the dictionary defined above.

var zonal_area_output = dough.reduceRegion(reduce_params);

// Inspect results.

print('zonal area output', zonal_area_output)

```
