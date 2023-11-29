## Introduction

This tutorial walks you through a template layout for an app in Earth Engine and shows you how to publish the app so that people who do not have an Earth Engine account or any knowledge of coding can still access your work.  

By the end of the tutorial, you should have an app posted to your Earth Engine users account that looks like the example below.   

<iframe
  src="https://jhowarth.users.earthengine.app/view/wk11appdemo"
  style="width:854px; height:480px"
></iframe>

## Get started

Please make a new file in your repository named 'wk11_app_template.js', copy and paste the header below, and the work through the videos.

```js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  TITLE:   App Design Template 
//  AUTHOR:  Jeff Howarth
//  DATE:    11/28/2023
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
```

---

## Side Panel  

<iframe width="720" height="405" src="https://www.youtube.com/embed/pmhYsVjEAeE?si=bs-EQNBeOps7ll62" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


```js
// ><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><

//  Side Panel

// ><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><

var side_panel 
;

```

---

## Map widget

<iframe width="720" height="405" src="https://www.youtube.com/embed/HHA1wrDw8gE?si=ZE2lwGi4Xpr927U9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js
// ><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><

//  Map Widget 

// ><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><

var map 
;    


```

---

## Split panel  

<iframe width="720" height="405" src="https://www.youtube.com/embed/XEEJOB4ypZI?si=VEGjtwpJk_r5ZP1W" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js
// ><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><

//  Split Panel

// ><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><

var split_panel 
;
```

---

## Initialize layout  

<iframe width="720" height="405" src="https://www.youtube.com/embed/g8NI2T8MBu4?si=-nvyoHcJumuOGtjT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js
// ><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><

//  Initialize Layout

// ><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><
 

```

---

## Recycle map content from script

<iframe width="720" height="405" src="https://www.youtube.com/embed/sMlFfCvFrfA?si=jqDvgjWiQCfSGHyM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js
// ><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><

//  Recycle map content from script.

// ><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><

```

---

## Labels

<iframe width="720" height="405" src="https://www.youtube.com/embed/OOxQsyK6sTs?si=swMWucrVM37D1G_P" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js
// ><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><

//  Labels 

// ><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><

// Write a title for your map.

var title ;

// Write a short description of the purpose of the map. 

var abstract ;

// Provide instructions for using the map. 

var instructions ;

// Provide a link to a narrative that helps people interpret what the map shows. 

var storyLink ;

//  Give credit to yourself and the course

var credits ;

var source ;
```

## Type taxonomy

<iframe width="720" height="405" src="https://www.youtube.com/embed/Vac_DFKuszo?si=D30jb1-_DL0FNP7T" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js
// ><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><

//  Define type taxonomy

// ><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><

// Dictionary for typeface (common styles for all labels)

var typeface 
;

// Dictionary for visual hierarchy.

var hierarchy 
;

```

---

## Select widget  

<iframe width="720" height="405" src="https://www.youtube.com/embed/jdaELL-F6LE?si=6ErxIyrVrLObKkH0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js
// ><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><

//  Select Widget

// ><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><

var select_style 
;

var patterns = {
  'Flame': [121.454780, 31.222945, 6],
  'Aurora': [129.869311, 34.755374, 6],
  'Holiday lights': [75.171582, 62.896614, 6],
  'Red giant': [-103.072580, 48.261784, 6],
  'Political lines': [74.341854, 30.785147, 6]
};


var select_pattern = ui.Select({
  items: Object.keys(patterns),
  placeholder: 'Explore a pattern',
  style: select_style,
  onChange: function(key) {
    map.setCenter(patterns[key][0], patterns[key][1], patterns[key][2]);
  }
});

// side_panel.insert(3, select_pattern);
```

---

## Final touches

<iframe width="720" height="405" src="https://www.youtube.com/embed/4vMDh39kBYI?si=jzHqtruZbAW5Z_RA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

---

## Publish app  

<iframe width="560" height="315" src="https://www.youtube.com/embed/ME8waA6MCFU?si=U_wRutB8Limy1x2p" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


---

<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivs 4.0 International License</a>.
