# Introduction to the Code Editor

## Objectives

By the end of this lesson, you should be able to:

* write a script in Code Editor
* change the type, center, and zoom level of the base map
* find and read documentation for Earth Engine methods
* use the inspector to find information about locations on the map
* explain relationships between coordinate systems, scale, and extent in map displays

## Prerequisites

You've finished the [Getting Started](../../start/getGEE.md) section and have an approved account.

## Our problem

Our first problem is relatively simple. When we first start the Code Editor, the Map UI looks like this (I've expanded the windows a bit so that the map takes up the whole display):

![initialMap](images/01/01hello.png)

We'd like the map to look like this:

![finalMap](images/01/04hello.png)

To solve this problem, we just need to find a way to change the first map so that it looks like the second one.

## Clicking through a solution

If you have used Google Maps before, or any similar mapping program, then you can probably figure out how to solve this problem by clicking icons provided on the Map UI.

You can use the [Code Editor](https://code.earthengine.google.com/) to try this on your own or you can try following along with me in this video:

<figure class="video_container">
  <iframe width='640' height='360' src="https://www.youtube.com/embed/pTGGHXRBvxQ" frameborder="0" allowfullscreen="true"> </iframe>
</figure>  

Solving this problem by clicking is fine if you only need to solve it once, but it would be pretty hard on the wrists if this was a recurring problem and we had to manually click through a solution every time we wanted to change the default map display. As we get deeper into working with Google Earth Engine, you'll likely find that more times than not, you'll want to look somewhere outside of the USA, or show a region in more or less detail than the default display, or show a region with a basemap other than the traditional Google map.

So let's work out how to solve this problem with code.

## Representing the problem

Let's think about what we actually did when we clicked our way through a solution.

The first button I used was the **pan** tool. With the pan tool, when I clicked on the map and moved the mouse, the map appeared to move in the direction that the mouse moved. That effectively lets us move the map so that we could center the map on Australia.

The next button I used was the **zoom** tool. When I clicked the + button, this made the geographic features on the map appear larger and in greater detail. This let me zoom into the harbor at Sydney.

The third button I used was the **basemap selection** tool. This let me swap out the traditional Google Map for the Satellite image.  

I had to go back and forth a bit between these tools, but ultimately, I only changed three things. In other words, for our problem, we can say that the start and goal states have three conditions that differ:

| **Condition** | **Start** | **Goal** |
| :--- | :--- | :--- |
| **Center of map** | Over USA | Over Sydney |
| **Zoom level** | High in sky | Close to surface |
| **Base Map type** | Map | Satellite |

## Planning a solution

Now let's think about how these differences represent transitions between states. What I'm after here is not how one map is different from another, but rather how one map can *become* a different map if we change things about it.

We start with this map:

![Start](images/01/01hello.png)

If we just change the map center, we make this map:

![NewCenter](images/01/02hello.png)

Then if we take this map and just change the zoom level, we make this map:

![NewZoom](images/01/03hello.png)

And if we take this map and just change the basemap from Map to Satellite, then we'll end up with this map:

![GoalMap](images/01/04hello.png)

Problem solved!

Planning a solution like this is similar to creating a storyboard. The key is to focus on the transitions, on the spaces between each picture on the board. We want to identify what changes from one picture into the next, as shown in this flow diagram:

![storyboard](images/01/01-storyboard.png)

This gives us a rough plan. Now we just need to identify methods in Google Earth Engine that will allow us to implement this plan.

## Change map center  

In the Code Editor, copy and paste this line of code and then click **Run**.

```JavaScript
Map.setCenter(151.215293, -33.856737);
```

That should change the map so that it now looks like this.

![NewCenter](images/01/02hello.png)

## How geographic coordinates works

Before we go much further with technical stuff, I'd like to pause and ask you if you know what the numbers represent in the code above? Can you answer these questions?  

* Which number represents latitude and which represents longitude?
* Why is one of the numbers negative?
* What are the units of these numbers?

If you don't know the answers to these questions, or aren't feeling particularly confident, then you should watch this video.

_insert video_

## How the code works  

If you're brand new to writing code, here's a short video that walks you through how the code works based on the key terms in the table below.

*insert video*

| Concept | Definition | Our example |
| --- | --- | --- |
| *Object* | The thing we are trying to change | Map UI |
| *Method* | Something we do to the object | setCenter |
| *Arguments* | Specific details about the change we want | 151.215293, -33.856737 |
| *Data Type* | The type of data required for the argument | A number with decimals |

You might also notice the semicolon at the end of the line. In this case, it's not required (the code would run without it), but it's good practice to punctuate the end of a statement with a semicolon.

## How to find documentation

You can use the Docs tab of the Code Editor to access documentation about any of the methods in Google Earth Engine. This video will give you a quick demo.

*insert video*

## Change zoom level

According to the documentation that we just explored, we can change the zoom level simply by adding another argument to the setCenter method. Update the code in the Code Editor with this line and then click **Run**.  

```javascript
Map.setCenter(151.215293, -33.856737,20);
```

This should make your map look like the one below.

![NewZoom](images/01/03hello.png)  

## How zoom and scale work

Let's again take a break from writing code and make sure we understand how zoom levels work. Can you answer these questions:

* Does a zoom level of 20 represent a large or small map scale?
* What are the largest and smallest possible map scales in Earth Engine?
* What are differences between zoom level and map scale in Earth Engine?

If you're not sure or not overly confident answering these, then this video aims to help. It also shows you how to use the **Inspector** tool in Code Editor to quickly get information about locations on the map.

_insert video_  

## Change basemap

So now let's write our second line of code. Copy and paste this code into the Code Editor and click **Run**.

```javascript
Map.setOptions('SATELLITE');
```

Now your map should look like the one below.

![GoalMap](images/01/04hello.png)

## Save your script  

Congrats! You're done with this step. Now would be a good time to save your code.

This video shows you how to save a script with the Code Editor.

_insert video_

## Apply what you learned

Now here are some similar problems that you should try to solve based on what you learned in this lesson.

_link to canvas or course builder page_
