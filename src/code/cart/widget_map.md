The code below will initialize a new map widget. You can add layers to this object, change the map center, and change the basemap, just like you have done with a big m Map object. The only difference now is that you call the name of the map variable you defined, rather than Map, when applying these methods.  

```js
//  Initialize a map widget.  

var output = ui.Map();

//  Set the base map.  

output.setOptions('SATELLITE');  

// Or alternatively you can chain these two steps.

// Initialize a map widget and set base map.

var output = ui.Map()
  .setOptions('SATELLITE');

```
