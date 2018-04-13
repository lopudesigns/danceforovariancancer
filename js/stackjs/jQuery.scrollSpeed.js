(function($) {
    jQuery.scrollSpeed = function(step, speed, easing) {
        var $document = $(document),
            $window = $(window),
            $body = $('html, body'),
            option = easing || 'default';
            //root = 0,       // These are defined in event handler.
            scroll = false;
            //scrollY,
            //scrollX,
            //view;
        if (window.navigator.msPointerEnabled)
            return false;

        $window.on('mousewheel DOMMouseScroll', function(e) {
            var deltaY = e.originalEvent.wheelDeltaY,
                detail = e.originalEvent.detail, // Replaced ending ; by , here and below
                scrollY = $document.height() > $window.height(),
                scrollX = $document.width() > $window.width(),
                root; // added
            scroll = true; // align as statement

            if (scrollY) {
                view = $window.height();
                root = $window.scrollTop(); // added
                if (deltaY < 0 || detail > 0)
                    root = (root + view) >= $document.height() ? root : root += step;
                if (deltaY > 0 || detail < 0)
                    root = root <= 0 ? 0 : root -= step;
                $body.stop().animate({
                    scrollTop: root
                }, speed, option, function() {
                    scroll = false;
                });
            }
            if (scrollX) {
                view = $window.width();
                root = $window.scrollLeft(); // added
                if (deltaY < 0 || detail > 0)
                    root = (root + view) >= $document.width() ? root : root += step;
                if (deltaY > 0 || detail < 0)
                    root = root <= 0 ? 0 : root -= step;
                $body.stop().animate({
                    scrollLeft: root
                }, speed, option, function() {
                    scroll = false;
                });
            }
            return false;
        });
        // Removed handlers for scroll and resize events
        // What they did is already covered for above.
    };
    // Add a getter for the scrolling status
    jQuery.scrollSpeed.isScrolling = function() {
        return scroll;
    }

    jQuery.easing.default = function (x,t,b,c,d) {
        return -c * ((t=t/d-1)*t*t*t - 1) + b;
    };
})(jQuery);