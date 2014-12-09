

// (client-side)
Template.adNew.created = function() {

};


Template.adNew.rendered = function() {


    /* --- Full Screen Container ------------- */
    function fullScreenContainer() {

        // Set Initial Screen Dimensions
        var screenWidth = $(window).width() + "px";
        var screenHeight = $(window).height() + "px";

        $("#adfull").css({
            width: screenWidth,
            height: screenHeight
        });

        // Every time the window is resized...

        $(window).resize( function () {

            // Fetch Screen Dimensions
            console.log("Acertou");
            var screenWidth = $(window).width() + "px";
            var screenHeight = $(window).height() + "px";

            // Set Slides to new Screen Dimensions

            $("#adfull").css({
                width: screenWidth,
                height: screenHeight
            });

        });

    }
    fullScreenContainer();
};