This workflow creates an image from a feature collection. It involves two steps:  

  1. Create a function that takes a feature collection and a property of features in the collection as arguments and then returns an image where each pixel value holds the specified property of the feature at that location.   

  2. Apply the function by calling it and naming the two arguments.  

The output will be an image with a single band (named 'constant').   

```js
// Create a function to convert feature collection to image.

var makeImage = function(fc, property) {
  return ee.Image()                                 //  Create empty image
    .byte()                                         //  Store as byte
    .paint(fc, property);                           //  Paint values at locations from property of feature collection (fc).
  }
;

// Use function to convert a feature collection to an image.  

var output =                   // Name output variable
  makeImage(                   // Call function from above
    fc_name,                   // feature collection  
    'property_name'            // property of fc to use as pixel values
  )
;


```
