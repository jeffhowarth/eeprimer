![code](../../images/code.png)  

# Inspect image collection     

This pattern is similar to that for working with feature collections. An image collection usually contains a lot of images, so if you try to inspect the collection with the print() method, EE will often throw you an error because your are asking it to do too much work. Imagine if you asked a librarian to go into the stacks and bring you every issue that has ever been published by a journal or magazine. They too would likely turn red and balk at the request.  

So to politely get a sense of an image collection's contents, a good strategy is to print the first record and the number of records in the collection.   

```js
// Inspect first record and print size (number of images) of collection.

print(
  'label',              // Label for this request that is printed to Console.
  input.first(),           // The first record in the image collection.
  input.size()             // The number of records in the image collection.  
  );

```
