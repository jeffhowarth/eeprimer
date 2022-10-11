![code](../../images/code.png)  

# Compute area  

```js
// ----------------------------------------------------------------------------
// To compute area of a feature.
// ----------------------------------------------------------------------------

var area_buffer = buffer.area();

print('area of buffer', area_buffer);

var buffer_with_area = buffer.set({area: area_buffer});

print('buffer with area', buffer_with_area);

```
