// Lab 9 - Libraries and jQuery
// lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page
// Requirements: jQuery must be loaded for this script to work.
// Author: Daniel
// Date:5/12/25

// Constants

// Functions
// add button to challenge section  
$("#challenge").append("<button id='button-challenge'>challenge button</button>");
$("#problems").append("<button id='button-problems'>problems button</button>");
$("#reflection").append("<button id='button-reflection'>reflection button</button>");
$("#results").append("<button id='button-results'>results button</button>");

// add a click listener to the challenge button
$("#button-challenge").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
});
$("#button-problems").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#problems").toggleClass("special");
});
$("#button-reflection").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#reflection").toggleClass("special");
});
$("#button-results").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#results").toggleClass("special");
});

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
    // some code here
    // return results;
  }
  
  function main() {
    console.log("Main function started.");
    // the code that makes everything happen
  }
  
  // let's get this party started
  main();
  