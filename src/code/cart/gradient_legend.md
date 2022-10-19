```js
// Load cart module.

var cart = require('users/jhowarth/eePrimer:modules/cart.js');

// Construct gradient legend.

var legend = cart                                                     // module
  .makeGradientLegend(                                                // function
    viz_params,                                                       // viz parameters
    'Legend title',                                                   // legend title
    'bottom-left'                                                     // position on map
  )
;

// Add legend to map.  

Map.add(legend);

```
