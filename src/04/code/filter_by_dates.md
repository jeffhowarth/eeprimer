![code](../../images/code.png)  

# Filter by dates       

An image collection often contains a _time series_, or a number of observations that are collected at some time interval over a duration of time. The interval between observations represents the _temporal resolution_ of the collection and the duration of time represents the _temporal extent_.  

In most cases, you will want to work with a subset of images in an image collection based on a _time window_ defined by your research question. You can _filter_ the collection based on time constraints in a number of ways.  

## Filter by date range  

The ee.Filter.date() method will filter an image collection by a start and end date. The start date is _inclusive_ and the end date is _exclusive_. This means that a record with the start date will be included in output, but a record that matches the end date will not. Both dates are strings in the format 'YYYY-MM-DD'.  

For example, this snippet will filter an image collection for all records in January 2000.

```js
// Filter image collection with start and end dates.  

var output = input                                     // Name of output and input
  .filter(                                          // Call the filter method.
    ee.Filter.date('2000-01-01', '2000-02-01')      // Call this particular filter with start and end dates.
  )
;

```

This method is used so frequently that EE provides a shorthand.  

```js
// Shorthand for filtering image collection with start and end dates.  

var output = input.filterDate('2000-01-01', '2000-02-01');

```

## Filter by calendar range  

Often your research question will concern a season or portion of time that recurs every year. For example, to study sea conditions during hurricane season in the Atlantic, you would could filter for records between August and October. If you are studying one hurricane season, you could use the date range method. But if you wanted to make comparisons between hurricane seasons, then the date range method becomes laborious.  

For seasonal windows, it is often helpful to use the ee.Filter.calendarRange() method. This takes three arguments: start, end, and calendar unit. The first two are integers. The last is string. And to make things fun, the start and end arguments are now both _inclusive_.  

For example, this snippet filters an image collection for all records between the years 2000 and 2010. Because the end number is inclusive, 2010 records will be returned in the output.    

```js
// Filter image collection by year calendar range.  

var output = input
  .filter(ee.Filter.calendarRange(2000, 2010, 'year'))

```

This snippet filters an image collection for all records between August and October of any year. Because the end number is inclusive, October records will be returned in the output.  

```js
// Filter image collection by month calendar range.  

var output = input
  .filter(ee.Filter.calendarRange(8, 10, 'month'))

```

You can also chain these filters together. This snippet filters an image collection for all records between August and October for the years between 2000 and 2010.  

```js
// Filter image collection by year and month calendar ranges.  

var output = input
  .filter(ee.Filter.calendarRange(2000, 2010, 'year'))
  .filter(ee.Filter.calendarRange(8, 10, 'month'))

```
