![code](../../images/code.png)    

# Calculate length   

Geometry objects have implicit spatial properties, like length, area, center, etc. Earth Engine provides methods to calculate these for each geometry class. For example, the method .length() calculates the length of a line (or 'LineString') object. To call the method, you append .length() to the variable that stores the line object.  

The snippet below assumes that you have a [line object](constructLineGeometry.md) named 'line'.  

```js
//  Calculate the length of a line object.

var line_length = line
  .length()                   
  ;

// Inspect result.  

print('route distance', line_length);

```   

<details>
<summary><b>Check your understanding</b></summary>
<br>
<li>What statement would you write to find the center of the line?<br>
<br>
<i>Hint: use the Docs tab to look for a method associated with ee.Geometry.LineString that sounds like it would calculate the center of the line.</i>
<br>
</details>
