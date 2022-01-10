## Map UI 101  

This lesson briefly introduces the Map UI in the Code Editor. You will learn how to change the base layer and map extent and review foundational concepts of maps, including latitude, longitude, and scale.       

### Base map types  

By default, the Code Editor map will display with the Google road map. You can change the default basemap type like this:

```js
Map.setOptions('HYBRID');
```
You may choose from four base map types:  

* 'ROADMAP'
* 'SATELLITE'
* 'HYBRID'
* 'TERRAIN'

<details>
<summary><b>Check your understanding:</b></summary>
<br>
<li>What object type are the base map types?</li>
</details>  

### Map extent  

Together, a map's center and zoom level define the **map extent**, or the geographic region displayed in the map window.

#### Map center

By default, the Map UI is centered on a point in  Buffalo Valley, OK. You can retrieve the coordinates of a map's center with this:  

```js
var center = Map.getCenter();
print('Center point', center);
```  

<details>
<summary><b>Check your understanding:</b></summary>
<br>
<li>Which number represents latitude and which represents longitude?</li>
<br>
<li>What does it mean if a number is negative?</li>
</details>

#### Map zoom level  
By default, the map zoom level is set so that you can see all of the lower 48 states (plus Puerto Rico) in the map window. You can retrieve the zoom level used to display the map with this:   

```js
var zoom = Map.getZoom();
print('Zoom level', zoom);
```  

<details>
<summary><b>Check your understanding:</b></summary>
<br>
<li>What zoom level is the most 'zoomed out'?</li>
<br>
<li>What zoom level is the most 'zoomed in'?</li>
</details>

### Set center and zoom level  

You can customize the map extent by changing the map center and zoom level like this:   

```js
Map.setCenter(-73.1819, 44.0133, 19);
```  

<details>
<summary><b>Check your understanding:</b></summary>
<br>
<li>What does each parameter represent in this method?</li>
</details>
