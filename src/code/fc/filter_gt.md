If you have completed the [vector objects](../features/starter_coords.md) code, you can then do the following:

```js
// ----------------------------------------------------------------------------
// Filter collection by a numeric attribute.
// ----------------------------------------------------------------------------

var points_filtered_by_number = point_collection
  .filter(ee.Filter.gt('number', 1))
  ;

print ('selected by numeric attribute', points_filtered_by_number);

Map.addLayer(points_filtered_by_number, {color: 'cyan'}, 'Selected by number',0);

```
