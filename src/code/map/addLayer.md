
If you have one or more point, line, or polygon objects stored as a variable, you can display the variable on the Map UI as a _layer_. The layer metaphor goes back to the days when people would place a mylar sheet on top of a reference map and then draw shapes on the mylar. Thus the reference map was the _base layer_ and each mylar sheet put on top of it was a _thematic layer_. Even though we don't use mylar anymore, the map layer metaphor is helpful as a conceptual device.   

In the example below, I assume you have [a point object](../geometry/constructPointGeometry.md) named 'point'.  

```js
Map.addLayer(
  point,                  // Geometry object to show on the map.  
  {color:'blue'},         // Color to display the objects.  
  'My first point'        // A label for the layer that will appear in the label panel.
);
```

_Please note: If you don't seen the point on your map, it may be because it is not in your current map extent. So you will need to zoom out and pan around to find it._  

<details>
<summary><b>Check your understanding</b></summary>
<br>
<li>How would you change the display so that the point appears red?
</details>
