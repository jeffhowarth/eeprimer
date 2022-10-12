![apply](../../images/apply.png)   

# Starter script     

Please try to complete this script and submit a link to your code in this [DROPBOX](https://docs.google.com/forms/d/e/1FAIpQLSentt6e0L3Fxro_MLaIhH2dBBBt0PTY686c1_1nAqVuZkgHZg/viewform?usp=sf_link){target=_blank} by the end of class.

If you have worked until the end of lab and have not finished the script, please still submit a link to your script to the dropbox and try to complete the script before lecture tomorrow.  

```js

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// TITLE:        week_05_practice_problem.js
// NAME:         Jeff Howarth
// DATE:         10/12/22
// PURPOSE:      Explore sst and chlorophyll-a of global oceans.
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// ------------------------------------------------------------------------
// 1. BATHYMETRY
// ------------------------------------------------------------------------

// Load bathymetry dataset from 'NOAA/NGDC/ETOPO1' and select for 'bedrock' band.



// Create a land mask.



// Load the community palette module.



// Select a community palette.
// Please use cmocean.Deep[7].
// Please be sure deeper is darker colors and shallower elevations are lighter colors.



// Config viz parameters. Stretch color palette over -5000 - 0 data values.



// Add layer to map with land mask.



// // ------------------------------------------------------------------------
// // 2. OCEAN WATER
// // ------------------------------------------------------------------------

// Load 'NASA/OCEANDATA/MODIS-Terra/L3SMI'. Select 'sst' and 'chlor_a' bands.



// Inspect first record and print size (number of images) of collection.



// To filter image collection by calendarRange to make long term record.
// 1. Define variables to make August and November the start and end months.



// 2. Define 2000 and 2020 as start and end years for long term record.



// 3. Filter by calendar range and call the startYear, endYear, startMonth, and endMonth variables defined above.



// Reduce image collection into an image that represents the long term average (average value for each pixel).



// Select community palette for sst. Please use colorbrewer.Spectral[11].
// Please make sure cool to warm colors map to cool to warm temperatures.



// Define vis parameters for sst. Stretch palette from 10 to 30 data values.



// Draw layer of sst long term average with land mask.



// Select community palette for chorophyll-a.
// Please use only the first six colors of niccoli.linearl[7].



// Define vis parameters for chlorophyl. Stretch values from 0 to 1 data values.



// Draw chlorophyll-a layer with land mask.



// ------------------------------------------------------------------------
// 3. ANOMALIES
// ------------------------------------------------------------------------

// Define 2017 as the target year (or short term record).



// Filter for the target year (defined above).



// Inspect results.



// Take the mean of the target and subtract the mean of the long term record.



// Select community palette for sst anomaly.
// Please use colorbrewer.RdBu[9].
// Please be sure cooler to warmer colors match cooler to warmer temperatures.



// Define viz parameters. Stretch palette from -2 to 2 data values.



// Select community palette for chlorophyll-a anomaly.



// Define viz parameters. Stretch palette from -0.1 to 0.1.



// Add anomaly layers to map.



```
