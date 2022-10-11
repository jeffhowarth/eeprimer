![code](../../images/code.png)

# Get zoom level  

By default, the map will always initialize so that you see all of the lower 48 states (plus Puerto Rico) in the map window.  

After panning the map in the last step, you have changed the region of the world displayed on the map. But you have not changed the amount of detail that the map displays.  

In the Map UI, _zoom level_ defines the amount of detail displayed on the map. You can retrieve the zoom level used to display a map with this:   

```js
// Get zoom level of map.  

var zoom = Map.getZoom();
print('Zoom level', zoom);
```  

<details>
<summary><b>Check your understanding:</b></summary>
<br> Use the + and - buttons at the top left of the Map UI and re-run the code snippet to answer these two questions.<br>  
<br>
<li>What zoom level is the most 'zoomed out'?</li>
<br>
<li>What zoom level is the most 'zoomed in'?</li>
</details>
