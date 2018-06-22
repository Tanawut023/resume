$(document).ready(function () {
    $('#fadethisdiv1').css({ "position": "relative", "opacity": 0, "left": "+=100", "visibility": "visible" });
    $('#fadethisdiv1').animate({ left: 0, opacity: 1 }, 2000);

    /* Every time the window is scrolled ... */
    $(window).scroll(function () {

        /* Check the location of each desired element */
        $('.fadethisdiv').each(function (i) {

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window > bottom_of_object) {

                $(this).animate({ 'opacity': '1' }, 2000);

            }

        });
    });
});