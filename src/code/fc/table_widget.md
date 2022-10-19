So far, we have seen how to print attributes of features and feature collections to the Console. This is helpful when working through a solution and producing an answer to the problem, but less helpful when you want to share the results of your work with a general audience.  

In Earth Engine, you can show attributes of a feature collection as a table _widget_, also called a user-interface (ui) object. In the example below, we still just print the table to the Console, but eventually we will add the table to the map layout.    

The snippet below assumes that you have worked through the [starter script](../apply/starter_script.md) so:    

1. You have a feature collection called large_owners (change this name to whatever you called your final result),  
2. Each feature in this collection has a property called 'OWNER1',
3. Each feature also has a property called 'ACRES' that you want to sort the table by in descending order.    

```js
// --------------------------------------------------------------------------------
// Display attributes of feature collection as a table.
// --------------------------------------------------------------------------------

// In this example, large_owners contains the parts of parcels that overlap corridor with acres as an attribute.

var results = ui.Chart.feature.byFeature(large_owners, 'OWNER1');
results.setChartType('Table');
results.setOptions(
  {
    allowHtml: true,                // Formatted values of cells with html tags will be rendered as HTML.
    pageSize: 50,                   // The number of rows to show in each page.
    frozenColumns: 1,               // The number of columns from the left to 'freeze' when scrolling horizontally. Note that this works in the Console, but not when you open the table in a new browser panel.    
    sort: 'enable',                 // Users can click on a header to sort table by that column.  
    sortAscending: false,           // True = sort ascending; False = sort descending.
    sortColumn: 1                   // Index of column to sort. 0 is first column, 1 is second.  
  }
)
;
results.style().set({stretch: 'both'});

// Print table.

print('Land owners to contact', results);

```
