// Lab 12 - Condtionals
// Author: Daniel
// Date:5/22/25


// This function takes a string and returns a house based on string length
function sortingHat(str) {
    let length = str.length;           
    let mod = length % 4;             

// Return a house depending on the mod result
    if (mod === 0) {
        return "Gryffindor";
    } else if (mod === 1) {
        return "Ravenclaw";
    } else if (mod === 2) {
        return "Hufflepuff";
    } else if (mod === 3) {
        return "Slytherin";
    }
}

// Main function to run when page is ready
function main() {
    console.log("Main function started.");

    // Add a click event listener to the button
    $("#button").click(function() {
        let name = $("#input").val();           // Get value from input field
        let house = sortingHat(name);           // Run sortingHat to get house
        $("#output").append(                    // Display result in #output
            `<p>The Sorting Hat has sorted you into <strong>${house}</strong>!</p>`
        );
    });
}

// Let's get this party started
main();
