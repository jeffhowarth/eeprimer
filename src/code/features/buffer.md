
If you have completed the [vector objects](../../code/features/starter_coords.md) code, you can then do the following:    

``` js
// ----------------------------------------------------------------------------
// To buffer a feature.
// ----------------------------------------------------------------------------

var buffer = point01.buffer(1000);

print('buffer a feature', buffer);

Map.addLayer(buffer, {color:'blue'}, 'Buffer a feature',0);

```
