![apply](../../images/apply.png)  

#The Shortest Route for the Longest Haul        

##Introduction  

Currently, the longest non-stop commercial flight connects Singapore (SIN) to Newark (EWR). Does the flight path follow the great circle route between the two airports? In theory, this route represents the shortest geographic distance between these two locations.       

To begin to answer this question, please create a map that shows the great circle route between the two airports. Please copy and paste the starter script (below) into the code editor and then save it to your repo. Please write one or more lines of code to 'answer' each prompt.  

We will discuss both your solution (script) and our original question (does the flight follow the great circle route?) in our next class meeting. At that time, I will also show you how to submit your scripts and document your coursework this semester.      

##Starter script  

```js
//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  Problem:      The longest haul  
//  Date:         Today's date
//  Student:      Your name here please
//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//  Construct point geometry objects for SIN and EWR.   

//  Construct line geometry object between the two airports.  

//  Calculate the length of the route.  

//  Make a feature called 'longest_haul' with the line geometry and the distance of the flight as an attribute.  

//  Inspect the result by printing to Console.

//  Center the map as follows:  
//    latitude: -0.9678795804756186  
//    longitude: -82.83931467161779  
//    zoom level: 3  

//  Change the base map to hybrid.

//  Add the line feature to the map, display it with red, and label the layer 'Longest haul route'.

```

##Airport support      

To help you find the airports, here is a screen shot that shows the location of SIN:  

![SIN](https://geography.middlebury.edu/GEOG0150/images/01/SIN.png)

And here is another that shows the location of EWR.

![EWR](https://geography.middlebury.edu/GEOG0150/images/01/EWR.png)

##Code key  

To solve this problem, please reference the following _new_ code snippets:      

- Get map center  
- Get zoom  
- Set map center and zoom  
- Construct point geometry  
- Add layer to map  
- Center map on object  
- Construct a feature  
- Construct line geometry  
- Calculate line length  
- Convert units  

##Concept key  

To understand these code snippets, please reference the following _new_ concepts:  

- Geographic frameworks  
- Vector model  
- Transformations  
- Cartographic modeling  

##Discussion    

- [Drawing lines on Mercator](https://geography.middlebury.edu/GEOG0150/images/01/_for_discussion.pdf){target=_blank}  
- [The True Size of](https://www.thetruesize.com/){target=_blank}
- [SIN-EWR on sphere](https://geography.middlebury.edu/GEOG0150/images/01/greatCircleRoute.png){target=_blank}
- [SIN-EWR last weekend](https://geography.middlebury.edu/GEOG0150/images/01/SIN-EWR.png){target=_blank}  
- [Geographic friction](https://earth.nullschool.net/#current/wind/isobaric/250hPa/orthographic){target=_blank}
- [EWR-SIN last weekend](https://geography.middlebury.edu/GEOG0150/images/01/EWR-SIN.png){target=_blank}  
- [Geopolitical friction](https://www.flightradar24.com/blog/russian-roundabout-how-flights-are-avoiding-russian-airspace/){target=_blank}
