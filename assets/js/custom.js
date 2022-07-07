$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    // var banner = $('.banner').height();
    if (scroll > 120) {
        $("header").addClass("sticky_header");
    } else {
        $("header").removeClass("sticky_header");
    }
});