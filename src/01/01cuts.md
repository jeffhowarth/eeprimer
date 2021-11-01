### 4. Inspect image collection  

Now let's inspect the set of values stored in an image collection at a location. Please do the following:  

1. In the right-hand panel, click on the _Inspector_ tab. Your cursor should now appear like a crosshair.  
2. On the map, click a location on the map. You should see _Point_, _Pixels_, and _Object_ information appear in the _Inspector_ panel.  
3. In the _Inspector_ panel, click the carrot (the little arrowhead) next to _Pixels_. This should expand the information. Then click the carrots to expand information for _Lights at night_ and then _Series_.  

You should now see a chart. The chart reports the raster value at the location you clicked for every image and band in the image collection. If you want to make the chart bigger, you can click the icon in the upper right corner of the chart panel. This should open the chart in a new browser tab. Please note that if you hover the cursor above any point on a line in the chart, you will retrieve the data value and time-stamp for that point.     

Please try to answer these questions:  

1. What does each colored line in the chart represent?  
2. What does the y-axis represent?  
3. What does the x-axis represent?  
4. What is the _temporal resolution_ of each image in the collection (what length of time does each image represent)?  
5. What is the _temporal extent_ of the image collection (what is the first and last dates in the image collection)?  
6. Why do you think that the plotted lines occasionally form steep vertical segments perpendicular to the x-axis?      

### 5. Image collection as a layer    

Now that we have inspected the image collection, we can see that it consists of a set of images over time, where each image is composed of four different bands. We should pause here for a moment and ask: which image and which band are we then displaying on the map?  

We told Earth Engine which band to display in our visualization scheme (we defined it with the _band_ key). But we never told Earth Engine which image we should display from the collection. It made this decision for us.    

You should be able to figure out which image Earth Engine displays from an Image Collection by looking at the information in the _Inspector_ panel. Expand the carrot next to _Mosaic_ and look at the data values for each band. Then expand the carrot next to _Series_ and hover your cursor over  points in each plotted line.

1. What image from the collection does the map display as a layer?  
2. How would you describe the position of this image in the stack of images of the collection?  

### 6. Reduce image collection  

Now let's look at how you can ask Earth Engine to display a different layer from the stack. Add the code below to your script and run the script.  

```js
//  Add first image in collection as map layer
Map.addLayer(
  lights.first(),                   //  Draw first image in the 'lights' collection       
  lightsViz,                        //  Name of object with viz parameters
  'Lights at night: first image',   //  Name for layer as a string  
  1,                                //  Visibility of layer
  1);                               //  Opacity of layer
```   

This should add a second layer to your map. Notice that in the arguments for _.addLayer_, we modified the image collection with the _.first()_ method. This tells Earth Engine to _reduce_ the image collection to the first image in the collection.    

Use the _Inspector_ to explore this a little further. With the crosshair cursor, click on a location on the map and look at the information in the Inspector panel and then look at the information under _Pixels_.  

1. How do _Lights at night_ and _Lights at night: first image_ differ as raster datasets?  
2. Why does _Lights at night_ have a _Series_ option but _Lights at night: first image_ does not?  
3. Under _Series_ for _Lights at night_, what point in the chart matches the data values for the _Lights at night: first image_?  

## Filter by time and band      

Now let's get back to writing more code. At this point, you may sense that our image collection suffers from a bit of excess. We constructed "lights" from the entire dataset in the EE catalog. As a result, it is a tall stack of rasters, containing every   but for our analysis, we will only need a subset of the dataset. So our next task is to shorten the stack of rasters.  

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

### 4. Drawing map layers    

Now let's take a moment to explore how Earth Engine draws layers on the map. Try to answer these questions:   

1. Which layer appears to be drawn on the top of the map?   
2. How does the order of the _Map.addLayer_ commands in our script correspond to the order of layers in our map?  

To help answer these questions, trying clicking the _Layers_ button (near top right corner of the map). Look at the sequence of the two layers and turn the visibility of each layer on and off. Note that you can also compare the two layers by changing the opacity with the sliders to the right of each layer name.     

By comparing these two layers, you should notice differences in the appearance of nighttime lights across the world. Some places stay lit, some places stay dark, some places become lit, and some places go dark. Let's work on making a single layer from the image collection that helps us see these kinds of changes over time.  
