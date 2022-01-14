## Earth Engine Primer  

This repo contains materials I have developed for teaching with Google Earth Engine. I teach undergraduate students at a small, private liberal arts college in Vermont, USA. The TOC shows the sequence that I use in an introductory geography course (Geography 150: Mapping global environmental change).

_Please note: I keep test problems in private repositories. Please contact me if you are an instructor who would like access to them._    

### Table of contents  

| Title | Lesson Type | Description |
| :--- | :--- | :--- |
| [javaScript 101](lessons/javaScript101.md) | Tutorial | This lesson briefly introduces how to write JavaScript with the Code Editor, based on a tutorial by Dave Thau. |
| [Map UI 101](lessons/mapUI101.js) | Tutorial | This lesson briefly introduces the Map UI in the Code Editor. You will learn how to change the base layer and map extent and review foundational concepts of maps, including latitude, longitude, and scale. |
| [Great circles](greatCircles.md) | Tutorial | In this lesson, we learn how to construct point and lineString objects with the Code Editor and discuss geometric distortions that are caused by the Map UI's projection. |
| [Tissot's indicatrix](tissot.md) | Tutorial | This lesson shows you how to draw Tissot's indicatrix with the Code Editor to visualize geometric distortions caused by the Mercator projection. In the process, we will also learn how to efficiently apply a function over a large collection of objects. |
| [Image bands](lessons/image_bands.md) | Tutorial | In this lesson, we explore how to inspect and visualize data stored in image bands. |
| [RGB composites](lessons/RGB_composites.md) | Tutorial | In this lesson, we explore additive color as a method to visualize three different bands in a single composite layer. We then compare different kinds of composites for satellite bands that measure visible and non-visible portions of the electromagnetic spectrum. |
| [RGB change composite](lessons/RGB_nighttime_lights.md) | Tutorial | In this lesson, we create a multi-band image for three slices of time and then visualize change with additive color. |
| [Interpreting changes in nighttime lights](readings/rgbLights/lights.md) | Reading | Short interpretations of types of changes that are visible from the RGB change composite. |
| [Image collection](lessons/image_collections_L8.md) | Tutorial | In this lesson, we investigate how to work with image collections in Earth Engine. You learn how to load an image collection, select the first image in the stack, and filter the collection by time and location. We use the Landsat 8 collection to demonstrate these methods. You see how many days it takes the satellite to image our planet's entire surface and how many times the same location has been imaged over the satellite's mission. We also learn how to reduce an image collection to an image with local operations. |
| [Earth Observatory stories](readings/earth_observatory.md) | Reading | This reading assignment encourages you to explore how remote sensing techniques can be applied to describe environmental conditions and changes across the planet. |
