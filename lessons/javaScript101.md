## JavaScript 101  

_Adapted from Dave Thau's [Earth Engine 101](https://docs.google.com/presentation/d/1F3Sdk_IbupHhIwB8JrWdlLud9bP9JQ4qqPMjUJ42uzc/pub?start=false&loop=false&delayms=3000)._

### Comment  

```js
// Line comments start with two forward slashes. Like this line.

/* Multi line comments start with a forward slash and a star,
and end with a star and a forward slash. */
```

### Variable

```js
// Variables are used to store objects, and are defined using the keyword var.
var the_answer = 42;

// String objects start and end with a single quote.
var my_variable = 'I am a string';

// String objects can also start and end with double quotes.
// But don't mix and match them.
var my_other_variable = "I am also a string";

// Statements should end in a semi-colon, or the editor complains.
var test = 'I feel incomplete...'

// Variable names cannot contain spaces.
// Two good naming conventions are:  

// snake_case
var this_will_work = 'snake_case';

//  camelCase
var thisWillAlsoWork = 'camelCase';
```

### Pass arguments to a function

```js
// Parentheses are used to pass parameters to functions.
print('This string will print in the Console tab.');

// Variables can be passed as parameters to functions.  
print(my_variable);

// Use commas to pass more than one parameter to a function.  
print('this was my first variable', my_variable);

```

### List

```js
// Use square brackets to define a list object.
var my_list = ['eggplant', 'apple', 'wheat'];

// Use square brackets after list object to select items within a list.
// The zero index refers to the first item in the list.
print(my_list[0]);

// Use periods to call an object's methods.
var my_list_reversed = my_list.reverse()
print(my_list_reverse);

```

### Dictionary

```js
// Curly brackets (or braces) can be used to define dictionaries
// (key:value pairs).
var my_dict = {'food':'bread', 'color':'red', 'number':42};

// Square brackets can be used to access dictionary items by key.
print(my_dict['color']);

//Or you can use the dot notation to get the same result.
print(my_dict.color);
```

### Custom functions  

```js
// Functions can be defined as a way to reuse code and make it easier to read.
var my_hello_function = function(string) {
  return 'Hello ' + string + '!';
};
print(my_hello_function('world'));
```

### Modules

```js
// Modules can contain functions and variables that can be used by multiple different scripts.  

// To access a module, first call the module as a variable
var tool = require('users/jhowarth/GG150:modules/js101.js');

// Then you call functions as methods of this object.

tool.affirmation('friend');

// Replace 'friend' with your name and run again.
```
