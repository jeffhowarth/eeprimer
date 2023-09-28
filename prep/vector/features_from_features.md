## Introduction

This tutorial introduces some common methods for creating features from features. It walks you through how to find the centroid (center of gravity) of a feature, how to create a feature's bounding rectangle, how to buffer a feature by a specified distance, and how to generate a set of random points from a feature. In addition, you will learn how to write a custom function and how to apply to function to both a single feature and a collection of features.    

## Centroid

```js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  2. FEATURES FROM FEATURES.
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// --------------------------------------------------------------------------
// Centroid of polygon.
// --------------------------------------------------------------------------

var centroid = pond_feature;

Map.addLayer();

print(
  'RUDIMENTS 2:',
  'centroid',
  centroid
  )
;
```

## Bounding box

```js
// --------------------------------------------------------------------------
// Bounding box
// --------------------------------------------------------------------------

var bounds = pond_feature;

Map.addLayer();

print(
  'bounds',
  bounds
  )
;
```

## Buffer 

```js
// --------------------------------------------------------------------------
// Buffer
// --------------------------------------------------------------------------

var buffer = pond_feature;

Map.addLayer();

print(
  'buffer',
  buffer
  )
;
```

## Write a custom function

```js
// --------------------------------------------------------------------------
// Write a custom function
// --------------------------------------------------------------------------

var bufferFeature = ;

// Apply function for a feature. 

var buffer_test = ;

Map.addLayer();

print(
  'buffer test', 
  buffer_test
  )
;
```

## Random points

```js
// --------------------------------------------------------------------------
// Random points
// --------------------------------------------------------------------------

var random_points = ;

Map.addLayer();


print(
  'Random points:',
  random_points
  )
;
```

## Map a function over a collection

```js
// --------------------------------------------------------------------------
// Map a function over a collection. 
// --------------------------------------------------------------------------

var buffered_points = random_points;

Map.addLayer();

print(
    "Buffered points:",
    buffered_points
);

```