## Introduction    

*Please note: this is a rough, incomplete draft. I may develop an app for this rather than having students use the code editor.*

The shape of the Earth can be idealized as an ellipsoid, or something that resembles a ball that is just a little bit wider than tall. To display a map of the Earth on a computer screen, we must use a system that can 'map' locations from this three-dimensional shape to the two-dimensional surface of a computer monitor. Inevitably, this stretches space in some parts of the map and distorts some spatial properties, like distance and area.

In this chapter, we will explore how the Map User Interface (UI) in Earth Engine's [Code Editor](https://developers.google.com/earth-engine/guides/playground) uses a geographic coordinate system, a map projection, and scale to display geographic information on flat displays. We will also visualize the spatial distortions that this cartographic system creates.

By the end of the chapter, you should understand how to:  

 1. change the scale, extent, and basemap of the Map UI
 2. create point, line, and polygon geometries  
 3. explain why the Map UI distorts distance, area, and shape of geometries

## Map User Interface  

### Base layer  

When you start the Code Editor, the Map UI displays Google's familiar road map as the **base layer**. It will always be drawn first. If we add other layers to the map, the base layer will always appear on the bottom of the stack.  

Google's road map was designed to help people navigate transportation networks. Like any good map design, it does not clutter the map display with information that does not directly support the map's purpose. So it does not provide many details about land cover, settlement patterns, geomorphology, or other attributes of the Earth's surface that you might actually want to investigate with Earth Engine. Consequently, you may find it helpful to change the base layer to a satellite image or a shaded relief map.  

*Use the buttons in the upper right corner of the map window to manually select a different base layer. After you have changed the layer, click run on the Code Editor to rerun your script.*

Note that you can change the base layer manually, but it will revert to Google's road map whenever you re-run your code. To avoid this, you can define the base layer to display on the map as part of your script.

*Copy and paste the snippet below into the Editor and then click Run*.

```js
Map.setOptions('HYBRID');
```

### Zoom level  

Zoom level defines **map scale**. The snippet below will print the zoom level to the Console panel whenever you run your script.

```js
print(Map.getZoom());
```

The default zoom level (4) shows a small scale map. When you increase the zoom level, you increase the map scale, which creates the illusion of bringing the map closer to you.

*Click on the + button in the upper left corner of map window until you can not zoom in any further. Then Run the script.*  

You should see the number 20 in the Console window. This is the largest zoom level provided by the Map UI.  

*Now click on the - button until you can not zoom any futher out. Then Run the script.*  

You should see the number 0 in the Console panel. This is the smallest scale that you can view. Notice the peculiar asymmetry of the map display: it has northern and southern limits, but appears to be continuous in the eastern and western directions. As a result, the map shows places more than once. This may look strange, but as we will discuss in a minute, it helps solve an inherent problem of displaying a round object on a flat surface.      

### Map center

The map center is a point defined by a **geographic coordinate**. The snippet below will print the point's coordinates to the Console panel whenever you run your script.

```js
print(Map.getCenter());
```

If you are used to thinking about **latitude** and **longitude** in that order, then you should note that the order shown here is opposite of this, because it follows the "x,y" convention of coordinates. As a geographic coordinate, longitude is plotted along the x-axis and latitude on the y-axis, which is counter-intuitive for many people, because we tend to equate longitude with vertical lines and latitude with horizontal lines.

The map's default center (-95.20, 34.80) is a point on Choctaw Nation land in southeastern Oklahoma in the USA. The longitude is a negative number, because the point lies west of the **prime meridian** (in Greenwich, England). The latitude is positive because the point lies north of the **equator**. This follows a conventional **geographic coordinate system** for world maps that can represent any location on Earth with a longitude between -180 and 180 and a latitude between 90 and -90.

*insert image*   

### Map display coordinates  

As noted earlier, the map displayed on your monitor does not have an eastern or western limit. In other words, it does not abruptly end at 180 degrees east and west of Greenwich.

*Use the pan button in the upper left of the map window to move the map center towards the east a few times (this will involve clicking and dragging towards the left). Then re-run the script.*  

You should find that you can drag the map so that the longitude of the center point is quite a bit greater than 180 degrees. This is what generates the repeating geography we noted earlier. It may look odd, but it allows the map to display the region of Earth that spans the 180th meridian without splitting it up on either side of the display. Often, flat world maps that are printed on paper must cut up this geography, which is why it is common to see a little piece of Russia hanging on a world map's western edge and a string of Aleutian islands creeping in from the east. Like many web maps, the Code Editor map solves this problem by extending the display's coordinate system past 180 longitude. This continuous lateral scroll also allows the map user to explore the world by  panning in only one direction, similar to how a globe allows the map user to spin it one direction for any number of revolutions.   

On modern monitors, the lowest zoom level may appear excessive, showing the same place seven or more times. But the amount of Earth that is visible in the map window depends not only on zoom level, but also on the number of pixels that a screen can display. For example, an iPhone 5 displays only 320 x 568 pixels. At zoom level 0, this screen resolution will display a map that depicts every location on Earth twice, which means you can show any region on Earth continuously on the screen.   

### Map extent  

Together, map center and zoom level define the **map extent**, or the region of the world displayed on the map. As you have seen, you can change these both manually with the zoom and pan buttons,

```js
Map.setCenter(125, 35, 6);
```

*TO BE CONTINUED...*
