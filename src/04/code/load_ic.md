![code](../../images/code.png)  

# Load image collection     

This pattern resembles that for loading feature collections and images. You name a variable for the output and use the ee.ImageCollection() method. This takes the asset id as an argument and the asset id must be a string.   

```js

// Load image collection.

var ic_name = ee.ImageCollection('address');

```  
