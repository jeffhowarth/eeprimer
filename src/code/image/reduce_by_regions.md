This zonal operation works with an image and a feature collection. It uses the regions defined by each feature in the feature collection to summarize the values of the image.  

It can sometimes be helpful to think of the analogy of 'cookie dough' and 'cookie cutter' (place cookie cutters onto the dough to summarize dough values). The image provides the dough and the feature collection provides the cutters. 

The output of this operation is a feature collection, where each feature in the collection has a new property that holds the summary statistic of the image. This new property is named after the reducer used as an argument.

```js
// Reduce image values by regions defined by each feature in a feature collection.  

var output = image_dough                    // create output from image (dough)
  .reduceRegions({                          // method to compute a zonal statistic
    collection: fc,                         // feature collection to use as cookie cutters  
    reducer: ee.Reducer.____(),             // name of reducer (for dough values within each cutter)
    scale: __,                              // if possible same as dough, if exceeds memory then 2 or 3 times dough scale
    tileScale: 1                            // if possible 1, but if exceeds memory then 2 or 4
  }
);
```
