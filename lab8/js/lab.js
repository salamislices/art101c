// Lab 8 - Anon Functions and Callbacks
// Author: Daniel
// Date:5/8/25

function squareTen(x){
    var results = (x * x) + 10;
    return results;
} 

// test
console.log("What is 20 squared plus 10? ", squareTen(20));
console.log("What is 5 squared plus 10? ", squareTen(5));

coolArray = [3, 4, 5, 6, 9, 12, 20] 
console.log("My cool array: ", coolArray);

var result = coolArray.map(squareTen);
// should return [19, 26, 35, 46, 91, 154, 410]
console.log("Test of squareTen function on array: ", result);

var result = coolArray.map(function(x) {
    return result = x + 3 * 1111;
})
// should return [3336, 3337, 3338, 3339, 3342, 3345, 3353]
console.log("Array plus 3 times 1111: ", result);


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
  