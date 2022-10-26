#Area-based conservation goals at the town scale  

##Introduction  

In January 2022, Amy Sheldon of Middlebury introduced [H.606](https://legislature.vermont.gov/bill/status/2022/H.606){target=_blank} to the Committee on Natural Resources, Fish, and Wildlife in Montpelier, Vermont. "An act relating to community resilience and biodiversity protection" would require the State of Vermont to protect 30 percent of lands and waters in the state by 2030 and 50 percent by 2050. The conserved land would permanently protect natural landcover with different degrees of human use and resource extraction and include a mixture of ecological reserve areas, biodiversity conservation areas, natural resource management areas, and sustainable forest management areas. For much of Vermont, natural land cover is forested land cover or early-successional forest cover, in contrast to open, bare, and impervious land cover maintained by agriculture and development.  

The bill passed the House in March and then passed the Senate two months later. On May 12, 2022, the bill was delivered to Governor Scott for his signature. On June 2, the Governor [vetoed the bill](https://legislature.vermont.gov/Documents/2022/Docs/JOURNAL/hj220512.pdf#page=232){target=_blank} and wrote:  

: "Vermont has a long history of effective land conservation that has significantly
contributed to the state’s vibrant, resilient working landscape of farms and
forests, vast natural areas, and world class opportunities for outdoor recreation.
This is a result of flexible and innovative tools like our current use program
and the payment-for-ecosystem-services model. These programs are critical to
achieving our conservation priorities because they combine conservation
planning with incentives – making it more attractive and affordable for
Vermont families to keep and conserve their land, farms and forests.  

: "Over the course of the legislative session, the Agency of Natural Resources
testified multiple times against this bill. Among the objections, the Agency
pointed to the conservation goals established in H.606 are unnecessarily tied to
– and unreasonably limited to – permanent protection. The Agency has
repeatedly said that permanent preservation has not been, and cannot be, the
state’s exclusive conservation tool and this bill, intentional or not, would
diminish the existing and successful conservation tools we have.
Based on the objections outlined above, I am returning this legislation without
my signature pursuant to Chapter II, Section 11 of the Vermont Constitution."  

Your goal for this week is to develop a tool to assess the landcover of lands with permanent protections and lands registered in the [Current Use and Value Appraisal Program](https://agriculture.vermont.gov/land-use-renewable-energy/current-use-and-value-appraisal-program){target=_blank} within any Vermont town and create a chart to evaluate 30 by '30 and 50 by '50 goals at the town scale.    

The app below illustrates the basic tool that you will make using the case of Middlebury, Vermont.

<iframe
  src="https://jhowarth.users.earthengine.app/view/eeprimer-working-with-rasters"
  style="width:100%; height:800px;"
></iframe>

_Here is [a link](https://jhowarth.users.earthengine.app/view/eeprimer-working-with-rasters){target=_blank} to the app that will open in a separate window._

##Starter script  

```js
//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  TITLE:        week_03_practice_problem.js  
//  NAME:         Your name here please
//  DATE:         Today's date
//  PURPOSE:      Town-scale analysis of protected and current use land cover.      
//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Use the drawing tool to drop a point on Battell Bridge.

// ----------------------------------------------------------------------------
// Data dictionary for problem.
// ----------------------------------------------------------------------------

var data = {
  towns: 'projects/conservation-atlas/assets/cadastre/Boundary_TWNBNDS_poly',
  lc: 'users/jhowarth/middCC/LandLandcov_BaseLC2016',
  ag: 'projects/conservation-atlas/assets/landCover/lcAg_2016',
  pro: 'projects/conservation-atlas/assets/protections/VT_Protected_Lands_Database',
  uva: 'projects/conservation-atlas/assets/cadastre/Use_Value_Appraisal_Parcels'
  }
;

// ----------------------------------------------------------------------------
// Create a map centered on a study region.
// ----------------------------------------------------------------------------

// Load town feature collection from data.towns.

// Filter study region by a poi.

// Center on study region at zoom level 11.

// Set base map to satellite with labels.

// Add study region as a layer to map.

// ----------------------------------------------------------------------------
// Display raster image as a map layer.  
// ----------------------------------------------------------------------------

// Construct a land cover image from data.land_cover.

// Inspect image.

// Define a palette to display land cover values.  

var lc_palette = [
  '#A1E67E',    //   1. Tree Canopy  
  '#F2F179',    //   2. Grass/Shrub
  '#f7f7f7',    //   3. Bare soil
  '#95C6E6',    //   4. Water
  '#525252',    //   5. Buildings    
  'white',      //   6. Roads
  '#cccccc',    //   7. 0ther pavement
  'white',      //   8. Railroads  
  ];

// Define visualization parameters.

// Add layer to map.

// ----------------------------------------------------------------------------
// Convert feature collection to a binary image.
// ----------------------------------------------------------------------------

// Load a feature collection from data.ag.

// Inspect first record of collection.

// Add layer to map.  

// Create a function that gives each feature the property 'tag' with the value 1.

// Apply function to all features in collection.  

// Inspect first record of collection.  

// Create a function to convert feature collection to image.

// Apply function to feature collection.

// Add binary image to map.

// ----------------------------------------------------------------------------
// Map algebra: local operations between two raster layers.
// ----------------------------------------------------------------------------

// Invert binary.

// Erase inverted binary from landcover

// Add a color for agriculture to palette list.

// Inspect the palette.

// Define vis parameters.

// Add layer to map.

// ----------------------------------------------------------------------------
// Generalize nominal attributes (aka reclassify).  
// ----------------------------------------------------------------------------

// Reclassify land cover

// OLD VALUE    OLD NAME            NEW NAME              NEW VALUE
// 0            Ag                  Active Field          4
// 1            Tree canopy         Forest                1
// 2            Grass/Shrub         Old field             3
// 3            Bare soil           Developed             5
// 4            Water               Water                 2
// 5            Buildings           Developed             5
// 6            Roads               Developed             5
// 7            Other pavement      Developed             5
// 8            Railroads           Developed             5

// Create list of old values.

// Create list of new values.

// Reclassify new values from old values.

// Define palette for generalized layer.

// Define vis parameters for generalized layer.

// Add generalized layer to map.

// ----------------------------------------------------------------------------
// Convert feature collection to binary image and apply as a mask layer.  
// ----------------------------------------------------------------------------

// Construct feature collection from data.pro.

// Tag features.

// Make image from tagged features.

// Inspect result.

// Add binary layer to map.

// Add generalized layer to map with protected lands mask.  

// ----------------------------------------------------------------------------
// Convert feature collection to binary image and apply mask layers.
// ----------------------------------------------------------------------------

// Construct feature collection from data.uva.

// Tag features.

// Make image from tagged features.

// Inspect result.

// Add binary layer to map.

// Add generalized layer to map with protected lands mask.  

// Create a layer that represents UVA lands without permanent protections.

// ----------------------------------------------------------------------------
// Compute area of a zone.  
// ----------------------------------------------------------------------------

// Create layer of pixel areas.

// Inspect result.

// Create parameters of zonal statistic.

// Compute zonal statistic.

// Inspect result.

// ----------------------------------------------------------------------------
// Chart area of regions as a percent of zone.  
// ----------------------------------------------------------------------------

// Represent the percentage of the study region's area represented by the area of each pixel.  
// In other words, divide the area of each pixel by the area of the study region.
// Rename this layer 'all of town'.

// Inspect results.

// Construct image with three dough bands and one cutter band.   
//  Band 1 = pixel percentages  
//  Band 2 = pixel percentages masked by protected lands  
//  Band 3 = pixel percentages masked by uva lands without permanent protections  
//  Band 4 = generalized land cover classes.

// Inspect result.

// ----------------------------------------------------------------------------
// Chart zonal statistic of each dough band with cutter zones.
// ----------------------------------------------------------------------------

var lc_labels = [
  '',
  'Tree canopy',
  'Water',
  'Old field',
  'Active field',
  'Developed'
  ]
;

var chart_params = {
  image: simple_lc_area,
  classBand: 'land cover',
  region: study_region,
  reducer: ee.Reducer.sum(),
  scale: 10,
  classLabels: lc_labels,
  }
;

var chart = ui.Chart.image.byClass(chart_params)
    .setChartType('BarChart')
    .setOptions({
      title: 'Land cover in study region',
      hAxis: {
        title: 'Percent of study region',
        titleTextStyle: {italic: false, bold: true},
      },
      colors: simple_lc_palette,
    }
  )
;

```

##New code snippets

The list below introduces _new_ methods that you need to solve this problem.  

- Construct image from address  
- Inspect image  
- Add image as layer to map  
- Convert feature collection to binary image  
- Threshold an image  
- Map algebra  
- Generalize (reclassify) image  
- Apply mask to image  
- Compute area of a zone  
- Chart area of regions as percent of zone    
