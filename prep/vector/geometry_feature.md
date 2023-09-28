## Introduction 

This tutorial introduces geometry and feature objects in Google Earth Engine. It walks you through how to construct a feature (a geometry with attributes), how to compute attributes of a geometry, and how to write a function to work with feature objects. 

This tutorial also examines a basic principle of vector: a feature's spatial reference systems affects geometry attributes. 

## Start a new script

```js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  Rudiments of Vector
//  Jeff Howarth 
//  Geography 251
//  9/26/2023
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  1. GEOMETRY AND FEATURE
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
```

## Create a geometry  

```js
// --------------------------------------------------------------------------
//  Digitize hello pond.
// --------------------------------------------------------------------------
```

## Construct a feature

```js
// --------------------------------------------------------------------------
//  Construct a feature.
// --------------------------------------------------------------------------
 
var pond_feature = ee.Feature();
 
Map.addLayer();
```

## Compute attributes from geometry

```js
// --------------------------------------------------------------------------
// Compute attributes from geometry.
// --------------------------------------------------------------------------

var area = pond_feature;
var perimeter = pond_feature;

print(
  'Spatial property checks:',
  area,
  perimeter
  )
;

// Save spatial attributes as properties of feature. 

var pond_feature_2 = pond_feature
;

print(
  'pond_feature check',
  pond_feature_2
  )
;
```

## Compare measurements on spheroid to a projection surface 

```js
// --------------------------------------------------------------------------
// Compare measurements on spheroid to a projection surface. 
// --------------------------------------------------------------------------

var crs = 'EPSG:32145';     // Vermont State Plane North American Datum 1983        

var area_crs = geometry;
var perimeter_crs = geometry;

var area_crs_acres = geometry;

// Save spatial attributes as properties of feature. 

var pond_feature_3 = pond_feature_2
;

print(
  'CRS check:',
  area_crs,
  perimeter_crs,
  area_crs_acres,
  pond_feature_3
  )
;

```