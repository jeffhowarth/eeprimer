```js
//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  TITLE:        week_02_practice_problem.js  
//  NAME:         Your name here please
//  DATE:         Today's date
//  PURPOSE:      Identify opportunities for river corridor easements.      
//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Use the drawing tool to drop a point on the Battell Bridge.

// --------------------------------------------------------------------------------
// 1. Load watersheds and filter for Vermont and study region.    
// --------------------------------------------------------------------------------

// Load watersheds from Earth Engine data catalog. Search for 'HUC12'.  



// Print first feature in collection in order to examine the table structure.  



// Filter the feature collection by attribute to keep only watersheds in the state of Vermont.



// Create a study region by selecting the Vermont watershed that intersects the point of interest.



// --------------------------------------------------------------------------------
// 2. Set up map and add watershed layers.   
// --------------------------------------------------------------------------------

// Center map study region and set zoom 11.  



// Set base map to satellite image with labels.



// Add layer of Vermont watersheds to map. Use color 'LightCyan' and 0.5 opacity.   



// Add layer of study region to map. Use color 'PaleTurquoise'



// ================================================================================
// Dataset addresses that are not in Earth Engine Data Catalog.   
// ================================================================================  

var datasets = {
  parcels: 'projects/conservation-atlas/assets/cadastre/VTPARCELS_poly_standardized_parcels_SP_v1',
  river_corridors: 'projects/conservation-atlas/assets/hydrology/WaterHydro_RiverCorridors_poly',
  }
;

// --------------------------------------------------------------------------------
// 3. Show river corridor that overlaps the study region.  
// --------------------------------------------------------------------------------

// Construct a feature collection from the river corridors address.
// Filter the collection for features that intersect the study region.
// Union the features within the collection.  



// Add the result from the last step to the map. Use color 'LightSkyBlue'.



// --------------------------------------------------------------------------------
// 4. Show property parcels that overlap the river corridor in the study region.  
// --------------------------------------------------------------------------------

// Construct a feature collection from the parcels address.
// Filter the feature collection for features that intersect the river corridors in the study region.  
// Filter the feature collection by attribute to keep features that are parcels (not roads, water, etc).  



/* Please note: to do the last step (filter by attribute), you will need to:  
    1. Find the property keys for the features and figure out which one describes the parcel property type.
    2. Then you need to find the list of values for this key
        (so that you can see how the data distinguishes owned parcels from roads, water, etc).
*/


// Add result from last step as layer to map. Use color 'Gainsboro'.   



// --------------------------------------------------------------------------------
// 5. Show intersections of parcels and river corridors in the study region.  
// --------------------------------------------------------------------------------

// Create function to intersect each parcel (from step 3) by river corridor (from step 3).
// Please ask for help if you get stuck here.



// Apply the function to every parcel in the featue collection.  



// Add the result to the map. Use color 'LightSkyBlue'.  




// --------------------------------------------------------------------------------
// 6. Show features that meet an area criterion.
// --------------------------------------------------------------------------------

// Write a function to compute area of each feature and append result to each feature as the property 'ACRES'.



// Filter the result of above for all features that are greater than 50 acres.  



// Add the result as a layer to map. Use color 'Orchid'.





// --------------------------------------------------------------------------------
// 7. Display results as a table.
// --------------------------------------------------------------------------------

// We will discuss this last step in class tomorrow.


```
