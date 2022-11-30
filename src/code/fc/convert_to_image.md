This workflow creates a nominal image from a feature collection, or an image where each pixel value represents a class, category, or name. It assumes that each feature in the collection has a property that contains integers, where each integer represents the class, category, or name of the location.   

The workflow involves two steps:  

  1. Create a function that takes a feature collection and a property of features in the collection as arguments and then returns an image where each pixel value holds the specified property of the feature at that location.   

  2. Apply the function by calling it and naming the two arguments.  

The output will be an image with a single band (named 'constant'). Any pixel that does not correspond to a feature in the collection will be masked.   

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
