##Introduction  

The State of Vermont’s [Climate Action Plan](https://climatechange.vermont.gov/sites/climatecouncilsandbox/files/2021-12/Initial%20Climate%20Action%20Plan%20-%20Final%20-%2012-1-21.pdf){target=_blank} anticipates that the next century will bring broad shifts in local patterns of precipitation and temperature. Annual temperatures are projected to increase over 2°F by 2050 and between 4 to 9°F by 2100. The number of days with extreme heat (defined by a high temperature of at least 90°F) are projected to double in frequency to nine days a year by 2050 and then increase to between 15 and 45 days a year by the century’s end. Annual precipitation is projected to increase one to two inches by 2050 and between four and nine inches by 2100.  Much of this increased precipitation will be delivered in higher intensity storms, as extreme precipitation events (those with more than two inches of rain in a 24-hour period) are expected to increase.    

These changes will directly impact the ecological function and habitat of lands for native plant and animal species. As a result, the goal of protecting 30 percent of terrestrial lands and waters by 2030 has been widely recognized as a pillar of climate change planning. The United Nations Convention on Biodiversity adopted 30 by '30 goal as one of ten 'milestones' in a global framework for managing nature through 2030. President Biden’s 2021 “Executive Order on Tackling the Climate Crisis at Home and Abroad” also adopted the 30 by ‘30 goal.  

In Vermont, the [River Corridor Easement Program](https://dec.vermont.gov/watershed/rivers/river-corridor-and-floodplain-protection/protection) is one instrument available to compensate private land owners for extending protections on their lands. Your goal this week is to write a script in Earth Engine that identifies property owners with at least 50 acres of land within a designated river corridor for any watershed in Vermont. This tool could be used by municipal Conservation Commissions and private Land Trusts to contact land owners and initiate conversations that help us get closer to reaching 30 by '30 and subsequent 50 by '50 conservation goals.  

The app below illustrates that basic tool that you will make.          

<iframe
  src="https://jhowarth.users.earthengine.app/view/eeprimer-river-corridor-easement"
  style="width:100%; height:800px;"
></iframe>

_Here is [a link](https://jhowarth.users.earthengine.app/view/eeprimer-river-corridor-easement){target=_blank} to the app that will open in a separate window._  

##New code    

The list below introduces _new_ methods that you will use to solve this problem. Each snippet introduces a method with a toy case. Your task is to apply these new methods with methods you have learned previously to complete all sections of the starter script below.  

- [Vector objects](../../code/features/starter_coords.md)  
- [Inspect first feature](../../code/fc/print_first.md)  
- [Inspect unique values of one property](../../code/fc/aggregate_array.md)  
- [Filter by nominal attribute](../../code/fc/filter_eq.md)  
- [Filter by numerical attribute](../../code/fc/filter_gt.md)  
- [Buffer a feature](../../code/features/buffer.md)  
- [Compute area](../../code/features/area.md)  
- [Intersection](../../code/features/intersection.md)
- Buffer every feature in collection  

##Starter script  

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
