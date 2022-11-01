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

##Contrast enhance composites  

The example above uses the same min and max display range for all three bands in the composite. The histogram for each of band, however, may differ because each band may contain different data ranges. Using a single display range for all three bands will thus likely diminish the contrast of your composite.      

You can enhance the contrast of RGB composites by defining a different min and max for each band. Your visualization parameters will essentially contain three lists: list of min values, list of max values, list of bands. The first min value and first max value in the list will be applied to the first band, the second min value and second max value will be applied to the second band, and the third min value and third max value will be applied to the third band.   

```js

// 1. Define 'visualization parameters', or how values map to colors.

var vis = {
  min:  [0, 10, 0]          //  Min value of data range for each band in the list.
  max:  [255, 245, 245],    //  Max value of data range for each band in the list.
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
