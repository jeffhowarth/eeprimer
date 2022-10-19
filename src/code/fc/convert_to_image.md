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
