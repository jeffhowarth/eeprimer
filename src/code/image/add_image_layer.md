
Visualize data with color in three steps:  

  1. define color palette,
  2. define range, data source, and palette,
  3. visualize as a map layer.  

```js

// 1. Define color palette.  

// For nominal data, the number of color codes should equal the number of unique nominal values.   

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
