Most images in the earth engine data catalog include a quality control band that describes the degree to which each pixel in the image may be affected by clouds.  

The 'image_tools' module that I wrote includes custom functions that you can call to use the band information and mask pixels that are affected by clouds directly or indirectly (the shadows that clouds cast). This can be helpful for generating cloud-free images for visualization purposes.  

To use these tools, first load the module and then map the appropriate function over every image in the collection. The snippet below provides general examples. In the examples, the 'input' variable is an image collection. The output will also be an image collection.  

```js

// Load image_tools module to access cloud masks.

var tools = require("users/jhowarth/eePrimer:modules/image_tools.js");

// Apply cloud mask to every image in a MODIS collection.

var output = input.map(tools.cloudMask_MODIS);

// Apply cloud mask to every image in a Sentinel 2 collection.  

var output = input.map(tools.cloudMask_S2);


```
