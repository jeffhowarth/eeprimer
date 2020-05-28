### 1. Start with a blank slate

Let's start clean so that we can see what our code does one line at a time.  

Go ahead and reload the Code Editor (you can [click here](https://code.earthengine.google.com/)). You can ignore the warning that you haven't saved your script (it's only two lines and we're about to write them again so you don't have much to lose).

You should see something like this:

![codeEditor](../images/codeEditor.png)

### 2. Explore the UI controls

UI is a short way of saying "User Interface," which is a short way of saying "stuff the program lets you interact with".  

In the upper right of the Map window, you'll see two buttons that allow you to toggle the base map.

![baseMapControls](../images/baseMapControls.png)

If you click around on these buttons, you'll see you can change the base map that gets displayed. You should have four options:

- Map
- Terrain (depicts mountains)
- Satellite
- Satellite with labels unchecked

### 3. Set the base map

Let's change the base map so that it displays the Satellite image without the labels. Copy and paste this code into the Editor and then click **Run**.

```javascript
Map.setOptions('SATELLITE');
```
Your map should now display the Satellite base map and look like this:

![satelliteBaseMap](../images/satelliteBaseMap.png)

### 4. Find documentation

Let's look at how this code works. To start, let's look at the **API documentation** that Google provides through the Code Editor.

Look in the panel on the upper left of the Code Editor and click on the **Docs** tab.

In the search box, type **setOption**. This should filter the documentation list so that it only shows methods that contain the phrase "setOption".

![setOptionsDocs](../images/setOptionsDocs.png)

Let's click on the item that we used in our code: **Map.setOptions**. You should get this documentation:

![setOptionsDocsWindow](../images/setOptionsDocsWindow.png)

### 5. How to read documentation



### How the code works

If you're brand new to writing code, then let's take a moment to talk through how it works. There are four key concepts at play here:

> An **object** that we're working with.  
> A **method** applied to the object.  
> An **argument** for the method.  
> A **data type** for the argument.   

In our code, we call on the *Map* **object**, apply the *.setOption* **method**, provide the  *SATELLITE* **argument** in parentheses, and define the *string* **data type** with single quotes.

You might also notice the semicolon at the end of the line. In this case, it's not required (the code would run without it), but it's good practice to punctuate the end of a statement with a semicolon.

### Practice

Here's a list of the base maps that Google provides:
> ROADMAP  
> SATELLITE  
> HYBRID  
> TERRAIN  

Try changing the argument in our code to display the base map that looks like this:

*insert image*
