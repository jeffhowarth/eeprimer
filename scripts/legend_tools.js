// =================================================
// Legend tools
//
// Jeff Howarth
// Geography Dept, Middlebury College
//
// =================================================


// -------------------------------------------------
// To make a qualitative legend for a layer
// -------------------------------------------------

// to call this module
// var test = makeLegend(layerName, palette, labels, position);


exports.makeRow = function(color, name) {
    var colorBox = ui.Label({
      style: {
        backgroundColor: color,
        padding: '10px',
        margin: '4px'
        }
      });
    var description = ui.Label({
      value: name,
      style: exports.legendKeys
      });
    return ui.Panel({
      widgets: [colorBox, description],
      layout: ui.Panel.Layout.Flow('horizontal'),
      });
    };

exports.findLength = function(list) {
  return list.length;
};

exports.makeLegend = function(layerName, palette, labels, position) {
  var labelList = ee.List(labels);
  var labelLength = labelList.length();
  var legend = ui.Panel({
  style: {
    padding: '8px 15px',
    position: position
    }
  });
  var legendTitle = ui.Label({
    value: layerName,
    style: {
      fontWeight: 'bold',
      fontSize: '14px',
      margin: '0 0 4px 0',
      padding: '0'
      }
    });
  legend.add(legendTitle);
for (var i = 0; i < exports.findLength(labels); i++) {
legend.add(exports.makeRow(palette[i], labels[i]));
}

  return legend;
};


// -------------------------------------------------
// To make a gradient legend for a layer
// -------------------------------------------------

/**
 * Adapted from Justin Braaten
 * @license
 * Copyright 2020 Google LLC.
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * to call
 * var legend = makeGradientLegend(vis, title);
 */

// Creates a color bar thumbnail image for use in legend from the given color
// palette.

exports.makeColorBarParams = function(palette) {
  return {
    bbox: [0, 0, 1, 0.1],
    dimensions: '100x10',
    format: 'png',
    min: 0,
    max: 1,
    palette: palette,
  };
};

exports.makeGradientLegend = function(vis, title, position) {
  var colorBar = ui.Thumbnail({
    image: ee.Image.pixelLonLat().select(0),
    params: exports.makeColorBarParams(vis.palette),
    style: {stretch: 'horizontal', margin: '0px 8px', maxHeight: '24px'},
  });

  // Create a panel with three numbers for the legend.
  var legendLabels = ui.Panel({
    widgets: [
      ui.Label(vis.min, {margin: '4px 8px', fontSize: '12px',fontWeight: 'regular'}),
      ui.Label(
          vis.max - ((vis.max - vis.min) / 2),
          {margin: '4px 8px', textAlign: 'center', stretch: 'horizontal',fontSize: '12px',fontWeight: 'regular'}),
      ui.Label(vis.max, {margin: '4px 8px',fontSize: '12px',fontWeight: 'regular'})
    ],
    layout: ui.Panel.Layout.flow('horizontal')
  });
  var legendTitle = ui.Label({
    value: title,
    style: exports.legendKeys
  });
  return ui.Panel({
    widgets: [legendTitle, colorBar, legendLabels],
    style: {
      position: position
    }
  });
};
