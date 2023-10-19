This section contains a set of starter scripts for working with different satellite products in Earth Engine. The scripts include the following:  

* a function to apply scale and offsets;
* a function to  mask clouds;  
* a chain to process a collection with a number of common ingredients, including location, date, and image property;
* the chain also maps the scaling and cloud mask functions across images in the collection and reduces the collection to an image;
* viz parameters for a natural color composite;
* a statement to add the output as a layer on the map.  

The link at the top of the page will open the script in the Code Editor. Alternatively, you can copy and paste the script from the page. 

The point of interest (poi) in the scripts marks Mount Kilimanjaro in Tanzania. This variable is called "geometry". This should allow you to comment out the line, choose a different poi with the drawing tools, and rerun the script to observe a different part of the world. 
