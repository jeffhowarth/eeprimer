/*

  TITLE:   Intro to labels
  AUTHOR:  Jeff Howarth
  DATE:    3/28/2022

  Purpose: Introduce label widgets and how to style them.
*/

// ---------------------------------------------------------------
// Introduction to labels
// ---------------------------------------------------------------

var testLabel = ui.Label(
  {
    value: 'The Quick Brown Fox Jumps Over The Lazy Dog!',
    // targetUrl: 'https://geog0150.github.io/s22/',
  }
);

testLabel.style().set(
    {
      // color: 'red',
      // backgroundColor: '#cccccc',
      // height: '100px',
      // width: '100%',
      // padding: '10px',
      // margin: '20px',
      // border:'4px solid orange',
      // fontSize: '24px',
      // fontWeight: 'bold',
      // fontFamily: 'Helvetica, sans-serif',
      // textAlign: 'left',
      // textDecoration: 'underline',
      // whiteSpace: 'wrap',
      // shown: false,
      // stretch: 'horizontal'
    }
);

print(testLabel);

// Map.add(testLabel);

// testLabel.style().set(
//   {position: 'bottom-left'})
//   ;


//  --------------------------------------------------------------
//  RESOURCES
//  --------------------------------------------------------------

//  CSS BOX MODEL
//  -------------

//  https://www.w3schools.com/css/css_boxmodel.asp

//  CSS FONTS
//  ---------

//  https://www.w3.org/Style/Examples/007/fonts.en.html
