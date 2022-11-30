It is often desirable to symbolize the perimeters of features without showing their interiors. You can do this with the .style() method. This involves three steps:

1. Define style parameters.  

2. Initialize map layer widget and apply style parameters.  

3. Add the map layer widget to the map.    

---

```js

//  Define style parameters for feature collection layer.  

var style_fc = {
  color: 'string',                    //  Stroke (perimeter) color as string ('white').
  width: number,                      //  Stroke (perimeter) width  as number (0.5)
  fillColor: 'FFFFFF00'               //  Fill (interior) color with opacity channel set to 00.
};

//  Initialize map layer as a widget.
//  Call style_regions with .style method.
//  Label the layer 'Regions;.

var fc_layer = ui.Map.Layer(
  regions.style(style_fc),             //  Call style parameters with .style method.
  {},                                  //  Viz parameters as empty object.
  'string',                            //  Name of the layer (string).
  true                                 //  Show by default (true or false)
);

//  Add map layer widget to left map.

left_map.add(regions_layer);          // Note: you use .add() method, not .addLayer() method.

```
