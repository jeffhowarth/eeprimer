##Use cases  

Use this method to symbolize _nominal data_, or data that represents categories or classes (e.g. land cover categories or elevation classes), from one band of an image.  

In this case, your goal is to represent each unique category or class with a unique color.  

##Workflow   

The involves three steps:  

  1. define _palette_ (set of colors),
  2. define range, band, and palette (collectively called _visualization parameters_),
  3. visualize as a map layer.  

##Code   

```js

// 1. Define palette.   

var palette_name = [
  'color code',             //   Describe label  
  'color code',             //   Describe label  
  '...'                     //   # color codes should match # class codes  
  ];

// 2. Define 'visualization parameters', or how values map to colors.

var vis = {
  min:  0,                  //  Min class value for palette.
  max:  1,                  //  Max class value for palette.
  bands: ['name'],          //  Source for class values.
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
