/* Thumbnail */
//When hovering over the entire area
$("#wrap").on("mouseover", ".col.images", function () {

    //Finds the list items
    var items = $(this).find(".small-images li");

    //loops through the list items to find image source
    items.each(function (increment, newElement) {

        //New image loaded from the source of the list item
        var loadImage = new Image;
        loadImage.src = $(newElement).attr("data-src");

    });
    //Loops through the list items to insert image
    items.each(function (increment, newElement) {
        //Inserts the image within the list item
        $(newElement).html('<span><img src="' + $(newElement).attr("data-src") + '"></span>');
    });
});

//When hovering over the li
$("#wrap").on("mouseover", ".small-images li", function () {

    //Finds the image from the li
    var newScource = $(this).attr("data-src");

    //Replaces large image with small image
    $(this).parent().parent().find(".large-images img").attr("src", newScource);
});