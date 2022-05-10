## Project hacks  

Are you finding problems in your workflow that you do not think are analogous to problems we have solved previously?    

If so, please let me know. Here are some questions from lab. I will try to add to this over the next couple of days.  


### Methods  

#### Dissolve  

To union features based on a common attribute. This is a vector-based approach that works best for feature collections that are regional and not global in extent.  

_Adapted from Kuik._   

```js
// ---------------------------------------------------------------------------
//  Union by a common property.
//  ----------------------------------------------------------------------------

// 1. Define these variables.

// var someFeatureCollection =
// var nameProperty =

// 2. Get a list of all possible property values.

var propVals = ee.List(someFeatureCollection.aggregate_array(nameProperty)).distinct();

// 3. Make each feature the union of all features that have the same propVal.

var unionByProp = ee.FeatureCollection(propVals.map(function(propVal){
  var tempFC = someFeatureCollection.filter(ee.Filter.eq(nameProperty, propVal));
  var unionFC = tempFC.union(maxError); // specifying a max error overcomes issues with features of diff projection

  // cast the featureCollection (output union()) to a single feature

  return ee.Feature(unionFC.first()).set(nameProperty, propVal);
}));
```

See an example [here](https://code.earthengine.google.com/9c95379ad1d3da524af7c6822a84eb98).  


#### Biome dissolve script  

[This script](https://code.earthengine.google.com/0787cb8d7fb449e82e139b8f61a2452e) demonstrates a few methods for working with global feature collections:  

1. Convert a feature collection with non-numeric, nominal values to an image.  
2. Convert image into a feature collection.  
3. Export feature collection as an asset.  
4. Export image as an asset.  

This first three steps can be helpful if your feature collection geometry is too complex to dissolve with .union() method.

#### Paint outlines of features as reference lines.

[This script](https://code.earthengine.google.com/4d1bc165e9d9baab1057654edc291fb2) demonstrates how to draw outlines of feature collections on a map without adding any fill to the interiors of the features.

#### Using awesome-spectral-indices  

[This script](https://code.earthengine.google.com/8f7d7d753e6f34485cf79b598b15d163) demonstrates how to work with the awesome spectral indices module and creates an NDVI anomaly for California in July 2020.  

#### Export to asset  

[From developer's page](https://developers.google.com/earth-engine/guides/exporting)
