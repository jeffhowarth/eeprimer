```js
// Load cart module.

var cart = require('users/jhowarth/eePrimer:modules/cart.js');

// Make labels for nominal image values.

var qualitative_labels = [
  ]
;

// Construct legend for HOLC reference map.

var legend = cart.makeLegend(
  'Legend label',                         // Label for legend
  palette,                                // Palette for image  
  qualitative_labels,                     // labels to display                  
  'bottom-left'                           // Where you want to put legend on the map.
);

// Add legend to map.

Map.add(legend);



```
