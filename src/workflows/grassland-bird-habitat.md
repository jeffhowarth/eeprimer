## Introduction 

This tutorial aims to answer the question:  

> In 2016, where was the best potential habitat for grassland birds in the Champlain Valley that was owned by Middlebury College?

To answer this question, we will develop a model based on [these guidelines][anr01]{target=_blank} developed by the Vermont Agency of Natural Resources.  

## Background  

The Bobolink (_Dolichonyx oryzivorus_) is a grassland bird species with a bubbling song and a remarkable life cycle. Bobolinks winter in South America, primarily Paraguay, Argentina, and Bolivia. In the spring, they migrate back to their breeding habitats in North America, including grassland habitat here in the Champlain Valley. Interestingly, Bobolinks seem to have keen spatial memory and sense of place; they tend to return to the same specific field each summer to breed and research indicates that this "site fidelity" improves breeding success. 

![Bobolink](https://inaturalist-open-data.s3.amazonaws.com/photos/192899937/large.jpg)

_source:_ [_iNaturalist_][photo]{target=_blank}

Bobolinks are also an interesting example of a "new native" species. During Abenaki times, Bobolinks did not breed in Vermont, because there was very little grassland habitat for them to do so. Open, grassy habitat was uncommon in what we now call the Champlain Valley; the landscape here was largely forested, save for the margins of water bodies and places where Abekai cultivated crops or set fires at a frequency that prevented trees from growing. Following the American Revolution, white migrants appropriated Abenaki lands in the Champlain Valley and pitched farms, claiming the land by clearing it of trees. This created large expanses of open habitat in the formerly forested landscape. Bobolinks soon colonized this new habitat, migrating from native breeding territories on the midwestern prairies of North America.  

Today, Vermont plays an important role in the conservation of Bobolinks and other native North American grassland species. Since the 1940s, breeding populations of Bobolinks have significantly declined across North America, primarily from habitat loss caused by both changes in agricultural practices and the conversion of agricultural land into other land uses. 

This tutorial develops a model with Earth Engine to identify where Middlebury College owns land that could contribute to the conservation of native North American grassland bird species by protecting the open structure of the habitat and working with farmers to adapt land use practices that do not conflict with breeding cycles of grassland birds.   

## Criteria  

According to the ANR guidelines, the best potential habitat for Bobolink and other grassland bird species should meet the following criteria: 

1. Open land cover (grass/shrub, water, bare);
2. Buffered from the edge, or with a core area that is at least 50 meters from closed habitat structure (tree canopy) or developed land (roads, buildings, pavement, etc);  
3. Large, or at least 20 acres in area;
4. With a large interior, or a perimeter-area ratio of 0.015 or less. 

[anr01]: https://vtfishandwildlife.com/sites/fishandwildlife/files/documents/Conserve/RegulatoryReview/Guidelines/Grassland-Bird-Habitat-Conservation-Guidance-2021.pdf

[photo]: https://www.inaturalist.org/taxa/10487-Dolichonyx-oryzivorus

---  

## Workflow overview  

The diagram below shows the general workflow for the model, or how each step in the tutorial connects to other steps. The color represents the format of the result (or output) of each step as shown below.  

<center>

``` mermaid
graph TD
  vector[vector] ;
  raster[raster] ;
  task[task] ;

style vector fill:#E1C3E6,stroke-width:0px
style raster fill:#C5E6A1,stroke-width:0px
style task fill:#ADD8E6,stroke-width:0px
```

</center>

Here is how each step in the workflow connects to another step.     

<center>

``` mermaid
graph LR
  step01[1] ;
  step02[2] ;
  step03[3] ;
  step04[4] ;
  step05[5] ;
  step06[6] ;
  step07[7] ;
  step08[8] ;
  step09[9] ;
  step10[10] ;
  step11[11] ;
  step12[12] ;
  step13[13] ;
  step14[14] ;
  step15[15] ;
  step16[16] ;

  step01 --> step02 --> step03  
  step04 --> step05
  step03 --> step06
  step05 --> step06
  step06 --> step07 
  step07 --> step08  
  step08 --> step09
  step02 --> step10
  step09 --> step10  
  step09 --> step11
  step11 --> step12
  step03 --> step12
  step12 --> step13  
  step02 --> step13
  step13 --> step14  
  step14 --> step15
  step15 --> step16

  style step01 fill:#E1C3E6,stroke-width:0px
  style step02 fill:#E1C3E6,stroke-width:0px
  style step03 fill:#E1C3E6,stroke-width:0px
  style step04 fill:#C5E6A1,stroke-width:0px
  style step05 fill:#C5E6A1,stroke-width:0px
  style step06 fill:#C5E6A1,stroke-width:0px
  style step07 fill:#C5E6A1,stroke-width:0px
  style step08 fill:#C5E6A1,stroke-width:0px
  style step09 fill:#C5E6A1,stroke-width:0px
  style step10 fill:#E1C3E6,stroke-width:0px
  style step11 fill:#C5E6A1,stroke-width:0px
  style step12 fill:#E1C3E6,stroke-width:0px
  style step13 fill:#E1C3E6,stroke-width:0px
  style step14 fill:#E1C3E6,stroke-width:0px
  style step15 fill:#E1C3E6,stroke-width:0px
  style step16 fill:#ADD8E6,stroke-width:0px
```

</center>

The connections are made because the output of one step provides an input or argument for another step. This makes the workflow one long _chain_, or a series of connected input-method-output links. 

The videos below walk you through each step in this workflow.    

## Start a new script

<iframe width="720" height="405" src="https://www.youtube.com/embed/-6xHgblRxWs?si=pmwang3Z6_4iJp_b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


```js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//  Grassland bird habitat on Middlebury College Lands in Champlain Valley. 
//  
//  Jeff Howarth 
//  Sept 30, 2023
//
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
```

---

## 1. Load feature collection and filter by attribute

### template  

```js
// Load feature collection and filter by attribute.    

var output = ee.FeatureCollection("path")
  .filter(ee.Filter.eq("propertyKey", "value"))
;
```

### diagram  

``` mermaid
graph LR
  method1["ee.FeatureCollection()"] ;
  arg_att1([pathname\n\nSTRING]) --> method1;

  method1 --> method2[".filter()"];
  method2 --> method3(["ee.Filter.eq()"]);

  method3 --> output>output\n\nFEATURE COLLECTION];

  arg_att2([property key\n\nSTRING]) --> method3;
  arg_att3([value\n\nSTRING]) --> method3;

  style method1 fill:#ADD8E6,stroke-width:0px
  style method2 fill:#ADD8E6,stroke-width:0px
  style method3 fill:#ADD8E6,stroke-width:0px
  style output fill:#E1C3E6,stroke-width:0px
  style arg_att1 fill:#DCDCDC,stroke-width:0px
  style arg_att2 fill:#DCDCDC,stroke-width:0px
  style arg_att3 fill:#DCDCDC,stroke-width:0px
```

### demo  

<iframe width="720" height="405" src="https://www.youtube.com/embed/9Dc0zxy2x1I?si=afXBeSU2CAxo02ej" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### demo code  

```js
// ---------------------------------------------------------------------------
//  1. Load feature collection and filter by attribute.
//
//  Isolate Champlain Lowlands.
// ---------------------------------------------------------------------------

var region = ee.FeatureCollection("projects/conservation-atlas/assets/regions/Ecoregion_07232023");

print(
  "STEP 1:"
  )
;

Map.addLayer();
```

---

## 2. Load feature collection and filter by location

### template  

```js
// Load feature collection and filter by location.  

var output = ee.FeatureCollection("path")
  .filterBounds(target)
;

```

### diagram  

``` mermaid
graph LR
  method1["ee.FeatureCollection()"] ;
  arg_att1([path\n\nSTRING]) --> method1;

  method1 --> method2[".filterBounds()"];
  method2 --> output>output\n\nFEATURE COLLECTION];

  arg_att2([target\n\nGEOMETRY or FEATURE]) --> method2;

  style method1 fill:#ADD8E6,stroke-width:0px
  style method2 fill:#ADD8E6,stroke-width:0px
  style output fill:#E1C3E6,stroke-width:0px
  style arg_att1 fill:#DCDCDC,stroke-width:0px
  style arg_att2 fill:#E1C3E6,stroke-width:0px
```

### demo  

<iframe width="720" height="405" src="https://www.youtube.com/embed/PNAnfKmJYbg?si=L9JMaEV26sVZeuwL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### demo code

```js
// ---------------------------------------------------------------------------
//  2. Load feature collection and filter by location,
//
//  Isolate College Lands in Champlain Valley.
// ---------------------------------------------------------------------------

var college_lands = ee.FeatureCollection("projects/conservation-atlas/assets/cadastre/Midd_College_Parcels_withattributes");

print(
  "STEP 2:"
  )
;

Map.centerObject();
Map.setOptions();

Map.addLayer();
```

---

## 3. Define study region  

### template       

```js
// Define study region  

var output = FC
  .union(maxError)       
  .geometry() 
  .bounds(maxError) 
  .buffer(distance, maxError)
;

```

### diagram   

``` mermaid
graph LR
  input[/input\n\nFEATURE COLLECTION/] --> method1[".union()"] ;

  method1 --> method2[".geometry()"];
  method2 --> method3[".bounds()"];
  method3 --> method4[".buffer()"]
  method4 --> output>output\n\nGEOMETRY];

  arg_att1([maxError\n\nNUMBER]) --> method1 ;
  arg_att2([maxError\n\nNUMBER])  --> method3 ;
  arg_att3([distance\n\nNUMBER])  --> method4 ;
  arg_att4([maxError\n\nNUMBER])  --> method4 ;


  style input fill:#E1C3E6,stroke-width:0px
  style method1 fill:#ADD8E6,stroke-width:0px
  style method2 fill:#ADD8E6,stroke-width:0px
  style method3 fill:#ADD8E6,stroke-width:0px
  style method4 fill:#ADD8E6,stroke-width:0px
  style output fill:#E1C3E6,stroke-width:0px
  style arg_att1 fill:#DCDCDC,stroke-width:0px
  style arg_att2 fill:#DCDCDC,stroke-width:0px
  style arg_att3 fill:#DCDCDC,stroke-width:0px
  style arg_att4 fill:#DCDCDC,stroke-width:0px
```

### demo 

<iframe width="720" height="405" src="https://www.youtube.com/embed/-4dzn5gy_ps?si=8uLRWTztpUi20cDJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### demo code  

```js
// ---------------------------------------------------------------------------
// 3. Define study region
// ---------------------------------------------------------------------------

var bounds ;

print(
  "STEP 3:",
  bounds
  )
;

Map.addLayer();
```

---

## 4. Load an image

### template  

```js
// Load an image.  

var output = ee.Image("path")
;
``` 

### diagram 

``` mermaid
graph LR
  method1["ee.Image()"] ;
  arg_att1([path\n\nSTRING]) --> method1;
  method1 --> output>output\n\nIMAGE];

  style method1 fill:#ADD8E6,stroke-width:0px
  style output fill:#C5E6A1,stroke-width:0px
  style arg_att1 fill:#DCDCDC,stroke-width:0px
```

### demo  

<iframe width="720" height="405" src="https://www.youtube.com/embed/PpbGfoXpQcM?si=Gvfs13mb8b53NLrX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### demo code  

```js
// ---------------------------------------------------------------------------
//  4. Load an image
//
//  Import land cover image for Vermont.
// ---------------------------------------------------------------------------

var lc ;

var lc_viz = {
  min: 1,
  max: 8,
  palette: [
    '#ABD998',    //   1. Tree Canopy  
    '#EBF09C',    //   2. Grass/Shrub 
    '#f7f7f7',    //   3. Bare soil
    '#95E6D5',    //   4. Water
    '#525252',    //   5. Buildings    
    '#F7F7F7',    //   6. Roads
    '#cccccc',    //   7. 0ther pavement
    '#F7F7F7',    //   8. Railroads  
    ]
  };

print(
  "STEP 4:", 
  lc,
  lc.projection()
  )
;
  
Map.addLayer();
```

---

## 5. Reclassify an image

### template  

```js
// Reclassify an image.  

var output = input.remap(
  ["o","l","d"],
  ["n","e","w"],
);
```

### diagram  

``` mermaid
graph LR
  input[/input\n\nIMAGE/] --> method1[".remap()"] ;
  arg_att1([old values\n\nLIST]) --> method1;
  arg_att2([new values\n\nLIST]) --> method1;
  method1 --> output>output\n\nIMAGE];

  style input fill:#C5E6A1,stroke-width:0px
  style method1 fill:#ADD8E6,stroke-width:0px
  style output fill:#C5E6A1,stroke-width:0px
  style arg_att1 fill:#DCDCDC,stroke-width:0px
  style arg_att2 fill:#DCDCDC,stroke-width:0px
```

### demo

<iframe width="720" height="405" src="https://www.youtube.com/embed/EOHXIr2g_rs?si=EuzVmAnn9y3Wx1-x" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### demo code

```js
// ---------------------------------------------------------------------------
//  5. Reclassify an image
//
//  Make a binary image of grasslands.  
// ---------------------------------------------------------------------------

var lc_binary ;

print(
  "STEP 5:",
  lc_binary,
  lc_binary.projection()
  )
;

Map.addLayer();
```

---

## 6. Clip image by region 

### template  

```js
// Clip image by region.  

var output = input.clip(region)
;

```

### diagram  

``` mermaid
graph LR
  input[/input\n\nIMAGE/] --> method1[".clip()"] ;
  arg_att1([region or aoi\n\nGEOMETRY, FEATURE or\nFEATURE COLLECTION]) --> method1;
  method1 --> output>output\n\nIMAGE];

  style input fill:#C5E6A1,stroke-width:0px
  style method1 fill:#ADD8E6,stroke-width:0px
  style output fill:#C5E6A1,stroke-width:0px
  style arg_att1 fill:#DCDCDC,stroke-width:0px
```

### demo

<iframe width="720" height="405" src="https://www.youtube.com/embed/vaojIs242gY?si=GhmRQsoOv1NX_06D" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### demo code  

```js
// ---------------------------------------------------------------------------
//  6. Clip image by region
//
//  Isolate grasslands in study region. 
// ---------------------------------------------------------------------------

var lc_binary_bounds ;

print(
  "STEP 6:",
  lc_binary_bounds,
  lc_binary_bounds.projection()
  )
;

Map.addLayer();

```

---

## 7. Select by pixel value 

### template  

```js
// Select a pixel value (make a binary).

var output = input.ee(value)
;
```
### diagram  

``` mermaid
graph LR
  input[/input\n\nIMAGE/] --> method1[".eq()"] ;
  arg_att1([value\n\nNUMBER]) --> method1;
  method1 --> output>output\n\nIMAGE];

  style input fill:#C5E6A1,stroke-width:0px
  style method1 fill:#ADD8E6,stroke-width:0px
  style output fill:#C5E6A1,stroke-width:0px
  style arg_att1 fill:#DCDCDC,stroke-width:0px
```

### demo

<iframe width="720" height="405" src="https://www.youtube.com/embed/64qp__GXrIw?si=_8rJKpWYoRtaH4RF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### demo code  

```js
// ---------------------------------------------------------------------------
//  7. Select by pixel value.
//
//  Invert the grassland binary. 
// ---------------------------------------------------------------------------

var invert_binary ;

print(
  "STEP 7:",
  invert_binary,
  invert_binary.projection()
  )
;

Map.addLayer();
```

---

## 8. Compute distance  

### template  

```js
// Compute distance with a euclidean kernel.   

var output = input
  .distance(
    ee.Kernel.euclidean(radius, "units")
  )
  .reproject("crs")       // When should you comment out this line?
  .unmask(value)          
)


```

### diagram  

``` mermaid
graph LR
  input[/input\n\nIMAGE/] --> method1[".distance()"] ;
  method1 --> method2(["ee.Kernel.euclidean()"])
  arg_att1([radius\n\nNUMBER]) --> method2;
  arg_att2([units\n\nSTRING]) --> method2;
  method2 --> method3[".reproject()"]
  arg_att3([crs\n\nSTRING]) --> method3;
  method3 --> method4(".unmask()")
  arg_att4([value\n\nNUMBER]) --> method4;
  method4 --> output>output\n\nIMAGE];

  style input fill:#C5E6A1,stroke-width:0px
  style method1 fill:#ADD8E6,stroke-width:0px
  style method2 fill:#ADD8E6,stroke-width:0px
  style method3 fill:#ADD8E6,stroke-width:0px
  style method4 fill:#ADD8E6,stroke-width:0px
  style output fill:#C5E6A1,stroke-width:0px
  style arg_att1 fill:#DCDCDC,stroke-width:0px
  style arg_att2 fill:#DCDCDC,stroke-width:0px
  style arg_att3 fill:#DCDCDC,stroke-width:0px
  style arg_att4 fill:#DCDCDC,stroke-width:0px
```

### demo  

<iframe width="720" height="405" src="https://www.youtube.com/embed/8hGTmmWUPyE?si=P6RxzGAYPK44kQIL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### demo code  

```js
// ---------------------------------------------------------------------------
//  8. Compute distance 
//
//  Calculate distance from edge of grasslands towards interior
// ---------------------------------------------------------------------------

var crs = "EPSG: 32145"; // Vermont State Plane North American Datum 1983

var grassland_distance ;

print(
  "Step 8:",
  grassland_distance,
  grassland_distance.projection()
  )
;

// Here is a nice palette that looks good for distance when you reverse it.

var inferno = ["#000004", "#320A5A", "#781B6C", "#BB3654", "#EC6824", "#FBB41A", "#FCFFA4"].reverse();

Map.addLayer();
```

---

## 9. Select by a threshold value

### template  

```js
// Select by threshold value (and output a binary).

var output = input.gt(value)
;
```

### diagram  

``` mermaid
graph LR
  input[/input\n\nIMAGE/] --> method1[".gt()"] ;
  arg_att1([value\n\nNUMBER]) --> method1;
  method1 --> output>output\n\nIMAGE];

  style input fill:#C5E6A1,stroke-width:0px
  style method1 fill:#ADD8E6,stroke-width:0px
  style output fill:#C5E6A1,stroke-width:0px
  style arg_att1 fill:#DCDCDC,stroke-width:0px
```

### demo   

<iframe width="720" height="405" src="https://www.youtube.com/embed/_CuSV5vHSbA?si=WpIP-MX17D833VqR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### demo code  

```js
// ---------------------------------------------------------------------------
//  9. Select by threshold value 
//
//  Isolate all pixels that are greater than 50 meters from grassland edge. 
// ---------------------------------------------------------------------------

var grassland_cores ;

print(
  "Step 9:",
  grassland_cores,
  grassland_cores.projection()
  )
;

Map.addLayer();

```

---

## 10. Zonal overlay

### template  

```js
// Zonal overlay.

var output = input.reduceRegions(
  {
    collection: cutter,
    reducer: ee.Reducer(),
    scale: number,
    crs: "string"
  }
;
```

### diagram  

``` mermaid
graph LR
  input[/"input 'dough'"\n\nIMAGE/] --> method1[".reduceRegions()"] ;
  arg_att1(["collection 'cutter'"\n\nFEATURE COLLECTION]) --> method1;
  arg_att2([reducer\n\nREDUCER]) --> method1;
  arg_att3([scale\n\nNUMBER]) --> method1;
  arg_att4([crs\n\nSTRING]) --> method1;
  method1 --> output>output\n\nFEATURE COLLECTION];

  style input fill:#C5E6A1,stroke-width:0px
  style method1 fill:#ADD8E6,stroke-width:0px
  style output fill:#E1C3E6,stroke-width:0px
  style arg_att1 fill:#E1C3E6,stroke-width:0px
  style arg_att2 fill:#DCDCDC,stroke-width:0px
  style arg_att3 fill:#DCDCDC,stroke-width:0px
  style arg_att4 fill:#DCDCDC,stroke-width:0px
```

### demo  

<iframe width="720" height="405" src="https://www.youtube.com/embed/WxU2h6dt4tM?si=taLFaE_EkMIH4FI0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### demo code  

```js
// ---------------------------------------------------------------------------
//  10. Zonal overlay 
//
//  Find college parcels that overlap core grassland habitat. 
// ---------------------------------------------------------------------------

var college_with_core ;

var college_with_core_filter ;

print(
  "STEP 10:",
  college_with_core.size(),
  college_with_core_filter.size()
  )
;

Map.addLayer();
```

---

## 11. Mask an image.

### template  

__Case 1:__ to use an image to mask another image.

```js
/// Use an image to mask another image.  

var output = input.updateMask(mask)
;
```

__Case 2:__ to use an image to mask itself.  

```js
/// Use an image to mask itself.  

var output = input.selfMask()
;
```

### diagram  

__Case 1:__ to use an image to mask another image.

``` mermaid
graph LR
  input[/input\n\nIMAGE/] --> method1[".updateMask()"] ;
  arg_att1([mask\n\nIMAGE]) --> method1;
  method1 --> output>output\n\nIMAGE];

  style input fill:#C5E6A1,stroke-width:0px
  style method1 fill:#ADD8E6,stroke-width:0px
  style output fill:#C5E6A1,stroke-width:0px
  style arg_att1 fill:#C5E6A1,stroke-width:0px
```

__Case 2:__ to use an image to mask itself.  

``` mermaid
graph LR
  input[/input\n\nIMAGE/] --> method1[".selfMask()"] ;
  method1 --> output>output\n\nIMAGE];

  style input fill:#C5E6A1,stroke-width:0px
  style method1 fill:#ADD8E6,stroke-width:0px
  style output fill:#C5E6A1,stroke-width:0px
```

### demo  

<iframe width="720" height="405" src="https://www.youtube.com/embed/MoqbeTucypc?si=wUyiszjggDRYDoVe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### demo code  

```js
// ---------------------------------------------------------------------------
//  11. Mask an image
//
//  Ignore all pixels that are not grasslands. 
// ---------------------------------------------------------------------------

var grassland_cores_masked;      

print(
  "STEP 11:",
  grassland_cores_masked,
  grassland_cores_masked.projection()
  )
;

Map.addLayer();

```

---

## 12. Make objects   

### template  

```js
// Make objects from a binary image. 

var output = input.reduceToVectors(
  {
    reducer: ee.Reducer(),
    geometry: aoi, // area of interest   
    scale: number,
    geometryType: "string",
    eightConnected: boolean,  
    maxPixels: 1e12, 
    geometryInNativeProjection: boolean 
  }
);
```

### diagram  

``` mermaid
graph LR
  input[/input\n\nIMAGE/] --> method1[".reduceToVectors()"] ;
  method1 --> output>output\n\nFEATURE COLLECTION];

  arg_att1([reducer\n\nREDUCER]) --> method1;
  arg_att2([aoi\n\nGEOMETRY]) --> method1;
  arg_att3([scale\n\nNUMBER]) --> method1;
  arg_att4([geometryType\n\nSTRING]) --> method1;
  arg_att5([eightConnected\n\nBOOLEAN]) --> method1;
  arg_att6([maxPixels\n\nNUMBER]) --> method1;
  arg_att7([geometryInNativeProjection\n\nBOOLEAN]) --> method1;

  style input fill:#C5E6A1,stroke-width:0px
  style method1 fill:#ADD8E6,stroke-width:0px
  style output fill:#E1C3E6,stroke-width:0px

  style arg_att1 fill:#ADD8E6,stroke-width:0px
  style arg_att2 fill:#E1C3E6,stroke-width:0px
  style arg_att3 fill:#DCDCDC,stroke-width:0px
  style arg_att4 fill:#DCDCDC,stroke-width:0px
  style arg_att5 fill:#DCDCDC,stroke-width:0px
  style arg_att6 fill:#DCDCDC,stroke-width:0px
  style arg_att7 fill:#DCDCDC,stroke-width:0px
```

### demo  

<iframe width="720" height="405" src="https://www.youtube.com/embed/wROroakCXQU?si=pyjYezz6Kv6T5HyR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### demo code  

```js
// ---------------------------------------------------------------------------
//  12. Make objects. 
//
//  Identify contiguous regions of grassland. 
// ---------------------------------------------------------------------------

var grassland_objects ;

print(
  "STEP 12:",
  grassland_objects
  )
;

Map.addLayer();
```

---

## 13. Select by location  

### template  

```js
// Select by location.  

var output = input
  .filterBounds(target)
;

```

### diagram  

``` mermaid
graph LR
  input[/input\n\nFEATURE COLLECTION/] --> method2[".filterBounds()"];
  method2 --> output>output\n\nFEATURE COLLECTION];

  arg_att1([target\n\nGEOMETRY or FEATURE]) --> method2;

  style input fill:#E1C3E6,stroke-width:0px  
  style method2 fill:#ADD8E6,stroke-width:0px
  style output fill:#E1C3E6,stroke-width:0px
  style arg_att1 fill:#E1C3E6,stroke-width:0px
```

### demo  

<iframe width="720" height="405" src="https://www.youtube.com/embed/jUoOV2sTm8I?si=BTW_TliZ0Prkdr9-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### demo code  

```js
// ---------------------------------------------------------------------------
//  13. Select by location.
//
//  Isolate grasslands on College Lands. 
// ---------------------------------------------------------------------------

var college_grasslands ;

print(
  "STEP 13:",
  college_grasslands.size(),
  college_grasslands.first()
  )
;

Map.addLayer();
```

---

## 14. Map function over collection  

### template  

```js
// Step 1: Write a function that takes a feature input. 

var myFunction = function(feature) {

  var crs = string ; 
  var area = feature.area(1, crs) ;

  return feature.set("area", area) ;
}

// Step 2: Apply the function to every feature in a collection.   

var output = input.map(myFunction)
;

```

### diagram   

``` mermaid
graph LR
  input[/input\n\nFEATURE COLLECTION/] --> method2[".map()"];
  method2 --> output>output\n\nFEATURE COLLECTION];

  arg_att1([getArea\n\nFUNCTION]) --> method2;

  style input fill:#E1C3E6,stroke-width:0px  
  style method2 fill:#ADD8E6,stroke-width:0px
  style output fill:#E1C3E6,stroke-width:0px
  style arg_att1 fill:#ADD8E6,stroke-width:0px
```

### demo  

<iframe width="720" height="405" src="https://www.youtube.com/embed/GZrXo1CU9Qo?si=Ykvxy3hnyGAbwgcL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### demo code  

```js
// ---------------------------------------------------------------------------
//  14. Compute spatial attributes.
//
//  Calculate area and perimeter-area ratios.
// ---------------------------------------------------------------------------

var getArea = function(f) {
  var crs = "EPSG: 32145"; // Vermont State Plane North American Datum 1983
  var area = f.area(1, crs).divide(4046.86);
  var pa = f.perimeter(1, crs).divide(f.area(1, crs));
  return f.set({"area": area, "pa": pa});
};

var grasslands_with_criteria ;

print(
  "STEP 14:",
  grasslands_with_criteria.size(),
  grasslands_with_criteria.first()
  )
;

Map.addLayer();
```

---

## 15. Select by two attributes

### template  

```js
// Select features from a collection by two attributes.

var output = input.filter(
  ee.Filter.and(
    ee.Filter.first("property","value"),
    ee.Filter.second("property","value")
  )
);

```

### diagram  

``` mermaid
graph LR
  input[/input\n\nFEATURE COLLECTION/] --> method1[".filter()"];
  method1 --> method2(["ee.Filter.and()"])

  method3(["ee.Filter.gt()"]) --> method2;
  method4(["ee.Filter.lte()"]) --> method2;

  arg_att1([property\n\nSTRING]) -->method3;
  arg_att2([value\n\nNUMBER]) -->method3;

  arg_att3([property\n\nSTRING]) -->method4;
  arg_att4([value\n\nNUMBER]) -->method4;

  method2 --> output>output\n\nFEATURE COLLECTION];


  style input fill:#E1C3E6,stroke-width:0px  
  style method1 fill:#ADD8E6,stroke-width:0px
  style method2 fill:#ADD8E6,stroke-width:0px
  style method3 fill:#ADD8E6,stroke-width:0px
  style method4 fill:#ADD8E6,stroke-width:0px
  style output fill:#E1C3E6,stroke-width:0px
  style arg_att1 fill:#DCDCDC,stroke-width:0px
  style arg_att2 fill:#DCDCDC,stroke-width:0px
  style arg_att3 fill:#DCDCDC,stroke-width:0px
  style arg_att4 fill:#DCDCDC,stroke-width:0px
```

### demo  

<iframe width="720" height="405" src="https://www.youtube.com/embed/CNV0PMe_Ofk?si=zXajXqlHxl8HGuWe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### demo code  

```js
// ---------------------------------------------------------------------------
//  15. Select by two attributes
//
//  Identify grasslands that meet both criteria.
// ---------------------------------------------------------------------------

var best_grassland_habitat ;

print(
  "STEP 15:",
  best_grassland_habitat.size(),
  best_grassland_habitat.first()
  )
;

Map.addLayer();
```

---

## 16. Export to EE Asset

### template  

```js
// Export feature collection to Asset.  

Export.table.toAsset({
  collection: FeatureCollection, 
  description: "string", 
  assetId: "string"
  }
);
```

### diagram  

``` mermaid
graph LR
  method1["Export.table.toAsset()"] --> output>output\n\nTASK];

  arg_att1([collection\n\nFEATURE COLLECTION]) --> method1;
  arg_att2([description\n\nSTRING]) --> method1
  arg_att3([assetId\n\nSTRING]) --> method1

  style method1 fill:#ADD8E6,stroke-width:0px
  style output fill:#ADD8E6,stroke-width:0px
  style arg_att1 fill:#E1C3E6,stroke-width:0px
  style arg_att2 fill:#DCDCDC,stroke-width:0px
  style arg_att3 fill:#DCDCDC,stroke-width:0px
```

### demo

<iframe width="720" height="405" src="https://www.youtube.com/embed/93-7gsmORZc?si=rm69ILxOCWuhgxG7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### demo code  

```js
// ---------------------------------------------------------------------------
//  16. Export to EE Asset
//
//  To run workflow with crs condition on distance (Step 10).
// ---------------------------------------------------------------------------

var x_name = "Best_college_grasslands_0930_2023"; 

Export.table.toAsset({
  collection: best_grassland_habitat, 
  description: x_name, 
  assetId: x_name
  }
);
```

---

<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivs 4.0 International License</a>.
