
![code](../../images/code.png)

# Get map center

When you first open the [Code Editor](https://code.earthengine.google.com/){target=_blank}, the Map UI will be centered on a point in  Buffalo Valley, OK. You can retrieve the coordinates of a map's center with this:  

```js
// Get map center.

var center = Map.getCenter();
print('Center point', center);
```  

Please copy and paste the above code snippet into the Code Editor, then run it, and try to answer the questions below.

<details>
<summary><b>Check your understanding:</b></summary>
<br>
Please look at the Console Panel.<br>    
<br>
<li>Which number represents latitude and which represents longitude?</li>
<br>
<li>What does it mean if a number is negative?</li>
</details>

Please write down the coordinates that you printed to the Console.  

Now click the _pan_ button (the little glove in the upper left of the Map UI), then click the map and, while holding your click, drag towards your left.  

Now run the code again and try to answer the questions below.

<details>
<summary><b>Check your understanding:</b></summary>
<br>
Again, please look at the Console Panel.<br>    
<br>
<li>Which number changed the most when you panned?</li>
<br>
<li>How did it change?</li>
<br>
<li>Do you think you are moving the map when you pan, or are you moving the window through which you are looking at the map?</li>
</details>   
