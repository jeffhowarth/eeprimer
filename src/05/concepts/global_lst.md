![concepts](../../images/concepts.png)

# Global land surface temperatures  

### Introduction  

This week we will estimate land surface temperature from Landsat imagery and then compare how parts of a region differ from the whole region.  

Our key technical questions this week include:  

- What are _scenes_?  
- What are common _sources_ for image scenes and how do they differ?
- How does a _mosaic_ differ from a _composite_?

Our thematic questions include:  

- What is _land surface temperature_ (LST)?  
- What is a _spatial anomaly_ and how does this differ from the anomalies that we derived last week?  
- How are spatial anomalies related to the principle of _distributive justice_?  

___  

## SOURCES OF SCENES  

___

### Satellites          

To get started, we should first discuss how Landsat 8 imagery differs from MODIS Terra imagery (what we used last week to look at global oceans).  

Try to fill out this table as we discuss the next few sections.  

| SATELLITE             | SPATIAL RESOLUTION  | TEMPORAL RESOLUTION |
| :---:                 | :---:               | :---:               |
| [MODIS TERRA][01]{target=_blank}     |
| [LANDSAT 8][02]{target=_blank}       |
| [SENTINEL 2][03]{target=_blank}      |

[01]: https://terra.nasa.gov/about/terra-instruments/modis){target=_blank}
[02]: https://www.usgs.gov/landsat-missions/landsat-8  
[03]: https://www.esa.int/Applications/Observing_the_Earth/Copernicus/Sentinel-2

The app below will grab the scene from each satellite at the center of the map and then draw _natural color_ composites of each image.  

<iframe
  src="https://jhowarth.users.earthengine.app/view/eeprimer-compare-satellites"
  style="width:95%; height:500px;"
></iframe>

_This [link](https://jhowarth.users.earthengine.app/view/eeprimer-compare-satellites){target=_blank} will open the app in a new browser tab._  

<details>
<summary><b>Check your understanding</b></summary>
<br>
What kinds of questions will Landsat enable us to ask that would be impossible with MODIS? <br>
<br>
</details>  

___

### Where are the satellites at this moment?  

[Here's a map.](https://earthnow.usgs.gov/observer/){target=_blank}

___

### How does Landsat orbit influence scene mosaics?    

The video below animates how Landsat 8 images the entire surface of the planet.  

<iframe width="560" height="315" src="https://www.youtube.com/embed/yPF2jpjB3Qw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<details>
<summary><b>Check your understanding</b></summary>
<br>
How many days may separate two adjacent scenes? <br>
<br>
</details>  
___   

### How does MODIS orbit influence scene mosaics?

The video below animates how [MODIS Aqua](https://modis.gsfc.nasa.gov/about/#:~:text=Terra's%20orbit%20around%20the%20Earth,the%20equator%20in%20the%20afternoon.){target=_blank} images the planet's entire surface.  

<iframe width="560" height="315" src="https://www.youtube.com/embed/d4QLDlAumOc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<details>
<summary><b>Check your understanding</b></summary>
<br>
Why does MODIS imagery often have pointy stripes in equatorial regions? <br>
<br>
</details>  

___

## LAND SURFACE TEMPERATURE (LST)  

___

### Definition  

Please define [land surface temperature (LST)](https://earthobservatory.nasa.gov/global-maps/MOD_LSTD_M){target=_blank} and explain how this differs from air surface temperature?  

___

### LST from Landsat collections        

In this week's problem, we will apply a method to create high-resolution LST images from Landsat image collections that was developed and kindly shared by [Sophia Ermida](https://github.com/sofiaermida).  

___

### LST and land cover  

The app below will help you compare land surface temperatures to land cover for anywhere in the world.

Please work with the app to explore Middlebury, Brooklyn, Seattle, and at least one other location of your choice.

For each, please think through these questions:  

1. At the extent of the scene, how does LST relate to land cover?  
2. At the scale of a city or town, how does LST vary and how is this related to land cover?  
3. What does the _histogram_ tell you about your scene?
4. Why do you need to adjust the min and max display values as your investigation changes location?  
5. Since you are displaying a _divergent color scheme_, how should you aim to set your min and max display values?  

<iframe
  src="https://jhowarth.users.earthengine.app/view/eeprimer-lst-landsat8"
  style="width:95%; height:500px;"
></iframe>

_This [link](https://jhowarth.users.earthengine.app/view/eeprimer-lst-landsat8){target=_blank} will open the app in a new browser tab._    

___

## READING  

___   

In prep for tomorrow, please read [this article](https://www.nytimes.com/interactive/2020/08/24/climate/racism-redlining-cities-global-warming.html?searchResultPosition=1){target=_blank} from The New York Times.
