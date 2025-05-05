// Lab 7: Functions
// Author: Daniel Freysson
// Date: 05/04/25


// Constants

// Functions

function sortedUserName() {
    // Prompt the user for their name
    var userName = window.prompt("What is your name so I can fix it?");
    console.log("userName =", userName);
  
    // Convert the name to an array, sort it, then join it back into a string
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
    // sort Array

    var nameArraySort = nameArray.sort();
    console.log("unameArraySort =", nameArraySort);
    // join array back to string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);
        // Return the sorted name
    return sortedName;
}
//output
document.writeln("Your sorted name is: ",
    sortUserName(), "</br>");


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
