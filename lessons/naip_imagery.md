## High resolution imagery  

This lesson introduces you to high-resolution imagery in the Earth Engine Catalog. After briefly working with starter code for Planet Labs data, we explore the National Agricultural Imagery Program of the USDA Farm Service Agency. We develop a script to filter this collection by county and retrieve the years and band lengths of imagery products. We then use this information to create two snapshots of the earliest and most recent images in the collection and use these data collections to explore urban development in some of the fastest growing counties in the USA.   

## Planet labs  

A small, open-source start-up that went private and behind a paywall, the company formerly known as [Planet](https://www.planet.com/) Labs collects high-resolution spatial datasets with micro-satellites.   

Unfortunately, there is only a small sample of Planet data on the [Earth Engine data catalog](https://developers.google.com/earth-engine/datasets/tags/planet?hl=en).  

## NAIP  

The National Agricultural Imagery Program is managed by the USDA Farm Service. The data are public and accessible through the [Earth Engine Data Catalog](https://developers.google.com/earth-engine/datasets/catalog/USDA_NAIP_DOQQ?hl=en).  

## Working with NAIP  

In this section, we will develop a script that I use to work with NAIP.  

### Create header  

```js
//  --------------------------------------------------------------------------------
//  Name:     naip_iamgery.js  
//  Purpose:  Gather NAIP imagery by location, year, and band length.  
//
//  Author:   Jeff Howarth
//  Modified: 03/07/2022
//  --------------------------------------------------------------------------------

```

### Define study region    

```js
//  --------------------------------------------------------------------------------
//  DEFINE YOUR STUDY REGION EXTENT  
//  --------------------------------------------------------------------------------

//  Filter TIGER county feature collection by a POI.  

```
### Print year and number of bands for study region  

```js
//  --------------------------------------------------------------------------------
//  PRINT YEAR AND NUMBER OF BANDS FOR STUDY REGION
//  --------------------------------------------------------------------------------

// Get first image in collection as a test image.
var test = collection.first();

print('Test', test);                // Print test image.
print(test.date().get('year'));     // Print year.
print(test.bandNames().length());   // Print number of bands.

// Create a function to add year and band length as properties of image.  

// Test function on a single band by printing to Console.  

// Map function to all images in the collection.

```
### List images in collection by year

```js
//  --------------------------------------------------------------------------------
//  LIST IMAGES IN COLLECTION BY YEAR.  
//  --------------------------------------------------------------------------------

var year_list = collection02          // Load collection with year and band properties.
  // .filter(                            // Filter collection.  
  //   ee.Filter.eq('bands', 3))         // Where number of bands equals a number (3 or 4).  
  // .aggregate_array('year')            // List the year of each band in the collectino.  
  // .distinct()                         // Only list each distinct (or unique) year.  
  // .sort()                             // Sort the years by ascending order.  
  ;

print('List of available years', year_list);    // Print the list of years.

```
### Define viz parameters  

```js
//  --------------------------------------------------------------------------------
//  DEFINE VIZ PARAMETERS    
//  --------------------------------------------------------------------------------

// Viz parameters for natural color.


// Viz parameters for false color NIR.

```
### Compose map

```js
//  --------------------------------------------------------------------------------
//  COMPOSE MAP      
//  --------------------------------------------------------------------------------

// Center map on study region.

// Define variables for first and last year.

// Add earliest and most recent full image of study site.
```

### Generalize and apply anywhere in lower 48.   

Please create snapshots of earliest and more recent image for county that includes Frisco, Texas.  

Please do the same for county that includes St. Augustine, Florida.     
