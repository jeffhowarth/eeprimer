
//  Load dataset.

var gfc2014 = ee.Image('UMD/hansen/global_forest_change_2015');


//  -----------------------------------------------------------
//  Part 1
//  -----------------------------------------------------------

// //  Code block 8
// //  --------------

// var treeCover = gfc2014.select(['treecover2000']);
// var lossImage = gfc2014.select(['loss']);
// var gainImage = gfc2014.select(['gain']);

// // Add the tree cover layer in green.
// Map.addLayer(treeCover.updateMask(treeCover),
//     {palette: ['000000', '00FF00'], max: 100}, 'Forest Cover');

// Map.addLayer(treeCover,
//     {palette: ['000000', '00FF00'], max: 100}, 'Forest Cover - no mask');


// // Add the loss layer in red.
// Map.addLayer(lossImage.updateMask(lossImage),
//             {palette: ['FF0000']}, 'Loss');

// // Add the gain layer in blue.
// Map.addLayer(gainImage.updateMask(gainImage),
//             {palette: ['0000FF']}, 'Gain');


//  -----------------------------------------------------------
//  PART 2
//  -----------------------------------------------------------

// //  Code block 9
// //  --------------

// // Load the data and select the bands of interest.
// var gfc2014 = ee.Image('UMD/hansen/global_forest_change_2015');

// var lossImage = gfc2014.select(['loss']);
// var gainImage = gfc2014.select(['gain']);

// // Use the and() method to create the lossAndGain image.
// var gainAndLoss = gainImage.and(lossImage);

// // Show the loss and gain image.
// Map.addLayer(gainAndLoss.updateMask(gainAndLoss),
//     {palette: 'FF00FF'}, 'Gain and Loss');

// // Add the tree cover layer in green.
// Map.addLayer(treeCover.updateMask(treeCover),
//     {palette: ['000000', '00FF00'], max: 100}, 'Forest Cover');

//  Code block 10
//  --------------

// // Displaying forest, loss, gain, and pixels where both loss and gain occur.
// var lossImage = gfc2014.select(['loss']);
// var gainImage = gfc2014.select(['gain']);
// var treeCover = gfc2014.select(['treecover2000']);

// // Use the and() method to create the lossAndGain image.
// var gainAndLoss = gainImage.and(lossImage);

// // Add the tree cover layer in green.
// Map.addLayer(treeCover.updateMask(treeCover),
//     {palette: ['000000', '00FF00'], max: 100}, 'Forest Cover');

// // Add the loss layer in red.
// Map.addLayer(lossImage.updateMask(lossImage),
//     {palette: ['FF0000']}, 'Loss');

// // Add the gain layer in blue.
// Map.addLayer(gainImage.updateMask(gainImage),
//     {palette: ['0000FF']}, 'Gain');

// // Show the loss and gain image.
// Map.addLayer(gainAndLoss.updateMask(gainAndLoss),
//     {palette: 'FF00FF'}, 'Gain and Loss');


//  Code block 11
//  -------------

// // Load country features from Large Scale International Boundary (LSIB) dataset.
// var countries = ee.FeatureCollection('USDOS/LSIB_SIMPLE/2017');

// // Subset the Congo Republic feature from countries.
// var congo = countries.filter(ee.Filter.eq('country_na', 'Rep of the Congo'));

// // Get the forest loss image.
// var lossImage = gfc2014.select(['loss']);

// // Sum the values of forest loss pixels in the Congo Republic.
// var stats = lossImage.reduceRegion({
//   reducer: ee.Reducer.sum(),
//   geometry: congo,
//   scale: 30
// });
// print(stats);

//  Code block 12 & 13
//  ------------------

// // Load country features from Large Scale International Boundary (LSIB) dataset.
// var countries = ee.FeatureCollection('USDOS/LSIB_SIMPLE/2017');

// // Subset the Congo Republic feature from countries.
// var congo = countries.filter(ee.Filter.eq('country_na', 'Rep of the Congo'));

// // Get the forest loss image.
// var gfc2014 = ee.Image('UMD/hansen/global_forest_change_2015');
// var lossImage = gfc2014.select(['loss']);

// // Sum the values of forest loss pixels in the Congo Republic.
// var stats = lossImage.reduceRegion({
//   reducer: ee.Reducer.sum(),
//   geometry: congo,
//   scale: 30,
//   maxPixels: 1e9
// });
// print(stats);

// print('pixels representing loss: ', stats.get('loss'));

//  Code block 14
//  -------------

// // Load country features from Large Scale International Boundary (LSIB) dataset.
// var countries = ee.FeatureCollection('USDOS/LSIB_SIMPLE/2017');

