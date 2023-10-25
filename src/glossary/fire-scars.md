## Key terms         

- **Fire intensity:** intensity of fire while active  
- **Burn severity:** degree to which fire alters an area      

![Fire intensity versus burn severity](https://un-spider.org/sites/default/files/Fire_intensity_vs_burn_severity.jpg)

## Fire scars 

Here are a few examples of false color composites that show fire scars on a landscape.  

<center>

![Woolsey Fire Burn Scar](https://eoimages.gsfc.nasa.gov/images/imagerecords/144000/144277/woolsey_ast_2018322_lrg.jpg)  

[Woolsey Burn Scar]()

![Mendocino Burn Scar](https://eoimages.gsfc.nasa.gov/images/imagerecords/92000/92678/mendocino_complex_v01_48-22-12_lrg.jpg)  

[The Scars of Mendocino](https://earthobservatory.nasa.gov/images/92678/the-scars-of-mendocino){target=_blank}

![Thomas Burn Scar](https://eoimages.gsfc.nasa.gov/images/imagerecords/91000/91466/ventura_oli_2017352_lrg.jpg)

[Thomas Fire Burn Scar](https://earthobservatory.nasa.gov/images/91466/californias-december-inferno){target=_blank}

</center>

## Normalized Burn Rato  

The images above all use data in three bands to show scars with additive color. In order to document a fire scar with a single band, we can compute a **normalized band ratio**.

<center>  

__= Band A - Band B / Band A + Band B__

</center>  

For fire scars, the **normalized burn ratio** works with the NIR and SWIR2 bands for Band A and Band B, respectively.  

<center>  

![Equation](https://un-spider.org/sites/default/files/NBR_formula.jpg)

</center>  

To understand how this works, we need to consider the spectral signatures of health vegetation versus bare ground.  

<center>

![Exploiting spectral signatures](https://un-spider.org/sites/default/files/Spectral_responses.jpg)  

A high NBR indicates healthy vegetation while a low NBR value indicates bare ground and recently burnt areas.   

</center>

## Burn severity  

We can then compare the normalized burn ratio following a fire to the normalized burn ratio of the same season prior to the fire. The difference in the two ratios represents a measure of the __burn severity__.   

<center>  

![dNBR](https://un-spider.org/sites/default/files/dNBR_formula.jpg)  

</center>  

Here is an example for two lightning complex fires in California.    

<center>

![DNBR California 2020](https://eoimages.gsfc.nasa.gov/images/imagerecords/147000/147374/california_oli_2020270_dbnr.jpg)

</center>  

[Assessing California Fire Scars](https://earthobservatory.nasa.gov/images/147374/assessing-california-fire-scars){target=_blank}  

## Severity classes  

Although the real-world impacts of this burn severity index likely varies geographically, the US Geological Survey uses a standard classification scheme to help fire managers compare the impacts of fire across space and over time.   

![Severity classes](https://un-spider.org/sites/default/files/table+legend.PNG)

[_USGS Severity classes_](https://un-spider.org/advisory-support/recommended-practices/recommended-practice-burn-severity/in-detail/normalized-burn-ratio){target=_blank}  
