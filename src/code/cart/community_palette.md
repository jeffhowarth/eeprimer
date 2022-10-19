##Introduction    

ee-palettes is a resource created by Gennadii Donchyts, Fedor Baart & Justin Braaten. You can access this resource through the project's [GitHub repository](https://github.com/gee-community/ee-palettes){target=_blank}. The README file (the web page that is displayed when you click the GitHub link) thoroughly documents how to work with the resource. The snippets below aim to provide some additional support for EE newbies.  

##1. Load the module.

In this community resource, palettes are contained in an Earth Engine _module_, or a collection of data objects that can be called from other scripts. This follows the _modular programming_ paradigm that seeks to break complex tasks into simple, reusable sub-tasks.  

Many EE problems require the coder to create a palette to call as a visualization parameter. So rather than force all coders to do this from scratch each time, Gena, Fedor, and Justin wrote up a module that contains many different solutions to this task. Then they very kindly shared this module (for no cost) with the broader EE user community.   

The snippet below loads the ee-palettes module into a variable called _palettes_.  

```js
// Load ee-palettes module.

var palettes = require('users/gena/packages:palettes');

```

##2. Define a palette.

The ee-palettes module contains a dictionary composed of sub-dictionaries, lists, and strings. To see this, run this snippet.

```js
// Inspect the module.

print('community palettes', palettes);

```

In the Console, you should see a dictionary structured like this:  

- Module dictionary  
    - Color schemes    
        - Palette groups   
            - Color lists  

To select a color list for your palette, use the following pattern:    

```js
// Pattern for selecting palettes.  

var palette_name =          // You can name this anything you want.
  module_dictionary.        // Whatever you named the variable when you loaded the module.
  color_scheme.             // Schemes organized by source (e.g. ColorBrewer) and sometimes data constraints (e.g. qualitative, sequential, diverging).
  palette_group             // A general range of colors displayed by a palette.
  [color_list_index]        // The list of colors used to display the palette (akin to the palette's 'resolution').  
;

```  

For example:  

```js

// Define a palette.

var palette =         // Whatever you want to name the palette.
  palettes.           // Whatever you named the variable when you loaded the module.
  cmocean.            // Name of the color scheme.
  Deep                // Name of the palette group.  
  [7]                 // Index number of color list.
;

print('palette', palette);

```

Typically, you call the palette in one line:    

```js

// Define a palette.

var palette = palettes.cmocean.Deep[7];

print('palette', palette);

```

##3. Invert the palette.

Sometimes you will need to reverse the order of colors in a color list. For example, the Red-Blue diverging ColorBrewer scheme is inherently ordered from red to blue.  

![colorbrewer.RdBu](https://github.com/gee-community/ee-palettes/raw/master/pals/RdBu.png)

But what if you want to use this palette to display temperature anomalies, where negative numbers represent cooler than normal temperatures and positive values represent warmer than normal temperatures? Good cartographic practice aims to make the visual display of data intuitive for the map reader. To use cool colors for cool temperatures and warm colors for warm temperatures, you can reverse the color list.  

```js
// Define palette and reverse the color list.

var palette_reversed = palettes.colorbrewer.RdBu[9].reverse();  

print('palette reversed', palette_reversed);

```

Compare the result from above with the original palette to check your understanding.  

```js
// Original palette.

var palette_original = palettes.colorbrewer.RdBu[9].reverse();  

print('palette original', palette_original);

```

##4. Slice the palette.

Sometimes you will want to use a portion of the palette, but not the entire palette. For example, imagine that you would like to map concentrations of chlorophyll-a. You find a palette from the niccoli color scheme that transitions from dark blue to green through a yellow-peach to white.

![nicolli.linearl](https://github.com/gee-community/ee-palettes/raw/master/pals/linearl.png)  

For your map, you would like the palette to end at the green color and not extend into the yellow and white bit. To do this, you can slice the palette:  

```js
// Slice the palette to use a portion of it.

var palette_sliced = palettes.niccoli.linearl[7].slice(0,5);

print('palette_sliced', palette_sliced);

```

To understand how slice works, run this code to print the original palette.

``` js
// Compare to original palette.

var palette_full = palettes.niccoli.linearl[7];

print('palette full', palette_full);

```
Look at the Console panel and note that the original list contains seven (7) elements. Now expand the list (click on the carrot) so that you can see the color codes. Note that each color code in the list has an _index number_. The first color has the index 0 and the last color has the index 6.

Now look at your sliced palette in the Console panel. It contains five (5) elements. The two arguments in the .slice() method defined the start and end of this subset. Note that the first number is _inclusive_ and the second one is _exclusive_. That means when you say .slice(0,5) the result will include the index 0 but exclude the index 5 or greater.

## Resources for good cartographic practice  

Here are more resources for choosing color palettes for data visualization:  

- [ColorBrewer](https://colorbrewer2.org/#type=diverging&scheme=RdBu&n=5){target=_blank}  
- [Scientific color maps](https://www.fabiocrameri.ch/colourmaps/){target=_blank}  
- [Why we use bad color maps and what you can do about it](https://www.kennethmoreland.com/color-advice/BadColorMaps.pdf){target=_blank}  
- [Color in a perceptually uniform way](https://medium.com/nightingale/color-in-a-perceptual-uniform-way-1eebd4bf2692){target=_blank}  
