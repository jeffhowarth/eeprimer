While you can create geometry objects with the _drawing_ buttons in the upper-left of the Map user interface, you can also create them with code.   

Earth Engine provides a method to make a point from coordinates (x,y). You call the method with the phrase ee.Geometry.Point(). Then you tell it the coordinates in the parentheses. To work, the coordinates need to be in the form of a list.  



```js
// Construct new point geometry object.  

var point = ee.Geometry.Point([0,0]);

// Inspect the result.

print('Point object', point);
```

<details>
<summary><b>Check your understanding</b></summary>
<br>
<li>Which number represents the Prime Meridian</li>  
<br>  
<li>Which number represents the Equator?
</details>  
