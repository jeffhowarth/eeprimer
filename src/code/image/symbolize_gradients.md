##Use cases  

Use this method to symbolize _continuous data_, or data that represents a gradient of values (e.g. elevation, temperature, reflectance), from one band of an image.  

In this case, your goal is to stretch a _palette_ across a _range_ of data values.

##Workflow   

To symbolize image data from a single band with color:  

  1. define color palette,
  2. define range, band, and palette (collectively called _visualization parameters_),
  3. visualize as a map layer.  

##Code   

```js

// 1. Define color palette.  

// For nominal data, the number of color codes should equal the number of unique nominal values.   

var palette_name = [
  'color code',             //   Color for min value  
  'color code',             //   Color for max value or intermediate color
  '...'                     //   Last color symbolizes max value.   
  ];

// 2. Define 'visualization parameters', or how values map to colors.

var vis = {
  min:  0,                  //  Min data value to symbolize.
  max:  255,                //  Max data value to symbolize.
  bands: ['name'],          //  Source for data values.
  palette: palette_name,    //  Source for palette (range of colors)
  }
;

// 3. Add as layer to map.

map.addLayer(
  data_object,              //  Band with values to visualize
  vis,                      //  Range, source, and palette
  'layer label',            //  Layer label  
  false,                    //  Shown   
  1                         //  Opacity  
  )
;

```
