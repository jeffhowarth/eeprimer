A _line_ consists of two or more points.  

When you stretch a string tightly between two points on a globe, you show the _great circle route_. This shows the shortest distance across the globe's surface between the two points.  

Google Earth Engine uses a spheroid model to represent line objects. The resulting lines represent great circle routes, just like if you were working with a string and a globe.  

Earth Engine provides a method to construct line objects from two or more points. You call the method with the phrase ee.Geometry.LineString(). It takes a list of points as an argument.     

```js
// Construct two points.

var point = ee.Geometry.Point([0,0]);
var point2 = ee.Geometry.Point([-90,60]);

// Construct line from two points.

var line = ee.Geometry.LineString([point, point2]);

// Inspect results.

print('Great circle arc', line);

// Display result as a layer on the map.

Map.addLayer(line, {color: 'red'}, 'Great circle line');
```

<details>
<summary><b>Check your understanding</b></summary>
<br>
<li>If this line represents the shortest distance between two points, why does the line bend rather than go straight?</li>
</details>  
