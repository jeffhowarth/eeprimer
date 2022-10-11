![code](../../images/code.png)  

# Buffer a feature  

``` js
// ----------------------------------------------------------------------------
// To buffer a feature.
// ----------------------------------------------------------------------------

var buffer = point01.buffer(1000);

print('buffer a feature', buffer);

Map.addLayer(buffer, {color:'blue'}, 'Buffer a feature',0);

```
