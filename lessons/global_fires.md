## Global fires  

### Background  

![OK](images/rwh-fire02.jpg)

_Figure 1: OK in Davenport, CA. Source: Bill Henry_

[Billy app](https://jhowarth.users.earthengine.app/view/billy-app)

### Global fire explorer

![Global fires](images/global_fires.jpg)  

_Figure 12. [Global fire explorer app](https://jhowarth.users.earthengine.app/view/eeprimer-global-fire-explorer)_

> _Discuss global fire patterns._  

> _What Earth Engine methods look new in this app?_  


1. Load, filter, select, reduce, FIRMS.  
2. Burn severity ratio (or index)  
3. Delta BSR  
4. Classify continuous data  
5. Legend for classified data. 


```js
var burnRatioSentinel = function(image) {
  return image.normalizedDifference(['B8','B12']);
};
```

```js

var classify_dNBR = function() {
  _.class_dNBR = _.delta_nbi
    .gte(-0.25)
    .add(_.delta_nbi.gte(-0.1))
    .add(_.delta_nbi.gte(0.1))
    .add(_.delta_nbi.gte(0.27))
    .add(_.delta_nbi.gte(0.44))
    .add(_.delta_nbi.gte(0.66));
};
```
