This workflow involves two rasters:  

  - a _bottom raster_ contains values to be displayed or analyzed,
  - a _binary raster_ contains two possible values (zeros or ones).

When you apply a mask, you drape the binary raster over the bottom raster. Any location with the value one (1) in the binary raster will be visible in the bottom raster. Any location with the value zero (0) in the binary raster will be _masked_. A masked value will not be visible when you display the image on a map, nor will it be used in computations when you mask an image in a workflow.  

```js

// Apply binary raster as a mask on another raster.  

var image_with_mask = bottom_raster.updateMask(binary_raster);

```
