$(document).ready(function () {
    console.log("Document loaded...");

    $.ajax({
        url: "https://api.allorigins.win/get?url=https://xkcd.com/info.0.json",
        type: "GET",
        dataType: "json",
        success: function (response) {
            const comicObj = JSON.parse(response.contents);

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
            console.log("Error:", textStatus, errorThrown);
            $("#output").text("An error occurred while fetching the comic.");
        }
    });
});
