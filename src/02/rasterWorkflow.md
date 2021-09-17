## Introduction  

This chapter builds on our work in the previous chapter [(Raster Foundations)](../01/rasterFoundations.md). Our main goals are to explore methods of filtering, reducing, thresholding, and comparing raster datasets that are often parts of raster workflows. We will also look at a method for visualizing more than one raster at a time through the use of additive color. By the end of the chapter, you will create a new map layer (shown below) that visualizes how nighttime lights changed between 1993, 2003, and 2013.  

![final result screenshot](images/02goal.png)

 By the end of the chapter, you should understand how to:  

 1. filter a collection by attribute and time  
 2. reduce an image collection into an image    
 3. threshold an image by criteria
 4. compare images with logical expressions  
 5. visualize bands with RGB composites  


*BELOW IS STILL VERY ROUGH AND INCOMPLETE - WILL RETURN TO IT AFTER WRAPPING UP PREVIOUS CHAPTER.*  


## Filter image collection   

Looking back at our result from the previous chapter, you can probably see that our image collection suffers from a bit of excess. We constructed "lights" from the entire dataset in the EE catalog, but we only need a subset for our analysis. So our next task is to shorten the stack of rasters.  

To do this, we can **filter** the image collection in two ways:

* by time
* by band name  

This snippet **filters by time** and prints the result to the console:

```js
var lights03 = lights.filter(ee.Filter.calendarRange(2003, 2003, 'year'));
print('Lights 2003', lights03);
```

This calls an image collection's *filter* method and then uses the filter's *calendarRange* method, where the parameters define the range's start, end, and calendar field. In this example, we use the 'year' calendar field because each image in the nighttime lights collection represents an average for the calendar year so there is no reason to define a filter smaller than this. The second line prints a label and metadata to the Console. Inspect the metadata and note that now your image collection contains two images and both are for the year 2003.

This snippet **filters by band name** and prints the result to the console:  

```js
var lights03Select = lights03.select('stable_lights');
print('Nighttime lights 2003 Select', lights03Select);
```

It calls an image collection's *select* method, where the parameter states the band name. Inspect the metadata and note that this image collection only contains one band.

This code did the job, but it could be more concise. We could replicate all the code that we have written thus far with the following:  

```js
var lights03_stable_first = ee.ImageCollection("NOAA/DMSP-OLS/NIGHTTIME_LIGHTS")
  .filter(ee.Filter.calendarRange(2003, 2003, 'year'))
  .select('stable_lights');

print('Lights 2003: concise method', lights03_stable_first);
```

If you inspect the metadata, you should see this image collection is identical to the collection we made earlier. To help understand why, let's review how raster workflows work.  

### Raster workflow elements       

Take a raster, do something to it, get a result. This triad is the basic element of a workflow.

*Input --> method --> output*  

In javascript, you declare ends before means and methods are properties of the input class. The syntax is this:

```js
var output = input.method();
```

Most raster workflows consist of a chain or sequence of these actions. For example, our workflow thus far consists of a sequence of three.

*insert image*

When we first scripted the workflow, we declared a variable for each intermediate result and then used this variable as an input in the next step. In our more concise script, we didn't bother declaring intermediate outputs and simply wrote out the chain of action.

They both work and the more verbose approach allowed us to inspect each intermediate output, which can be helpful when learning how methods work and for trouble-shooting if something goes wrong. As you become familiar with EE methods, however, you may find the concise style more efficient.  












```
