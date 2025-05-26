// Lab 13 - Loops
// Author: Daniel
// Date:5/26/25

// Constants

// Functions
function fizzBuzzBoom() {
    let outputStr = "";

    for (let i = 1; i <= 200; i++) {
        let str = "";

        if (i % 3 === 0) str += "Fizz";
        if (i % 5 === 0) str += "Buzz";
        if (i % 7 === 0) str += "Boom";

        // If not divisible by 3, 5, or 7, just show the number
        if (str === "") {
            str = i;
        } else {
            str = i + " - " + str + "!";
        }

        // Add to output string with line break
        outputStr += str + "<br>";
    }

    // Display the full output in the #output div
    $("#output").html(outputStr);
}

// Main function
function main() {
    console.log("Main function started.");
    fizzBuzzBoom();
}

// Start everything
main();
