A geometry object represents _where_, but not _what_ is where. In other words, geometry objects represent geographic locations, but they do not describe conditions or properties of these locations. For example, you can store the location of a town with a geometry object, but not the town's name, population, area, etc.       

A _feature_ object stores both the geometry _and_ qualitative and/or quantitative properties of a location. Often, you will hear people who are accustomed to geographic information systems use the word _attribute_ rather than property. For our purposes, they are synonymous. Usually, the attributes of features will be defined as part of a data product. But you can also define and alter attributes as necessary with code.  

Earth Engine provides a method to make features by calling ee.Feature(). As arguments (between the parentheses), it takes a geometry object and the attributes. The attributes must be defined as a dictionary with a key and a value. You might think of this like a data table: the key is the column title and the value is the row.

The example below again assumes that you have a [point object](constructPointGeometry.md) named 'point'.  

```js
// Set a property of point.

var point_feature = ee.Feature(point, {name: 'my first point'});

// Print the two different objects to compare.  

print('Point as geometry', point, 'Point as feature', point_feature);
```   

<details>
<summary><b>Check your understanding</b></summary>
<br>
Try to change the name of the feature to 'Gulf of Guinea'. <br>
<br>
What does the statement now say?  
<br>
</details>  
