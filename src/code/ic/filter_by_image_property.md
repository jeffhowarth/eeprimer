This pattern is similar to that for filtering feature collections by properties.

The general form is:   

```js

var output = ic
  .filter(ee.Filter.__('property name', value))
  ;

```

For example, this snippet filters a Landsat 8 image collection for all images with less than 20 percent cloud cover.

```js
var output = L8_collection
  .filter(ee.Filter.lt('CLOUD_COVER', 20))
  ;

```
