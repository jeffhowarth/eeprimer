There are a number of different [Landsat collections](https://developers.google.com/earth-engine/datasets/catalog/landsat){target=_blank} in the Earth Engine Data Catalog. To be able navigate the collection, you should be comfortable with the following lexicon.   

##Missions   

The Landsat program consists of a series of [missions](https://www.usgs.gov/landsat-missions/landsat-satellite-missions){target=_blank}. Each mission deploys one or more sensors on a satellite. Very practically, the mission's name denotes the launch sequence. Landsat 1 launched July 23, 1972. Landsat 9 launched September 27, 2021.  

>Why are there no images from Landsat 6?    


##Sensors  

The sensors onboard the Landsat satellites have steadily aimed to improve upon Norwood's original MSS.  

* __MSS__: Multispectral Scanner  
* __TM__: Thematic Mapper  
* __ETM+__: Enhanced Thematic Mapper  
* __OLI/OLI-2__: Operational Land Imager    
* __TIRS/TIRS-2__: Thermal Infrared Sensor

![Landsat instrument bands](https://landsat.gsfc.nasa.gov/wp-content/uploads/2021/12/all_Landsat_bands.png)

##Collections   

There have been two major reprocessing efforts by USGS to improve data quality. [Collection 2](https://www.usgs.gov/landsat-missions/landsat-collection-2){target=_blank} is the most recent and has the best geolocation accuracy which improves time series analyses.    

##Tiers  

Within a collection, Tier 1 data have the highest radiometric and positional quality. USGS recommends using Tier 1 data for all future time-series analysis.  

##Levels  

Distinguishes the level of data processing applied to products.    

- [__Level-1__](https://www.usgs.gov/landsat-missions/landsat-level-1-processing-details){target=_blank} includes processing to improve locational accuracy of data.  

- [__Level-2__](https://www.usgs.gov/landsat-missions/landsat-collection-2-level-2-science-products){target=_blank} products are built from Level 1, but also provide atmospheric correction to create surface reflectance and surface temperature products. Level-2 science products also include spectral indices derived from surface reflectance products.  

- [__Level-3__](https://www.usgs.gov/landsat-missions/landsat-science-products){target=_blank} products are built from Level-2 products and include Analysis Ready Data (ARD), including Fractional Snow Covered Area and Burned Area, and Scene-based Inputs, including Provisional Actual Evapotranspiration.   

##Sensor measurements

Distinguishes what the pixel values represent.  

- __Raw scenes__: DN (digital number) values represent scaled, calibrated at-sensor radiance.  

- __Top of atmosphere (TOA)__: calibrated top-of-atmosphere reflectance.  

- __Surface reflectance__: atmospherically corrected surface reflectance and land surface temperature.     
