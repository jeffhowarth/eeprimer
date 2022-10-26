```js
// Add bands to an image.

var output =                        // Image that you will produce.
  image_01                          // image_01 with one or more bands to add first to output
  .addBands(image_02)               // image_02 with one or more bands to add second to output  
;

// Example

var change_stack =
  year_one
  .addBands(year_two)
;

```
