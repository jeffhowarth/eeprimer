## SST anomalies  

Please write a script to produce the three layers and legend (key) shown [in this app](https://jhowarth.users.earthengine.app/view/sstanomaly).

Please see starter script below.

When you have completed the script, please discuss the results with a partner. Which year presents El Ni&ntilde;o, La Ni&ntilde;a, and 'normal'?  

[Here is some background information on ENSO.](https://www.climate.gov/enso)  

When you have agreed on the answers, please fill out [this form](https://forms.gle/Lg4xBGG31iptscqj6).  

### Starter script  

```js
/*

  TITLE:   Sea surface temperature anomalies
  AUTHOR:  Jeff Howarth  
  DATE:    4/5/2022

  PURPOSE:  (1) Write a function to compute anomalies (differences between a short-term
            and long-term average).

            (2) Infer which year represents El Nino, La Nina, and 'normal'.
*/


// Set up global variables  

var month_start = 1;
var month_end = 2;
var t1 = 2011;
var t2 = 2014;
var t3 = 2016;

// A function to compute anomalies.  

var makeAnomaly = function(t) {

  // Compute long-term record from "NASA/OCEANDATA/MODIS-Aqua/L3SMI"
  // filter by month_start and month_end
  // select 'sst' band



  // Compute short-term record from long-term average
  // by filtering for t year.  



  // Return anomaly as the mean long-term average
  // subtracted from the mean short-term average.   


};

// Apply function to compute anomaly for each year.



// ----------------------
// Configure viz.
// ----------------------

// Load community palettes.

var palettes = require('users/gena/packages:palettes');

// Configure viz parameters.

var sst_viz = {
  min: -5,
  max: 5,
  palette: palettes.cmocean.Balance[7]
};

// Load cart module.

var cart = require('users/jhowarth/eePrimer:modules/cart.js');

// Make a map key.  


// ----------------------
// Compose map  
// ----------------------

// Set base map to 'HYBRID'.



// Center map on -180, 0 at zoom 3.


// Add key and three layers.



```  
