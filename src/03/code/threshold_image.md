![code](../../images/code.png)  

# Threshold an image  

This happens when you apply a "true or false" criterion to a dataset.  

For example: true or false, x is equal to 0?  

The idea is that you ask this question for every cell in a raster and the computer answers the question by giving that cell either a 1 (if true) or 0 (if false). Often, threshold criteria are familiar math criteria.    

| Math criterion            | Method  |
| :---:                     | :---:   |
| equal to                  | .eq()   |  
| not equal to              | .neq()  |  
| greater than              | .gt()   |  
| greater than or equal to  | .gte()  |  
| less than                 | .lt()   |  
| less than or equal to     | .lte()  |  

The example below shows the syntax for the 'equal to' criterion. If the input is a binary raster, the output will be the inverse.  

```js
// Threshold image by equality criterion.  

var output_image = input_image.eq(0);

```
