// Lab 16 - JSON and APIs
// Author: Daniel
// Date: 6/5/25

$(document).ready(function () {
    console.log("Document loaded...");

    $.ajax({
        url: "https://api.codetabs.com/v1/proxy?quest=https://xkcd.com/info.0.json",
        type: "GET",
        dataType: "json",
        success: function (comicObj) {
            console.log("API success:", comicObj);

            const title = $("<h3>").text(comicObj.title);
            const image = $("<img>")
                .attr("src", comicObj.img)
                .attr("alt", comicObj.alt)
                .attr("title", comicObj.alt)
                .css("max-width", "100%");
            const caption = $("<p>").text(comicObj.alt);

            $("#output").append(title, image, caption);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error("API call failed:", textStatus, errorThrown);
            $("#output").text("An error occurred while fetching the comic.");
        }
    });
});
