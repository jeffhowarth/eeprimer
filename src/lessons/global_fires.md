## Introduction       

There is always a fire burning _somewhere_ on the planet. Any day of the year, any time of the day, someplace is on fire.  

- *How do fires differ physically, ecologically, and culturally?*

- *How can satellite imagery help us understand these differences and their relationships to each other?*  

![FIRMS fire map](https://www.earthdata.nasa.gov/s3fs-public/2022-05/FIRMS-fire-map.jpg?VersionId=tvQzN89zIjpktGF.l6HGzylBTJcgG4s_)

- [FIRMS fire map](https://firms.modaps.eosdis.nasa.gov/map/#d:24hrs;@0.0,0.0,3z){target=_blank}  

## Background  

- [spectral signatures](../concepts/spectral_signature.md){target=_blank}
- [additive color](../concepts/additive_color.md){target=_blank}

_Apply: sample spectral signatures of forest and grasslands near Davenport, California: June 1 - August 1, 2020_

## Burn severity   

- **Fire intensity:** intensity of fire while active  
- **Burn severity:** how fire intensity affects the functioning of the ecosystem of the area that has been burnt (degree to which an area has been altered or disrupted by the fire)

![Fire intensity versus burn severity](https://un-spider.org/sites/default/files/Fire_intensity_vs_burn_severity.jpg)

## Burn ratio    

- **Normalized Burn Ratio (NBR):**  a ratio between NIR and SWIR bands. A high NBR indicates healthy vegetation while a low NBR value indicates bare ground and recently burnt areas.   

![Exploiting spectral signatures](https://un-spider.org/sites/default/files/Spectral_responses.jpg)  

![Equation](https://un-spider.org/sites/default/files/NBR_formula.jpg)

*Apply: sample burned and unburned spectral signatures of forests near Davenport Aug 1 - Oct 1, 2020.*  

## Burn Severity

- **Burn severity:** the difference between pre-fire and post-fire NBR. A higher dNBR indicates more severe damage, while negative dNBR may indicate regrowth.  

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
