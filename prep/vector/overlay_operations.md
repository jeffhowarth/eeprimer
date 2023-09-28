## Introduction 

## Symmetrical difference 

```js
// --------------------------------------------------------------------------
// Symmetrical difference
// --------------------------------------------------------------------------

var sym_diff = buffer.symmetricDifference(pond_feature, 1);

Map.addLayer(sym_diff, {color: 'Orchid'}, 'Sym difference example', false);

print(
  'Symmetrical difference:',
  sym_diff
  )
;
```

## Intersection 

```js
// --------------------------------------------------------------------------
// Intersection
// --------------------------------------------------------------------------

var intersection = sym_diff.intersection(bounds, 1, crs);

Map.addLayer(intersection, {color: 'Salmon'}, 'Intersection example', false);

print(
  'Intersection:',
  intersection
  )
;
```

## Union 

```js
// --------------------------------------------------------------------------
// Union
// --------------------------------------------------------------------------

var union = sym_diff.union(bounds,1, crs);

Map.addLayer(union, {color: 'Chocolate'}, 'Union example', false);

print(
  'Union:',
  union
  )
;
```