/*

  TITLE:  Export images as asset
  AUTHOR: Jeff Howarth
*/

// ----------------------------------------------------------------------------------------
// Gather datasets
// ----------------------------------------------------------------------------------------

// Define key terms as variables.

var poi = ee.Geometry.Point([-73.18187596868007,44.01332133611406]);
var sDate = '2021-04-01';
var eDate = '2021-05-01';
var sDate2 = '2021-10-01';
var eDate2 = '2021-11-01';
var cloud = 20;

// Function to mask clouds and scale images; adapted fron EE starter script.

function maskS2clouds(image) {
  var qa = image.select('QA60');

  // Bits 10 and 11 are clouds and cirrus, respectively.
  var cloudBitMask = 1 << 10;
  var cirrusBitMask = 1 << 11;

  // Both flags should be set to zero, indicating clear conditions.
  var mask = qa.bitwiseAnd(cloudBitMask).eq(0)
      .and(qa.bitwiseAnd(cirrusBitMask).eq(0));

  return image.updateMask(mask).divide(10000);
}

// Function to load and filter image collection.

var makeImage = function(start, end) {
  return ee.ImageCollection('COPERNICUS/S2_SR')
    .filterBounds(poi)
    .filterDate(start, end)
    // Pre-filter to get less cloudy granules.
    .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', cloud))
    .map(maskS2clouds)
    .select('B11', 'B8', 'B2')
  ;
};

// Make two images that differ by date window.

var S2_1 = makeImage(sDate, eDate);
var S2_2 = makeImage(sDate2, eDate2);

print('S2 Collections', S2_1, S2_2);

// ----------------------------------------------------------------------------------------
// Visualize images as map layers
// ----------------------------------------------------------------------------------------

// Defie visualization parameters for layer.

var viz = {
  min: 0.0,
  max: 0.3,
  bands: ['B11', 'B8', 'B2'],                       // Change bands for your case
  gamma: 0.7,                                       // Change or remove gamma for your case
  // palette: []                                    // Use palette (and comment out gamma) for single band image
};

// Center map on one of the images.

Map.centerObject(S2_2, 9);

// Make labels for each image.

var imageName1 = 'S2_Middlebury_Spring_2021';
var imageName2 = 'S2_Middlebury_Fall_2021';

// Add layers to map with labels

Map.addLayer(S2_1.median(), viz, imageName1);
Map.addLayer(S2_2.median(), viz, imageName2);

// // ----------------------------------------------------------------------------------------
// // Export image
// // ----------------------------------------------------------------------------------------

// // Make variable for image to export.

// var xImage = S2_1.median();


// // Use geometry tools to make a rectangle around study area.
// // When you export, EE will clip the image to this rectangle.
// // If you want entire image, then make your rectangle bigger than image.


// // Make dictionary of export arguments.

// var xi = {
//   image: xImage,                              // Image to export (reduce if still an image collection).
//   description: imageName1,                     // Name for task in task panel.
//   assetId: imageName1,                        // Name for asset in asset panel.
//   region: geometry,                           // Region to clip export image (default without this is map window)
//   pyramidingPolicy: 'mean',                   // Change to 'mode' if categorical data.
//   scale: 10,                                  // Same as source image.
//   maxPixels: 1e13,                            // Set high to avoid max size errors.
//   }
// ;

// // Export image as asset.

// Export.image.toAsset(xi);

// /*
// --------------------------------------------------------------------------------------------

//   Investigate image assets

//   Please note: you will need run the Tasks and wait for these to complete before you can
//     complete this section.

// --------------------------------------------------------------------------------------------
// */

// // Load images from asset id.

// var S2_spring_asset = ee.Image('projects/ee-primer/assets/S2_Middlebury_Spring_2021');
// var S2_fall_asset = ee.Image('projects/ee-primer/assets/S2_Middlebury_Fall_2021');

// // Compare the imports to originals.

// print('Spring original', S2_1.median(), 'Spring asset', S2_spring_asset);

// // Add layer to map.

// Map.addLayer(S2_spring_asset, viz, 'Spring asset');
// Map.addLayer(S2_fall_asset, viz, 'Fall asset');
