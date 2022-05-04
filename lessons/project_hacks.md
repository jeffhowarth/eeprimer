## Project hacks  

Are you finding problems in your workflow that you do not think are analogous to problems we have solved previously?    

If so, please let me know. Here are some questions from lab. I will try to add to this over the next couple of days.  

### Methods  

#### Dissolve

To union features based on a common attribute.

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

#### Raster to vector  

[From developer's page](https://developers.google.com/earth-engine/guides/reducers_reduce_to_vectors)  

#### Export to asset  

[From developer's page](https://developers.google.com/earth-engine/guides/exporting)
