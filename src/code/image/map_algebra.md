
When two or more rasters have the same cell size, extent, orientation, and anchor (in other words, when the cells of two rasters align), you can perform algebra with the values in each cell.

For example, a simple algebraic expression is: A * B = C. In _map algebra_, A and B are raster layers and the product C is also a raster layer. Again, the idea is that the computer calculates A * B = C for every location in the raster, always comparing the same cell location between the two input rasters and storing the product in the corresponding cell of the output raster.      


```js

// Multiply value at each location for two images

var raster_C = raster_A.multiply(raster_B);

```

The table below lists some of the common algebraic operators.

<center>

| Math operator             | Method        |
| :---:                     | :---:         |
| *                         | .multiply()   |  
| /                         | .divide()     |  
| +                         | .add()        |  
| -                         | .subtract()   |  

</center>

Each of these operators can take either another raster or a constant as an argument. When the argument is another raster, the operator compares the values of each cell between two rasters. When the argument is a constant, the operator _scales_ every value by the constant. This is common when converting between units of measurement.  

Map algebra can also be performed with logical operators. The two most common examples are intersection (and) and union (or). The table below shows the methods for each.  

<center>

| Logical operator          | Method        |
| :---:                     | :---:         |
| Intersection              | .and()        |  
| Union                     | .or()      |  

</center>

The output for logical comparisons is a binary raster, where the value 1 identifies where the expression is true and 0 where it is false.
