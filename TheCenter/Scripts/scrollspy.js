$(document).ready(function() {
    $("#button").on('click', function() {
        $('html, body').animate({
            scrollTop: $('#home-mission').offset().top
        }, 2000, 'easeInOutQuad');
    });
    $("#button2").on('click', function() {
        $('html, body').animate({
            scrollTop: $('#home-mission').offset().top
        }, 2000, 'easeInOutQuad');
    });
})