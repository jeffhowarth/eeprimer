##Introduction  

You should learn and employ strategies to self-check your work while you are working on a solution. This involves making requests to visualize a method's output and either checking the result with known benchmarks or critically thinking: does this look right?  

##Print image to console  

For images, you can print information to the Console. This will confirm that the output is an image and describe the list of bands that it contains. For each band, you can also inspect the data type. A binary image should only contain integers of the set [0, 1]. A nominal image (that represents categories or names of things) should also only contain integers, but of a larger set. A quantitative image (that represents continuous values with  decimal numbers) will likely be a _double_ data type.     

```js
// Self check image output by printing to Console.  

print(
  'Self check image output',      // Label to print in Console.
  image_output                    // Name of image output to check.  
  )
;

```
##Print min and max values of image to console

Another good strategy is to print the minimum and maximum values of an image for a study region. To do this, you need to apply the reduce region method to the image that you can nest as an argument to a print statement.   

```js
// print min and max values of image with study region.

print(
  'image output min and max',
  image_output.reduceRegion(
    {
      reducer: ee.Reducer.minMax(),         // The reducer for min and max values.
      geometry: study_region,               // A feature collection or geometry that defines your study site.
      scale: __,                            // The scale of image output.
      maxPixels: 1e12,                      // The maximum number of pixels to use in the computation.
      tileScale: 2                          // You can use two (2) to help if run quickly.
    }
  )
);

```

Please note that this computation can be intensive and slow down your script, so after you have run the script to check your work, you should comment out the lines to avoid running them repetitively when you no longer need the information.

##Add the image as a grayscale layer to the map  

You can quickly add the image as a grayscale layer to the map. A grayscale will display the data values on a gradient from black to white with black for the lowest value and white for the greatest value. To do this quickly, you can run the code below.    

```js
// Add image as a grayscale layer to map for a quick peak.  

Map.addLayer(image_output, {min: __, max: __}, 'Image output check', 0);

```

Please note that you will need to enter the min and max values for the image. The previous code block above is a good way to get this information quickly. If you do not specify the min and max data values to display, the layer will likely have very poor contrast (because the min and max will be defined by the image data type, which is usually a much greater range than that populated with data values). Also note that the default palette is ['black', 'white'], so you do not need to specify a palette to produce a grayscale image.
