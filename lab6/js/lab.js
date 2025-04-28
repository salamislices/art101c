// Lab 6: Objects and Arrays
// Author: Daniel Freysson
// Date: 4/28/25

// Define Variables
let myTransport = ["car", "bicycle", "bus", "walking"];

// Create an Object for Main Ride
var myMainRide = {
  make: "Toyota", 
  model: "Celica", 
  color: "Silver", 
  year: 2000, 
  age: function() 
    {return 2025 - this.year;}
  } 

//output
document.writeln("How I tend to get around: " + myTransport + "<br>");
document.writeln("My Main Ride: <pre>", 
  JSON.stringify(myMainRide, null, '\t'), "</pre>");








// Constants

// Functions

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
