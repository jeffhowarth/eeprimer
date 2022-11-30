This is the simplest way to create a panel widget:

```js

var output = ui.Panel();

```

You can style the panel based on the [CSS box model](../../concepts/css_box_model.md). For example, the code below defines the width of the panel (as 20% of the display screen).

```js

var output = ui.Panel({
  style: {
    width: '20%'
  }
});

```
