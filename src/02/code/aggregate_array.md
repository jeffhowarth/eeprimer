![code](../../images/code.png)  

# Inspect unique values of one property

``` js
// ----------------------------------------------------------------------------
// Inspect all the unique values for one property of features in the collection.
// ----------------------------------------------------------------------------

// 1. Get list.  

var value_list = point_collection
  .aggregate_array('name')
  .distinct()
  .sort()
;

// 2. Print list.  

print('list of values', value_list);

```
