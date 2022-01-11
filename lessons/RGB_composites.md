## RGB composites    

_Adapted from: 'Exploring images' by J. Howarth in 'Cloud-based Remote Sensing with Google Earth Engine'. Edited by J. Cardille, N. Clinton, M. Crowley, D. Saah. Springer. Summer 2022._

In this lesson, we explore additive color as a method to visualize three different bands in a single composite layer. We then compare different kinds of composites for satellite bands that measure visible and non-visible portions of the electromagnetic spectrum.

![RGB composite](images/rgb_composites.png)
<br>
_Figure 1. SWIR false-color composite._

### Landsat 5 TM bands
<br>

![landsat 5 bands](https://d9-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/thumbnails/image/MSS-thru-L9-wavelengths.jpg)

_Figure 2. In the Earth Engine data catalog, the USGS Landsat 5 Level 2, Collection 2, Tier 1 collection was collected by the Thematic Mapper (TM) instrument._

### Additive color
<br>

![additive color](images/additive_color.png)

_Figure 3. RGB composites. Red, green, and blue combine to make magenta, cyan, yellow, white, or black. The sequence of bands passed to composite assigns primary colors (first, second, third = Red, Green, Blue). Pixel values in each band determine color tint and intensity._


### Natural color composite  

```js
// Add a natural color layer by using the first three sensor bands for RGB.
Map.addLayer(
    first_image,
    {
      bands: ['SR_B3', 'SR_B2', 'SR_B1'],
      min: 8000,
      max: 17000
    },
    'Natural Color');  
```

<details>
<summary><b>Check your understanding.</b></summary>
<br>
Why does a <b>natural color</b> composite look like the world we would see from an airplane or drone?
</details>  

### NIR false-color composite

```js
// Add a NIR false-color layer using NIR, red, green sensor bands for RGB.
Map.addLayer(
    first_image.select('SR_B4', 'SR_B3', 'SR_B2'),
    {
      min: 8000,
      max: 17000
    },
    'NIR false-color');
```
<details>
<summary><b>Check your understanding.</b></summary>
<br>
<li>Activate the <b>Inspector</b> panel, click on a location that appears bright red, and then look at the pixel values for each band. Why does the location appear bright red? </li><br>
<li>Click on water that appears black and compare the pixel values for that location to a place where the water appears whiter and tinted with cyan. How do the pixel values at these locations compare to the additive color chart above?     
</details>  

### SWIR false-color composite  

```js
// Add a NIR false-color layer using NIR, red, green sensor bands for RGB.
Map.addLayer(
    first_image.select('SR_B4', 'SR_B3', 'SR_B2'),
    {
      min: 8000,
      max: 17000
    },
    'NIR false-color');
```

<details>
<summary><b>Check your understanding.</b></summary>
<br>
<li>Why do some locations appear bright green or cyan or reddish? How do the pixel values at these locations compare to the additive color chart above?    
</details>  
