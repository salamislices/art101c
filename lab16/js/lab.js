// Lab 16 - JSON and APIs
// Author: Daniel
// Date: 6/5/25

// This script uses jQuery to call the XKCD API and display the latest comic on the page

// Start when the document is fully loaded
$(document).ready(function () {
    console.log("Document loaded. Starting AJAX call...");

    // Make an AJAX request to the XKCD API
    $.ajax({
        url: "https://xkcd.com/info.0.json", // URL to fetch the latest comic
        type: "GET",
        dataType: "json",
        success: function (comicObj) {
            console.log("API success:", comicObj); // See the full JSON object

            // Create elements for the comic title, image, and alt text
            const title = $("<h3>").text(comicObj.title);
            const image = $("<img>")
                .attr("src", comicObj.img)
                .attr("alt", comicObj.alt)
                .attr("title", comicObj.alt)
                .css("max-width", "100%");
            const caption = $("<p>").text(comicObj.alt);

            // Append to #output div
            $("#output").append(title, image, caption);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("Error:", textStatus, errorThrown);
            $("#output").text("An error occurred while fetching the comic.");
        }
    });
});
