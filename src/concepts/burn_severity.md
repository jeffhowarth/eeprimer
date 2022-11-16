## Introduction       

- **Fire intensity:** intensity of fire while active  
- **Burn severity:** how fire intensity affects ecological functions of the burnt area (degree to which fire alters an area)    

![Fire intensity versus burn severity](https://un-spider.org/sites/default/files/Fire_intensity_vs_burn_severity.jpg)

## Burn ratio    

- **Normalized Burn Ratio (NBR):**  ratio between NIR and SWIR bands. A high NBR indicates healthy vegetation while a low NBR value indicates bare ground and recently burnt areas.   

![Exploiting spectral signatures](https://un-spider.org/sites/default/files/Spectral_responses.jpg)  

![Equation](https://un-spider.org/sites/default/files/NBR_formula.jpg)

*Sample burned and unburned spectral signatures of forests near Davenport Aug 1 - Oct 1, 2020 and calculate burn ratios.*  

## Severity classes  

- **Burn severity:** difference between pre-fire and post-fire NBR. A higher dNBR indicates more severe damage, while negative dNBR may indicate regrowth.  

![dNBR](https://un-spider.org/sites/default/files/dNBR_formula.jpg)  

- **Severity level:** USGS thresholds for assigning severity classes.

![Severity classes](https://un-spider.org/sites/default/files/table+legend.PNG)

## Spectral indices  

The Burn Severity Index is only one example of a _spectral index_ based on the ratio of two or more bands. These are very powerful tools in remote sensing.   

- Here is [a curated list](https://awesome-ee-spectral-indices.readthedocs.io/en/latest/list.html){target=_blank}  

- The [awesome spectral indices](https://github.com/awesome-spectral-indices/spectral){target=_blank} module can be a helpful tool for finding and implementing these indices with ee.  

## Sources  

- [un-spider.org](https://un-spider.org/advisory-support/recommended-practices/recommended-practice-burn-severity/in-detail/normalized-burn-ratio)

- [EO article](https://earthobservatory.nasa.gov/images/147374/assessing-california-fire-scars){target=_blank}  
