![code](../../images/code.png)  

# Palette for multiband images  

One palette, one band. That is the simple mantra. If your image only contains one band, then there's no problem. EE will assume you want to display that one. If your image contains more than one band and your viz parameters includes a palette, then EE will throw you an error because it wants to know which band to display with that palette.

One way to solve this problem is to specify the band in the viz parameters.

```js
// Viz parameter pattern for multiband images and one palette.

var viz= {
  min: number,                // The min data value to display.
  max: number,                // The max data value to display.
  bands: 'band name',         // The band name as a string.
  palette: palette_name       // The palette name (called by variable's name)  
};

```

<mark>Heads-up</mark>: the _bands_ key in the viz dictionary is plural (_bands_) even though you only specify a single band.      
