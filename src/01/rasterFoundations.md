## Introduction  

This chapter introduces raster datasets and how to work with them in Earth Engine.  We will use the [Earth Engine Code Editor](https://developers.google.com/earth-engine/guides/playground) to work with a global dataset of [Nighttime Lights](https://eogdata.mines.edu/products/dmsp/) and make a new map layer (shown below) that symbolizes changes in nighttime lights between 1993, 2003, and 2013.

![final result screenshot](images/jh0101.png)

 By the end of the chapter, you should understand how to:  

 1. construct an image collection from an address in the Earth Engine data catalog  
 2. filter the image collection by time and band name  
 3. visualize an image collection as a layer  
 4. reduce an image collection into an image  
 5. threshold image by criteria  
 6. compare images with logical expressions  
 7. visualize bands with RGB composites  

## Construct image collection    

To get started, use the Code Editor to construct an image collection from the EE [data catalog](https://developers.google.com/earth-engine/datasets) and then print the result to the Console panel. You can give the image collection any name you would like. Below, I call it 'lights'.  

Copy or type the following code into the Code Editor and then run the script.

```js
var lights = ee.ImageCollection("NOAA/DMSP-OLS/NIGHTTIME_LIGHTS");
print("Lights at night dataset", lights);
```

In the Console panel, explore the **metadata** (data about data) for the image collection and take note of the following:

* The image collection consists of a set of **images** (listed as features of the image collection).  
* The image collection and each image have **properties** (some of which are human readable and some of which seem intended for a computer).
* Each image consists of a set of **bands** (the names of which are a little cryptic, but you can follow the **provider_url** in the image collection properties to find descriptions of them).

If this architecture is new to you, the next section reviews how the **raster data model** works as a general template for storing spatial information.   

### Raster data model         

The raster data model represents spatial information as an array of values. The position of a value in the array represents location. Each value represents an attribute of the location.  

![raster scheme](images/rasterScheme-01.png)

The illustration above shows two versions of a raster for a small portion of the nighttimes lights dataset near Belem, Brasil. The left-side shows how the computer encodes the data and the right-side shows a scheme that is a bit more readable. On the left, the array holds 8 bit unsigned integers. This **data type** uses eight binary numbers to represent integers between 0 and 255. The  scheme on the right shows a grid with four columns and five rows. Each cell in the grid is called a **pixel** (short for "picture element").   

As you can see, the raster template stores one value for each location. How then does the nighttime lights dataset store multiple values for each location? For example, it contains both the brightness of nighttime lights and the cloudiness of the nighttime sky for every location. Similarly, how does the dataset store values for more than one observation in time, making it possible to investigate change over time?

The solution is two-part: use more than one raster and use a hierarchy to organize them. This is where bands and image collections come in.

###  Earth Engine's raster system

*insert image*

The figure above illustrates EE's raster system that we glimpsed earlier in the nighttime lights metadata:  

* The image collection consists of a set of images.
* Each image in the image collection represents conditions for a different time observation.
* Each band in an image represents a different type of condition.

## Filter image collection   

Now that we have explored this basic architecture, we can recognize that our image collection suffers from a bit of excess.  We constructed "lights" from the entire dataset in the EE catalog, but we only need a subset for our analysis. So our next task is to make the stack of rasters much shorter and more efficient to work with.  

To do this, we will **filter** the image collection in two ways:

* by a **time window** defined by a start and end date  
* by a **band name**   

```js
var lights1993 = lights.filterDate('1993-01-01', '1994-01-01');
print('Lights 1993', lights1993);

var lights1993Select = lights1993.select('stable_lights');
print('Lights 1993 Select', lightsSelect);
```

Inspect the metadata under 'Lights 1993'. Notice that now your image collection only contains one image and it is for the year 1993. Then inspect the metadata under 'Lights 1993 Select' and notice that this image collection only contains one band.

This code did the job, but it could be more concise. You could substitute all the code you have written thus far with the following:  

```js
var lit1993 = ee.ImageCollection("NOAA/DMSP-OLS/NIGHTTIME_LIGHTS")
  .filterDate('1993-01-01', '1994-01-01')
  .select('stable_lights');

print('Lights 1993: concise method', lit1993);
```

If you inspect the metadata, you should see this image collection is identical to the "lights1993Select" collection. To help understand why, let's review how raster workflows work.  

### Raster workflow elements       

Take a raster, do something to it, get a result. This triad is the basic element of a workflow.

*Input --> method --> output*  

In javascript, you declare ends before means. The syntax is this:

```js
var output = input.method();
```

Most raster workflows consist of a chain or sequence of these actions. For example, our workflow thus far consists of a sequence of three.

*insert image*

When we first scripted the workflow, we declared a variable for each intermediate result and then used this variable as an input in the next step. In our more concise script, we didn't bother declaring intermediate outputs and simply wrote out the chain of action.

They both work and the more verbose approach allowed us to inspect each intermediate output, which can be helpful when learning how methods work and for trouble-shooting if something goes wrong. As you become familiar with EE methods, however, you may find the concise style more efficient.  

## Visualize as map layer  

So far, we have only inspected our image collections's metadata by printing to the console panel. In this step, we will visualize raster data in the collection on a map. This involves working with methods that affect the appearance of the Map user interface (UI).   

### Customize Map    

To warm up, we can change the basemap. By default, the Map shows the familiar Google road map. You can change this manually with the buttons in the upper right corner of the map window, but it will revert to road map whenever you rerun your code. Alternatively, you can script a particular basemap to display on the Map.   

```js
Map.setOptions('HYBRID');
```
Now whenever we re-run our script, the Map will display the hybrid basemap.

Next, we can become familiar with the Map's geographic framework. Try querying a location with this routine:   

1. Click on the "Inspector" tab (top-right) --> *cursor becomes a crosshair*  
2. Click anywhere on the map** --> *prints lon, lat, zoom, and scale to inspector panel*

If you are used to thinking about latitude and longitude in that order, you should note that the order shown in the inspector panel is opposite of this, following the "x,y" convention of coordinates. As a geographic coordinate, longitude is plotted along the x-axis and latitude on the y-axis, which is counter intuitive for many people. Also note that positive longitudes are east of Greenwich, England and negative are west. Positive latitudes are north of the equator and negatives are south.

*insert image*  

Zoom level describes the scale of the map. Small zoom levels show small scale maps. When you increase the zoom level, you increase the map scale. Similarly, when you click on the + button, you increase the zoom level. This has the illusion of bringing the map closer to you, or of zooming in. It is sometimes not intuitive to think that large scale maps show smaller regions than small scale maps. It may be helpful to equate scale with detail rather than area. In the Inspector panel, the scale value reports the approximate distance on the ground at the equator that is represented by a single pixel. Increasing the zoom level decreases this distance and this increases detail.  

*insert image*

By default, the Map centers on a point in eastern Kansas in the American Midwest at a zoom level of 4. Often, you will be interested in a scale and extent that differs from this. You can change the map extent manually by using the pan and zoom buttons in the upper left of the map window, but again the Map will return to the default extent whenever you re-run your code. Alternatively, your script can customize the map extent. For example, the line below centers the Map on the Korean Peninsula with a zoom level that shows eastern China and southern Japan.

```js
Map.setCenter(125, 35, 6);
```

Again, note that you can chain these operations in a single line to define a set of actions.  

```js
Map.setOptions('HYRBID').setCenter(125, 35, 6);
```

### Add a layer  

You can display raster values from an image collection as a **layer** on the Map. For the most part, EE handles how the raster pixels get plotted to geographic locations, so we don't need to be too concerned about how that works for now. However, we will need to define how **visual variables** map to raster values.  

*insert image*

*TO BE CONTINUED...*
