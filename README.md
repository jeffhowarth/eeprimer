## Earth Engine Primer  

These are materials that I have developed for teaching with Google Earth Engine at a small, undergraduate, liberal arts college in Vermont, USA.  

The TOC shows the sequence that I use in an introductory geography course (Geography 150: Mapping global environmental change).

_Please note: I keep test problems in private repositories. Please contact me if you are an instructor who would like access to them._    

### Table of contents  

| Title | Lesson Type | Description |
| :--- | :--- | :--- |
| [javaScript 101](lessons/javaScript101.md) | Tutorial | This lesson provides a brief introduction to key terms, syntax, and methods for writing JavaScript with the Earth Engine Code Editor. It is adapted from a tutorial by [Dave Thau](https://www.worldwildlife.org/experts/dave-thau). |
| [Map UI 101](lessons/mapUI101.md) | Tutorial | This lesson briefly introduces the Map UI in the Code Editor. You will learn how to change the base layer and map extent and review foundational concepts of maps, including latitude, longitude, and scale. |
| [Great circles](lessons/greatCircles.md) | Tutorial | In this lesson, we learn how to construct point and lineString objects with the Code Editor and discuss geometric distortions that are caused by the Map UI's projection. |
| [Tissot's indicatrix](lessons/tissot.md) | Tutorial | This lesson shows you how to draw Tissot's indicatrix with the Code Editor to visualize geometric distortions caused by the Mercator projection. In the process, we will also learn how to efficiently apply a function over a large collection of objects. |  
| [Earth Observatory stories](readings/earth_observatory.md) | Reading | This reading assignment encourages you to explore how remote sensing techniques can be applied to describe environmental conditions and changes across the planet. |  
| [Spectral signature scavenger hunt](activities/spectral_signatures.md)| Activity | This activity introduces you to remote sensing, EMR, and spectral signatures. |
| [Image bands](lessons/image_bands.md) | Tutorial | In this lesson, we explore how to inspect and visualize data stored in image bands. |
| [RGB composites](lessons/RGB_composites.md) | Tutorial | In this lesson, we explore additive color as a method to visualize three different bands in a single composite layer. We then compare different kinds of composites for satellite bands that measure visible and non-visible portions of the electromagnetic spectrum. |
| [RGB change composite](lessons/RGB_nighttime_lights.md) | Tutorial | In this lesson, we create a multi-band image for three slices of time and then visualize change with additive color. |
| [Interpreting changes in nighttime lights](readings/rgbLights/lights.md) | Reading | Short interpretations of types of changes that are visible from the RGB change composite. |
| [Image collection](lessons/image_collections_L8.md) | Tutorial | In this lesson, we investigate how to work with image collections in Earth Engine. You learn how to load an image collection, select the first image in the stack, and filter the collection by time and location. We use the Landsat 8 collection to demonstrate these methods. You see how many days it takes the satellite to image our planet's entire surface and how many times the same location has been imaged over the satellite's mission. We also learn how to reduce an image collection to an image with local operations. |
| [Data comparisons](lessons/comparingDatasets.md) | Tutorial | In this lesson, we begin by exploring an earth engine app to visually compare sensors mounted on three different satellites (Terra, Landsat 8, and Sentinel 2). This helps us see differences in pixel resolution, geographic extent, and the ability to filter a collection by attributes (like how cloudy the image appears). We then write a script to compose a map with layers from each satellite demonstrated by the app. This establishes a basic workflow for working with earth engine datasets: load, inspect, filter, reduce, scale, and visualize. By implementing this workflow for three different datasets in the same script, you learn strategies for making your code more efficient, less redundant, and easier to update.  |
| [Geographies of green blocks](lessons/ratio_and_zonal.md) | Tutorial | In this lesson, you first learn how to compute a BAND RATIO as the normalized difference of two image bands. You use a Sentinel 2 image to compute NDVI and display the results as a map layer with a PALETTE. You then learn how to summarize this continuous data within discrete regions to derive a ZONAL STATISTIC. In order to display the summarized data as a choropleth map (using color to symbolize values of regions), you CONVERT VECTOR TO RASTER and then display the rasterized image. Finally, you construct and place a GRADIENT LEGEND on the map. |
