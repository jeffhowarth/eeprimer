//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  TITLE:        Image tools
//  AUTHOR:       Jeff Howarth
//  LAST EDITED:  03/15/2022
//
//  PURPOSE:      Tools for processing images with Google Earth Engine.
//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// ------------------------------------------------------------
// Landsat scaling functions.
// ------------------------------------------------------------

exports.applyScaleFactors_L8 = function(image) {
  var opticalBands = image.select('SR_B.').multiply(0.0000275).add(-0.2);
  var thermalBands = image.select('ST_B.*').multiply(0.00341802).add(149.0);
  return image.addBands(opticalBands, null, true)
              .addBands(thermalBands, null, true);
};


// L8 & L9
// -------

exports.scale_L89 = function(image) {
  var opticalBands = image.select('SR_B.').multiply(0.0000275).add(-0.2);
  var thermalBands = image.select('ST_B.*').multiply(0.00341802).add(149.0);
  return image.addBands(opticalBands, null, true)
              .addBands(thermalBands, null, true);
};

// L4, L5, & L7
// ------------

exports.scale_L457 = function(image) {
  var opticalBands = image.select('SR_B.').multiply(0.0000275).add(-0.2);
  var thermalBand = image.select('ST_B6').multiply(0.00341802).add(149.0);
  return image.addBands(opticalBands, null, true)
              .addBands(thermalBand, null, true);
};

// ----------------------------------------------------------------------
// Function to mask clouds based on the QA_PIXEL band for L8 & L9.
// ----------------------------------------------------------------------

exports.cloudMask_L89 = function(image) {
  var qa = image.select('QA_PIXEL');

  var dilatedCloudBitMask = 1 << 2;
  var cirrusBitMask = 1 << 2;
  var cloudBitMask = 1 << 3;
  var cloudShadowBitMask = 1 << 4;

  // Both flags shoudl be set to zero, indicating clear conditions.

  var mask = qa.bitwiseAnd(cloudBitMask).eq(0)
      .and(qa.bitwiseAnd(cloudShadowBitMask).eq(0))
      .and(qa.bitwiseAnd(dilatedCloudBitMask).eq(0))
      .and(qa.bitwiseAnd(cirrusBitMask).eq(0))
      ;

  return image.updateMask(mask);

};

// ----------------------------------------------------------------------
// Function to mask clouds based on the QA_PIXEL band for L4, L5, and L7.
// ----------------------------------------------------------------------

exports.cloudMask_L457 = function(image) {
  var qa = image.select('QA_PIXEL');

  var dilatedCloudBitMask = 1 << 1;
  var cloudBitMask = 1 << 3;
  var cloudShadowBitMask = 1 << 4;

  // Both flags shoudl be set to zero, indicating clear conditions.

  var mask = qa.bitwiseAnd(cloudBitMask).eq(0)
      .and(qa.bitwiseAnd(cloudShadowBitMask).eq(0))
      .and(qa.bitwiseAnd(dilatedCloudBitMask).eq(0))
      ;

  return image.updateMask(mask);

};


// ----------------------------------------------------------------------
// Function to mask clouds based on the SR_CLOUD_QA band for L4.
// ----------------------------------------------------------------------

exports.cloudMask_L4 = function(image) {
  var qa = image.select('SR_CLOUD_QA');

  var cloudBitMask = 1 << 1;
  var cloudShadowBitMask = 1 << 2;
  var cloudAdjacentBitMask = 1 << 3;

  // Both flags shoudl be set to zero, indicating clear conditions.

  var mask = qa.bitwiseAnd(cloudBitMask).eq(0)
      .and(qa.bitwiseAnd(cloudShadowBitMask).eq(0)
      .and(qa.bitwiseAnd(cloudAdjacentBitMask).eq(0))
      );

  return image.updateMask(mask);

};


// ----------------------------------------------------------------------
// Function to mask clouds based on the STATE_1KM band for MODIS:
// "MODIS/006/MOD09GA"
// ----------------------------------------------------------------------

exports.cloudMask_MODIS = function(image) {
  var qa = image.select('state_1km');

  var cloudBitMask = 1 << 10;
  var cloudShadowBitMask = 1 << 2;


  // Both flags shoudl be set to zero, indicating clear conditions.

  var mask = qa.bitwiseAnd(cloudBitMask).eq(0)
      .and(qa.bitwiseAnd(cloudShadowBitMask).eq(0)
      );

  return image.updateMask(mask);

};



// Make histogram from image.

exports.makeHistogram_help = 'tools.makeHistogram(image, band, scale, min, max)';

exports.makeHistogram = function(image, band, scale, min, max) {
  var chartStyle = {
    hAxis: {
      viewWindow: {min: min, max: max},
      title: 'data value',
      titleTextStyle: {italic:true, bold:false}
      },
    legend: {position: 'none'},
    vAxis: {
      title: 'count',
      titleTextStyle: {italic:true, bold:false}
      }
  };
  var params = {
    image: image.select(band),
    scale: scale,
    maxPixels: 1e13,
    };
  var chart = ui.Chart.image.histogram(params);
  chart.setOptions(chartStyle);
  return chart;
};

// ------------------------------------------------------------

// Make histogram for entire image.

exports.makeBoundedHistogram_help = 'tools.makeBoundedHistogram (region, image, band, scale, xMin, xMax, yMin, yMax)';

exports.makeBoundedHistogram = function(region, image, band, scale, xMin, xMax, yMin, yMax) {
  var chartStyle = {
    hAxis: {
      viewWindow: {min: xMin, max: xMax},
      title: 'data value',
      titleTextStyle: {italic:true, bold:false}
      },
    legend: {position: 'none'},
    vAxis: {
      title: 'count',
      titleTextStyle: {italic:true, bold:false},
      viewWindow: {min: yMin, max: yMax}
      }
  };
  var params = {
    image: image.select(band),
    scale: scale,
    maxPixels: 1e13,
    region: region,
    maxRaw: 20000
    };
  var chart = ui.Chart.image.histogram(params);
  chart.setOptions(chartStyle);
  return chart;
};




// ------------------------------------------------------------
// Convert features to raster
// ------------------------------------------------------------


exports.makeImageFromFeatures = function(fc, p) {
  return ee.Image().byte().paint({
    featureCollection: fc,
    color: p
  });
};
