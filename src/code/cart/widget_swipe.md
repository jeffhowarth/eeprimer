A _swipe map_ is a popular way to compare two layers and an alternative to changing the visibility or opacity of two overlying layers.  

The code below creates a swipe between two maps with a split panel. This involves two steps:

1. Initialize a linker widget. This will allow you to change the map center and zoom in one map that controls the map center and zoom of a linked map. This allows the user to pan and zoom while keeping the geographic extent of the two maps consistent.    

2. Initialize a split panel to hold the two maps and setting the _wipe_ option to _true_.  

3. Clear root and then add the split panel to it.  

---

```js
//  Initialize a map linker widget and link two maps.

var map_linker = ui.Map.Linker([left_map, right_map]);  

//  Initialize a spilt panel widget to hold the two linked maps.   
//  Define the orientation as 'horizontal' and wipe as true.

var split_panel = ui.SplitPanel({
  firstPanel: map_linker.get(0),
  secondPanel: map_linker.get(1),
  orientation: 'horizontal',
  wipe: true,
  }
);

//  Clear root.
//  Then add split panel to root.

ui.root.clear();
ui.root.add(split_panel);

```
