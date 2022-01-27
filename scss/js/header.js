(function($) {
    // // Header stick
    // $('<div class="header-anchor" id="header-anchor">&nbsp;</div>').insertBefore("#header");
    // // $('<div class="navigate-anchor d-none" id="navigate-anchor">&nbsp;</div>').insertBefore("#navigate");
    // $(window).on("load scroll", function() {
    //     var anchorHeader    = $("#header-anchor");
    //     var header          = $('#header');
    //     var anchorNavigate  = $('#navigate-anchor');
    //     if ($(window).scrollTop() > anchorHeader.offset().top) {
    //         header.addClass('stick');
    //         anchorHeader.height(header.innerHeight());
    //     } else {
    //         header.removeClass('stick');
    //         anchorHeader.height('');
    //     }
    //     // Navigate
    //     // if ($('#navigate').length && $(window).scrollTop() > anchorNavigate.offset().top) {
    //     //     $('#navigate').addClass('stick');
    //     //     anchorNavigate.height($('#navigate').innerHeight());
    //     // } else {
    //     //     $('#navigate').removeClass('stick');
    //     //     anchorNavigate.height('');
    //     // }
    // });
    function HeaderStick() {
        var distanceT = 30;
        if($(window).scrollTop() > distanceT) {
            $('.header').addClass('stick');
            // $('.header-fixh').height($('.header').innerHeight());
        } else {
            $('.header').removeClass('stick');
            // $('.header-fixh').height('');
        }
    }
    $(window).on("load scroll", function() {
        HeaderStick();
    });
})(jQuery);
