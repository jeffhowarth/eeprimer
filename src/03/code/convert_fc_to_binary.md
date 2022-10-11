![code](../../images/code.png)  

# Convert feature collection to binary image    

This procedure begins with a feature collection and produces a binary raster, or a raster that shows the presence/absence of the features in the feature collection, where the cell contains the value 1 if it was covered by a feature's geometry and the value 0 if it was not covered.  

The procedure consists of two tasks and each task consists of three steps.  

### Prep feature collection  

The first task prepares a feature collection for conversion.  

  1. Write a function to give a feature a numeric property.
  2. Apply the function to every feature in a feature collection.   
  3. Check to see if step 2 worked as you expected. You should see that each feature in the feature collection has a property and value that correspond with the .set() arguments in the function.    

```js  
// PREPARE FEATURE COLLECTION  

// Write a function to give a feature a property named 'tag' and a specified value.  

var tag_features = function(feature) {          
  return feature
    .set(
      {tag: 1}  // Property name and specified value  
    );                            
  }
;

// Apply function to all features in a feature collection (fc).  

var tagged_fc = fc.map(tag_features);         // Change fc to the name of feature collection.  

// Inspect first record of collection.  

print('tagged fc', tagged_fc.first());
```

### Convert feature collection  

The second task converts a feature collection into an image band.  

  1. Write a function that creates a raster initialized with zeros, cast the raster as a 'byte' (which makes the raster 'smaller' with respect to storage), and then 'paint' the values from the specified feature property into the raster cells.  
  2. Apply the function and specify the feature collection (to convert) and property (to paint).
  3. Inspect the result. This will print the result to the Console. Click on the carrot to see the list of bands. Because we made the raster with the .constant() method, the name of the band will be "constant".  
```js

// CONVERT FEATURE COLLECTION TO IMAGE BAND  

// Create a function to convert feature collection to image.

var makeImage = function(fc, property) {
  return ee.Image.constant(0)                       //  Return a raster with zeros
    .byte()                                         //  Store as byte
    .paint(fc, property);                           //  Paint values at locations from property of feature collection (fc).
  }
;

// Call function with feature collection and property arguments.

var image_output = makeImage(tagged_fc, 'tag');

// Inspect the result.

print('image from fc', image_output);

```
