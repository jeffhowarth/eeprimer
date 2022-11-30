You can create label widgets to place titles, instructions, credits, and other verbal information on maps and panels.  

The code below illustrates the two basic steps to creating label widgets:  

1. Define the style parameters for the label. Many of the style parameters refer to the [CSS box model](../../concepts/css_box_model.md).   

2. Initialize the label widget and apply the style parameters.  

```js

//  Initialize style parameters for title labels.
//  Name the variable: title_style

var output_style = {
    fontSize: 'string',           // Size in unis pixels as string ('24px')
    fontWeight: 'string',         // Use 'bold' for titles, otherwise you can comment out.
    padding: 'string',            // Provides breathing room with css box model. Size in pixels as string ('4px')
    whiteSpace: 'pre',            // If you want to define line breaks manually with \n, otherwise comment this out.  
    backgroundColor: 'string'     // Default is white. Comment out if white works. Change if you want to add highlighter effect.

  }
;

//  Initialize a label widget and apply title_style.
//  Name the variable: title

var output_label = ui.Label({
  value: 'the label content',     //  Content of the label
  style: output_style             //  Style defined in step above.
  // targetUrl:,                  //  URL as string if you want a hyperlink, otherwise comment out.     
  }
);

```

You can then display a label widget either by printing to console or adding to a map or panel widget.  

This will print the label to the Console of the Code Editor:

```js

print(output_label);

```

This will add the label to a panel widget. Adding to a map widget follows same


```js
//  Add label to panel widget.

some_panel_widget
  .add(output_label)

```

You can chain the .add() methods to add more than one widget to the panel.  
