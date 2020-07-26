/*!

    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });

    $(document).ready(function() {

        var index = 0,
            indicators = $('.slider-indicators a'),
            hidden_images = $('.slider-content img'),
            interval = 4000;

        function slider() {
            index++;
            if (index == indicators.length) {
            index = 0;
            }
        hidden_images.eq(index).css('opacity', '0');
            indicators.each(function() {
            $(this).css('background', '#e71840');
            });
            
            hidden_images.each(function() {
            $(this).css('visibility', 'hidden');
            });

            indicators.eq(index).css('background', '#212121');

            setTimeout(function() {
            hidden_images.eq(index).css('visibility', 'visible');
            hidden_images.eq(index).css('opacity', '1');
            }, 300);
        }

        indicators.eq(index).css('background', '#212121');
        hidden_images.eq(index).css('visibility', 'visible');

        setInterval(slider, interval);

        });
})(jQuery); // End of use strict
