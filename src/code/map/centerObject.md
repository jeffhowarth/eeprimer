
You can also define your map extent so that the map centers on a geometry object, like a sample point or city center.  

In the example below, I assume you have [a point object](../../code/geometry/constructPointGeometry.md) named 'point'.  

```js
// Center on a point.  

Map.centerObject(point, 4);
```  

<details>
<summary><b>Check your understanding</b></summary>
<br>
If you have the choice, should you center the map before you add a layer, or add a layer before you center the map, or do you think that the sequence really does not matter?
</details>
