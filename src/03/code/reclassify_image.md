![code](../../images/code.png)  

# Generalize (or reclassify) an image  


```js
// Make list of old values.  

var old_values = [0,1,2,3,4,5];

// Make list of new values. The length of this list must be the same as list above. 

var new_values = [1,2,2,1,3,3];

// Replace old values with new values.   

var reclass_image = old_image.remap(old_values, new_values);

```
