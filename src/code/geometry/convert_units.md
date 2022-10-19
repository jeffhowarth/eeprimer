By default, Earth Engine often computes spatial measurements in meters. So length returns meters and area returns square meters. (It is good practice to use the docs tab in the code editor to double-check the units returned by your method.)  

You can convert these units into meters through simple math operations of number objects. The example below converts meters to kilometers.   

The snippet below assumes that you have a [line object](constructLineGeometry.md) named 'line'.  

```js
//  Calculate the length of a line object.

var line_length_km = line
  .length()
  .divide(1000)                   
  ;

// Inspect result.  

print('route distance kilometers', line_length_km);

```   

<details>
<summary><b>Check your understanding</b></summary>
<br>
<li>How would you convert meters to miles?<br>
<br>
</details>
