## UI layout  

This lesson introduces you to widgets and how to use them to compose a layout for an earth engine app so that you can share your work with people who do not have earth engine accounts.  

By the end of the lesson, you should have a script to make a layout like [this app.](https://jhowarth.users.earthengine.app/view/eeprimer-ui-layout)  

We will look at three cases for generating this layout:  

1. When you help someone center the map at different locations, but all the locations can be found on a single image extent (e.g. a global image or a single scene).  

2. When you help someone center the map at different locations and this requires changing the layers on a map based on the selected place (e.g. when you need to move between more than one scene).  

3. Same case as above, but draws layers on demand rather than stashing them beforehand. (This one is perhaps the hardest to implement, but is perhaps the most generalizable).

Before we look at scripts for each of these cases, we will first briefly explore how to work with labels as an example of a UI widget. We will then review a strategy for making apps run faster by  exporting images as assets. Finally, we will then walk through a script to make a ui layout for each case above.     

## Introduction to widgets  

### Make a label

```js
// ---------------------------------------------------------------
// Introduction to labels
// ---------------------------------------------------------------

var testLabel = ui.Label(
  {
    value: 'The Quick Brown Fox Jumps Over The Lazy Dog!',
    // targetUrl: 'https://geog0150.github.io/w22/',
  }
);

print('Test label', testLabel);

```

### Style a label

```js

testLabel.style().set(
    {
      // height: '100px',
      // width: '100%',
      padding: '10px',
      margin: '20px',
      color: 'red',
      // backgroundColor: '#cccccc',
      // border:'4px solid orange',
      fontSize: '24px',
      fontWeight: 'bold',
      fontFamily: 'Helvetica, sans-serif',
      textAlign: 'left',
      // textDecoration: 'underline',
      whiteSpace: 'wrap',
      shown: true,
      stretch: 'horizontal'
    }
);

print('Test label with style', testLabel);
```

## Export images as assets  

[Example script](https://github.com/jeffhowarth/eeprimer/blob/master/scripts/export_images_asset.js)  

## UI Layout: Case 1

[Example script](https://github.com/jeffhowarth/eeprimer/blob/master/scripts/ui_layout_case1.js)  

## UI Layout: Case 2  

[Example script](https://github.com/jeffhowarth/eeprimer/blob/master/scripts/ui_layout_case2.js)  

## UI Layout: Case 3

[Example script](https://github.com/jeffhowarth/eeprimer/blob/master/scripts/ui_layout_case3.js)  

## Legend modules  

[Legend script](https://github.com/jeffhowarth/eeprimer/blob/master/scripts/legend_tools.js)  