// // Subset the Congo Republic feature from countries.
// var congo = countries.filter(ee.Filter.eq('country_na', 'Rep of the Congo'));

// // Get the forest loss image.

// var lossImage = gfc2014.select(['loss']);
// var areaImage = lossImage.multiply(ee.Image.pixelArea());

// // Sum the values of forest loss pixels in the Congo Republic.
// var stats = areaImage.reduceRegion({
//   reducer: ee.Reducer.sum(),
//   geometry: congo,
//   scale: 30,
//   maxPixels: 1e9
// });
// print('pixels representing loss: ', stats.get('loss'), 'square meters');

//  Code block 15
//  -------------

// // Load country features from Large Scale International Boundary (LSIB) dataset.
// var countries = ee.FeatureCollection('USDOS/LSIB_SIMPLE/2017');

// // Subset the Congo Republic feature from countries.
// var congo = ee.Feature(
//   countries
//     .filter(ee.Filter.eq('country_na', 'Rep of the Congo'))
//     .first()
// );

// // Subset protected areas to the bounds of the congo feature
// // and other criteria. Clip to the intersection with congo.
// var protectedAreas = ee.FeatureCollection('WCMC/WDPA/current/polygons')
//   .filter(ee.Filter.and(
//     ee.Filter.bounds(congo.geometry()),
//     ee.Filter.neq('IUCN_CAT', 'VI'),
//     ee.Filter.neq('STATUS', 'proposed'),
//     ee.Filter.lt('STATUS_YR', 2010)
//   ))
//   .map(function(feat){
//     return congo.intersection(feat);
//   });

// // Get the loss image.
// var gfc2014 = ee.Image('UMD/hansen/global_forest_change_2015');
// var lossIn2012 = gfc2014.select(['lossyear']).eq(12);
// var areaImage = lossIn2012.multiply(ee.Image.pixelArea());

// // Calculate the area of loss pixels in the Congo Republic.
// var stats = areaImage.reduceRegion({
//   reducer: ee.Reducer.sum(),
//   geometry: congo.geometry(),
//   scale: 30,
//   maxPixels: 1e9
// });
// print(
//   'Area lost in the Congo Republic:',
//   stats.get('lossyear'),
//   'square meters'
// );

// // Calculate the area of loss pixels in the protected areas.
// var stats = areaImage.reduceRegion({
//   reducer: ee.Reducer.sum(),
//   geometry: protectedAreas.geometry(),
//   scale: 30,
//   maxPixels: 1e9
// });
// print(
//   'Area lost in protected areas:',
//   stats.get('lossyear'),
//   'square meters'
// );

// ***********************************************************************

//  -----------------------------------------------------------
//  PART 3
//  -----------------------------------------------------------

// //  Code block 16
// //  -------------

// // Load country boundaries from LSIB.
// var countries = ee.FeatureCollection('USDOS/LSIB_SIMPLE/2017');
// // Get a feature collection with just the Congo feature.
// var congo = countries.filter(ee.Filter.eq('country_co', 'CF'));

// // Get the loss image.
// // This dataset is updated yearly, so we get the latest version.
// var gfc2017 = ee.Image('UMD/hansen/global_forest_change_2017_v1_5');
// var lossImage = gfc2017.select(['loss']);
// var lossAreaImage = lossImage.multiply(ee.Image.pixelArea());

// var lossYear = gfc2017.select(['lossyear']);
// var lossByYear = lossAreaImage.addBands(lossYear).reduceRegion({
//   reducer: ee.Reducer.sum().group({
//     groupField: 1
//     }),
//   geometry: congo,
//   scale: 30,
//   maxPixels: 1e9
// });
// print(lossByYear);

// //  Code block 17
// //  -------------

// var statsFormatted = ee.List(lossByYear.get('groups'))
//   .map(function(el) {
//     var d = ee.Dictionary(el);
//     return [ee.Number(d.get('group')).format("20%02d"), d.get('sum')];
//   });
// var statsDictionary = ee.Dictionary(statsFormatted.flatten());
// print(statsDictionary);

// //  Code block 18
// //  -------------

// var chart = ui.Chart.array.values({
//   array: statsDictionary.values(),
//   axis: 0,
//   xLabels: statsDictionary.keys()
// }).setChartType('ColumnChart')
//   .setOptions({
//     title: 'Yearly Forest Loss',
//     hAxis: {title: 'Year', format: '####'},
//     vAxis: {title: 'Area (square meters)'},
//     legend: { position: "none" },
//     lineWidth: 1,
//     pointSize: 3
//   });
// print(chart);
