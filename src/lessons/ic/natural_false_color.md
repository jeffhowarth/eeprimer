##Introduction  

In this lesson, you will construct natural and false color composites with the [Landsat 5 collection](https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_LT05_C02_T1_L2){target=_blank}.  

Before you get started, please write down the [descriptions](https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_LT05_C02_T1_L2#bands){target=_blank} for the first six bands of images in this collection.       

##Concepts     

- [Band and Image](../../concepts/bands_image.md)  
- [Contrast enhancement](../../concepts/contrast_enhancement.md)
- [RGB composites](../../concepts/rgb_composites.md)  
- [Additive color](../../concepts/additive_color.md)  

##App  

Please use this app for the activities described below. It may be helpful to open the app in a new browser tab with this [link](https://jhowarth.users.earthengine.app/view/ee-edu-eefa-f11-02){target=_blank}.  

<iframe
  src="https://jhowarth.users.earthengine.app/view/ee-edu-eefa-f11-02"
  style="width:910px; height:605px;"
></iframe>


##Construct a natural color composite   

With the app below, please load an image and then do the following:  

1. Select the 'SR_B3' band for the red channel and enhance the contrast.
2. Select the 'SR_B2' band for the green channel and enhance the contrast.
3. Select the 'SR_B1' band for the blue channel and enhance the contrast.  
4. Click the **Add RGB composite** button.  

>Why does the resulting image look like a 'natural' image?  

##Construct a (NIR) false color composite.  

Repeat the steps, but this time use:  

1. 'SR_B4' for the red channel,
2. 'SR_B3' for the green channel,
3. 'SR_B2' for the blue channel.

Then click the **Add RGB composite** button.   

>Why does the resulting image look different?  

Zoom into the map and **click a location to chart** the pixel values in each band.

>Why does a location look bright red?  
>What land cover does this represent?  

>Why does a location look white?   
>What land cover does this represent?  

##Construct a (SWIR) false color composite.  

Repeat the steps, but this time use:  

1. 'SR_B5' for the red channel,
2. 'SR_B4' for the green channel,
3. 'SR_B2' for the blue channel.

Then click the **Add RGB composite** button.   

>Why does the resulting image look different?  

Zoom into the map and **click a location to chart** the pixel values in each band.  

>Why does a location look bright green?  
>What land cover does this represent?  

>Why does a location look magenta?  
>What land cover does this represent?   

>What does a location look bright blue?  
>What land cover does this represent?  
