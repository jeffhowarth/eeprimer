
If you only need to work with a subset of bands from an image (or from every image in an image collection), it is good practice to _select_ the bands early in your workflow. This lightens the load of your computation, which can help reduce your carbon footprint and save you time.  

Use the .select() method with the band name as an argument.  

```js

// Select band from an image (or image collection)

var output = input.select('band_name');

```

To select more than one band from the image, use a list of strings as the argument.

```js

// Select multiple bands from an image (or image collection)

var output = input.select(['first_band_name', 'second_band_name']);

```

It is often helpful to rename a band after you have selected it. This is not required. It can just be helpful, because the default names for bands are sometimes a bit weird and it can be nice to give them names that are more friendly and intuitive.

To give your selected bands new names, add a second argument to the .select() method that defines the new names of the bands. The length of this second argument must match the length of the first. In other words, you need to provide one new name for each band.  

```js

// Select multiple bands from an image (or image collection)

var output = input.select(['first_band_name', 'second_band_name'], ['first_band_new_name', 'second_band_new_name']);

```
