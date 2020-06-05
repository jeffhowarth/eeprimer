# Implement plan with code  

![plan](images/01-storyboard.png)

**_this page is not complete_**

## Change map center  

In the Code Editor, copy and paste this line of code and then click **Run**.

```JavaScript
Map.setCenter(151.215293, -33.856737);
```

This video walks you through this step:

*insert video*

## How the code works

If you're brand new to writing code, here's a short video that walks you through how the syntax works.

*insert video*

| Concept | Definition | Our example |
| --- | --- | --- |
| *Object* | The thing we are trying to change | Map UI |
| *Method* | Something we do to the object | setCenter |
| *Arguments* | Specific details about the change we want | 151.215293, -33.856737 |
| *Data Type* | The type of data required for the argument | A number with decimals |

You might also notice the semicolon at the end of the line. In this case, it's not required (the code would run without it), but it's good practice to punctuate the end of a statement with a semicolon.

## How to find documentation

You can access documentation about any of the methods in Google Earth Engine through the Docs tab of the Code Editor. This video will give you a quick demo.

*insert video*

Let's look at how this code works. To start, let's look at the **API documentation** that Google provides through the Code Editor.

Look in the panel on the upper left of the Code Editor and click on the **Docs** tab.

In the search box, type **setOption**. This should filter the documentation list so that it only shows methods that contain the phrase "setOption".

![setOptionsDocs](../images/setOptionsDocs.png)

Let's click on the item that we used in our code: **Map.setOptions**. You should get this documentation:

![setOptionsDocsWindow](../images/setOptionsDocsWindow.png)

## How to read documentation

*Insert video*

## Change zoom level

According to the documentation that we just explored, we can change the zoom level simply by adding another argument to the setCenter method. Replace the code in the Code Editor with this line and then click **Run**.  

```javascript
Map.setCenter(151.215293, -33.856737,20);
```

This video walks you through this.

## Change basemap

Here's our second line of code. Copy and paste this code into the Code Editor and click **Run**.

```javascript
Map.setOptions('SATELLITE');
```
This video walks you through it.

## Save your script  

I know it's only two lines of code, but you might as well save it so that you can reuse it later.

This video shows you how to save a script with the Code Editor.
