```js
// Load module.

var check = require('users/jhowarth/eePrimer:modules/checks.js');

// Use meanValue() function to print mean value of an image (dough) with a geometry (cutter).

check.meanValue(                  // Call function
  dough,                          // Image to check
  bands,                          // Bands to select in image as a list
  geometry,                       // Geometry to use as a cutter
  resolution,                     // Pixel resolution (scale) of image (dough)
  label                           // Label to print to console above result.
  )
;

// Example  

check.meanValue(      
  red_5_all_clear,
  bands,
  geometry,
  30,
  'Red 5 check'
  )
;



```
