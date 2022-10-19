
An image collection often contains _stacks_ of images where the images in the collection overlap each other. You can reduce the stack of images to a single image with a statistical operator.  

For example, if you have a stack of images in a collection where each image has bands that record the sea surface temperature and chlorophyll-a concentrations of a region over time, you can compute the _mean_ value of each pixel in each band with the .mean() method.    

```js
// Reduce image collection into an image that represents the mean value for each pixel in the collection.

var output = input.mean();

```

If you explore the EE docs for image collections, you should be able to spot a number of these statistical and math reducers, including:  

- .mean()
- .median()
- .max()  
- .min()  
- .product()  
- .sum()

All of these take an image collection as an input and reduce it to a single image. They also all do this operation for each band of every image.  
