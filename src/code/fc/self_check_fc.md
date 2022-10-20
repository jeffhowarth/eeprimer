##Introduction  

You should learn and employ strategies to self-check your work while you are working on a solution. This involves making requests to visualize a method's output and either checking the result with known benchmarks or critically thinking: does this look right?  

##Print feature collection to console  

For feature collections, you can print information to console. For example, the following code will print the first feature in the collection and the number of features in the collection.  

```js
// Print information about a feature collection.  

print(
  'fc check',           // Label to print to console.
  fc.first(),           // First record in collection.
  fc.size()             // Number of records in collection.
  )
;
```

##Print nominal values of one property to console

You can run the code above to see the properties associated with each feature in the collection. With this information, you can then summarize the values for one property.

When the property contains _nominal values_ (words), you can quickly print a list of all the unique values.  

```js
// Print unique values of a specified property.  

print(
  'fc property check',                // Label to print to console.
  fc.aggregate_array('property name') // Return all the values for this property.
    .distinct()                       // Filter to return only unique values.
    .sort()                           // Sort the list alphabetically.
  )
;
```

##Print numerical values of one property to console

When the property contains _numerical values_, you can quickly print a summary statistic for a specified property.  

```js
 print(
   'fc numerical property check',          // Label to print to console.
   fc.aggregate_min('property name'),      // Print min value of specified property.
   fc.aggregate_max('property name')       // Print max value of specified property.
  )
;
```

##Add collection as layer to map   

To quickly add a feature collection as a map layer, you can define the viz parameters as an empty object and still label the layer and define the _shown_ parameter as false (or 0).  

```js
// Add feature collection to map as a layer for a quick check.

Map.addLayer(fc, {}, 'fc quick check', 0);

```

##Comment out after checking  

After you have used these methods to check your work, you should comment out the lines to prevent them from running each time you run your code. This will help your code run more efficiently.  
