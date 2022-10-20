
If you have completed the [vector objects](../../code/features/starter_coords.md) code, you can then do the following: 

```js
// ----------------------------------------------------------------------------
// Filter collection by a nominal attribute.
// ----------------------------------------------------------------------------

var points_filtered_by_name = point_collection
  .filter(ee.Filter.eq('name', 'S'))
  ;

print ('selected by nominal attribute', points_filtered_by_name);

Map.addLayer(points_filtered_by_name, {color: 'yellow'}, 'Selected by name',0);

```
