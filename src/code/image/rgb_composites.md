##Use cases  

Use this method to symbolize data from three bands with additive color to make an RGB composite.  

##Workflow   

This involves two steps:  

  1. define range and bands (collectively called _visualization parameters_),
  2. visualize as a map layer.  

##Code   

```js

// 1. Define 'visualization parameters', or how values map to colors.

var vis = {
  min:  0,                  //  Min value of data range.
  max:  255,                //  Max value of data range.
  bands: [                  //  Band list:
    'band_name',            //  Symbolize this band with red channel
    'band_name',            //  Symbolize this band with green channel
    'band_name'             //  Symbolize this band with blue channel
    ],          
  }
;

// 2. Add as layer to map.

map.addLayer(
  data_object,              //  Image with bands to visualize
  vis,                      //  Range and band list
  'layer label',            //  Layer label  
  false,                    //  Shown (optional, default is 1)  
  1                         //  Opacity (optional, default is 1)
  )
;

```
