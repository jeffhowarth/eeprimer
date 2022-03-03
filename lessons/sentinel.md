## Sentinel  

This lesson introduces Sentinel collections that are available through the Earth Engine Data Catalog. After quickly reviewing the various Sentinel missions, we explore how to work with the Sentinel 2 collection. We look briefly at a cloud mask that the EE team provides for this collection and practice altering the EE starter script to customize filters for time and location. Finally, we make a simple global fire explorer that uses MODIS and Sentinel data to investigate fires anywhere in the world at two different scales.   


### Sentinel missions  

The Sentinel program is a [series of missions](https://sentinel.esa.int/web/sentinel/missions) conducted by the European Space Agency and the European Commission Initiative Copernicus.  

In this lesson, we will work with [Sentinel-2](https://sentinel.esa.int/web/sentinel/missions/sentinel-2) data that collects high-resolution multispectral imagery for terrestrial studies. Later in the course, we will work with other Sentinel collections available through the Earth Engine Data Catalog.    

### Basic characteristics of Sentinel-2    

Please try to answer the following questions about Sentinel-2 collections in the Earth Engine Data Catalog:

__Spatial__  

- What are the pixel scale/resolution for spectral bands?    
- What is the regional extent of the collection?  
- Does the collection contain single images or global mosaics?  

__Temporal__  

- When did the mission start and end (temporal extent)?  
- How often do you get a picture of a place (recurrence interval)?  
- What time of day is the picture captured?  
- How long does it take for the picture to get into the earth engine data catalog (latency)?  

__Spectral__   

- How many bands does the image contain?  
- How do they parse the spectrum?  

![Sentinel bands](https://d9-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/styles/full_width/public/thumbnails/image/dmidS2LS7Comparison.png?itok=BQqyWSGJ)  

_Comparison of Landsat 7 and 8 with Sentinel-2._ Source: [USGS](https://www.usgs.gov/centers/eros/science/usgs-eros-archive-sentinel-2-comparison-sentinel-2-and-landsat)  

__Processing history__  
- Are the data raw or processed?  
- If processed, what data products are available?  
- If processed, what criteria or algorithms were applied?  

### Warming up   

Please open up the starter script and answer the following questions:

* What does the cloud mask do?  
* How does the script 'scale' the data?  

Please alter the starter script as follows:  

1. Change the date filter so that you can quickly filter the collection by month and/or year (without defining a 'yyyy-mm-dd' start and end range).  

2. Add a spatial filter so that you can quickly filter the location with a poi (using Geometry tool).

3. Center the map on the poi at zoom level 8.

4. Add a line of code that prints the number of images in the collection returned from a query, along with a label and a list of images.

Please save your script as 'sentinel2_starter.js', or something equivalent.  

### Practice problem  

Please find the script that we wrote on Monday that used MODIS to make a map of fire scars in California in summer 2020. Copy this script, paste it into the sentinel2_starter script, and then save as 'Sentinel_MODIS_Fire_viewer.js' in the lessons folder.    

Please alter the script as follows:  

1. Update the title, purpose, and author of the header.  

2. Enable yourself to filter the two MODIS collections (daiily and 8-day) and the Sentinel collections with the same month and year criteria.  

3. Display both MODIS collections and the Sentinel collection as map layers with the same RGB composite (SWIR2, NIR, and green),  

4. Change the base layer to 'TERRAIN'.  

When you are set, use the MODIS 8-day layer to show the fire scars that are visible in California for October 2020. Then create a point in the middle of a scar and rerun the script to draw the Sentinel layer.   

_What kinds of things can you see with the Sentinel layer that are difficult to see with the MODIS layer?_

Please repeat this for a couple more fire scars in California.  

Finally, please explore elsewhere. For example, change the date filter to March 2020 and look at Australia. Where do you see fire scars in the MODIS layers? Pick a scar and draw a layer with the Sentinel collection for that poi. Discuss what you see with a partner. How do the two images complement each other as evidence for describing environmental change?  

### Code check  

Here is [a script](../scripts/simple_modis_s2_fire_explorer.js) that you can use to check your own work.  
