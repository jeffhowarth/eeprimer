## Introduction  

This short tutorial introduces User Interface (UI) widgets in Earth Engine. By the end of the tutorial, you should understand how to create and style a label widget and how to place the widget onto a Map.    

To get started, please make a new file in your repository called 'wk11_hello_widget.js', copy the header below, and paste it into the new file. Then work through the videos below.  

_Please note that when I recorded the videos I had been thinking of including a third video on panel widgets, but subsequently decided to save the panel tutorial for the worked out example._  

```js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//  TITLE:   hello_widget.js
//  AUTHOR:  Jeff Howarth
//  DATE:    11/28/2023
//  PURPOSE: Introduce label widget and how to style it. 

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
```

---  

## Label widget  

<iframe width="720" height="405" src="https://www.youtube.com/embed/V9Ku54mEAEg?si=WmJhtnX7kTviZVWm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js
// ><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><

//  Introduction to Labels 

// ><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><

var test_label 
;

```

---

## Styling a label widget

<iframe width="720" height="405" src="https://www.youtube.com/embed/nxQZgHwhreM?si=OyfI-RDNUzIaTs0U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```js

// Style dictionary for label widget. 

var label_style = 
    {
      // color: 'red',
      // backgroundColor: '#cccccc',
      // height: '100px',
      // width: '100%',
      // padding: '10px',
      // margin: '20px',
      // border:'4px solid orange',
      // fontSize: '24px',
      // fontWeight: 'bold',
      // fontFamily: 'Helvetica',
      // textAlign: 'left',
      // textDecoration: 'underline',
      // whiteSpace: 'wrap',
      // shown: false,
      // stretch: 'vertical'
    }
  ;

```

---

## Resources  

* [CSS Box Model](https://www.w3schools.com/css/css_boxmodel.asp){target=_blank}
* [CSS Fonts](https://www.w3.org/Style/Examples/007/fonts.en.html){target=_blank}
* [HTML Color Names](https://htmlcolorcodes.com/color-names/){target=_blank}

---  

<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivs 4.0 International License</a>.
