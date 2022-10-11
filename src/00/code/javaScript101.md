![code](../../images/code.png)  

# JavaScript 101    

The Code Editor lets you work with Earth Engine by writing code in JavaScript. Like any language, JavaScript has a vocabulary and grammar that you will learn through practice. This page introduces some key terms, syntax, and contexts for writing code with JavaScript.  

Like most of the pages tagged with ![code](../../images/code.png) in this primer, this page contains code snippets that you can copy and paste into the code editor to see their effects. To do this, open the [code editor](https://code.earthengine.google.com/){target=_blank}, copy and past the code snippets into it, and click RUN to execute the snippet. You can also save you script as a file by clicking the SAVE button. The file name should not have spaces and should end with .js to mark that it is a JavaScript file (e.g. **javascript101.js**).          

### Scripts  

A __script__ is a sequence of statements that can be executed (when you 'run' the script).  

### Lines     

A __line__ is the basic organizing unit of a script. Think of a line like a ruling on a sheet of paper, while a statement is like the sentence that you write on the ruling. Each line has a number, shown on the left side of the text editor panel. These line indexes are helpful for troubleshooting code because if you make an error the code editor will usually tell you the line number that tripped it up.      

### Comments  

A __comment__ tells the computer: _please ignore this_. You often use comments to document your code and write little notes to yourself and to people who may read and want to reuse your code. They are like putting notes in the margins of a book without affecting the content of the book or like the director's commentary of a movie that can be muted when you watch.  

A __line comment__ tells the computer not to execute anything that follows two forward slashes on a line. A __multi-line comment__ tells the computer not to execute anything from a defined beginning and ending which may span multiple lines.           

```js
// LINE COMMENTS start with two forward slashes. Like this line. The computer won't execute anything on this line that follows the slashes.

/* MULTI LINE COMMENTS start with a forward slash and a star and end with a star and a forward slash.

The computer won't execute anything between the stars,
even
if
your
comment
spans
many

many

lines  
.
*/
```

### Script header      

It is good practice to begin every script with a __header__ that states a title, your name, the date, and a brief description of the script's purpose. To do this, you can use either a line comment or multi-line comment.  

Here is an example of a header with line comments. Note how each line begins with two forward slashes.   

```js
//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  TITLE:        Javascript 101  
//  NAME:         Your name here please
//  DATE:         Today's date
//  PURPOSE:      Getting started with JavaScript    
//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

```

Here is an example of a header with a multi-line comment.      

```js
/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  
    TITLE:        Javascript 101  
    NAME:         Your name here please
    DATE:         Today's date
    PURPOSE:      Getting started with JavaScript  
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
```
Either method is fine. The most important thing is to remember to start each script with a header.  

### Statements, objects, and variables       

When you write a script, you write __statements__ to create and manipulate different kinds of __data objects__. An object __class__ is an abstract template, while an __instance__ is a manifestation of it. For example, the concept of 'a book' is like an object class, while 'the book sitting next to your bed' is an instance of this class. Sometimes you hear the words "type" and "token" to describe the same distinction.       

A common statement involves first creating a container to store something and then putting an instance of a class into the container. In JavaScript, the container is called a __variable__. A variable can store different kinds of objects and you can name the variable (almost) anything that you want.            

```js
// This statement creates the variable age_daughter to store an instance of a NUMBER object.

var age_daughter = 4;

// This statement creates the variable age_son to store an instance of a STRING object. A string starts and ends with a single quote.

var age_son = 'six years old';

// A string object can also start and end with double quotes,
// (but don't mix and match them).

var name_daughter = "isabel";

// This variable stores a set of strings as a LIST object that is defined by square brackets.   

var kid_names = ['Aldo', 'Isabel'];

// This list stores a set of numbers.  

var kid_ages = [6,4];

// Curly brackets (or braces) can be used to define DICTIONARIES, or a set of KEY:VALUE pairs.

var kidStats = {'name':'Aldo', 'age':6, 'birthplace':'Middlebury, VT'};

```
### Statement syntax  

If you examine these simple statements, you might recognize some basic rules of syntax.  

_1. How do you define a variable?_  

In JavaScript, the statement starts with the keyword **var** followed by the equal sign. That clause says 'create a variable named...'.  

_2. What do you notice about the variable names?_  

They follow a simple rule: _The name of a variable cannot contain spaces._ To honor this rule, you can follow two naming conventions for variables.    

```js
// An example of the snake_case.

var this_will_work = 'snake_case';

//  An example of the camelCase.

var thisWillAlsoWork = 'camelCase';
```

_3. What defines the object class of the instance?_    

This is subtle, but important. The object class is coded by the format of the text in the statement.      

| OBJECT CLASS  | FORMAT                | EXAMPLE             |
| :--- :        | :---:                 | :---:               |
| NUMBER        | _plain old number_    |     4               |   
| STRING        | ' ' <br>" "           | 'isabel' <br>"kid's"|    
| LIST          | [ ]                   | ['aldo', 'isabel']  |  
| DICTIONARY    | {:}                   | {'name': 'aldo'}    |  

_4. How does each statement end?_  

Do you see that little thing at the end of each statement winking at you? This is a mark of good coding practice: _Statements should end in a semi-colon_.

```js  

// Statements should end in a SEMI-COLON, or the editor complains.

var dangling = 'I feel incomplete...'  
var complete = 'This feels better, thanks.';

```

In the above example, the editor will flag the line with a little italic _i_ when you forget the semi-colon, but you may not notice this because the code will often still run. As you learn to write more complicated statements, however, forgetting to include a semi-colon can torpedo your code from executing. So it is good practice to think of the semi-colon as the period of a sentence and always end with it.  

### Code documentation  

It is good practice to write comments to document every statement in your code. This will help you read your code if you put a script down for a period of time and return to it later. It will also help other people read and borrow from your code or help you troubleshoot errors.    

In this course, I will ask you to follow three principles of good coding practice with respect to documenting your scripts.  

_1. Write a comment for each statement that briefly describes its purpose._

_2. Always document code with complete sentences that end with periods._  

_3. Write concise 1-2 sentence statements, not long-winded paragraphs._   

### Print to console panel  

As you write code, it is good practice to check your work as you go. A common way of doing this is to __print__ variables and then look at the result in the Console panel of the Code Editor.  

```js
// Use print function and pass a string to it by enclosing in parentheses.  

print('This string will print in the Console panel.');

// You can also pass a variable to the print function.   

print(kid_names);

// Use commas to pass more than one item to the print function.

print("my kids", kid_names);

```

### Functions   

The print command is an example of a __function__, or something more like a verb than a noun. A function can take arguments and deliver results. As illustrated by the print function, you pass arguments to a function by enclosing them in parentheses.  

### Object methods    

Every object class will have a set of functions that you can call to manipulate instances of that object class. These are often called _methods_. Here is an example for a list object.    

```js
// Use a period and parentheses to call a METHOD of an object (a function that works with an object).

var kids_reversed = kid_names.reverse();
print('Kids in reverse order', kids_reversed);
```

### Earth Engine objects  

All the examples above deal with native JavaScript objects and methods. Earth Engine provides a large set of additional objects and methods for working with geographic information. In the chapters that follow, you will learn how to use JavaScript to access these tools. The syntax and grammar for using these tools are largely the same as what we have discussed above.  

If this all feels new and slightly overwhelming, please do not stress out. It will become familiar through practice.  

_Adapted from [Earth Engine 101](https://docs.google.com/presentation/d/1F3Sdk_IbupHhIwB8JrWdlLud9bP9JQ4qqPMjUJ42uzc/pub?start=false&loop=false&delayms=3000) by [Dave Thau](https://www.worldwildlife.org/experts/dave-thau)._   
