```js
//  Classify image with defined breaks.

var output = input
  .gte(first_threshold)
  .add(input.gte(second_threshold))
  .add(input.gte(third_threshold))
;


```
