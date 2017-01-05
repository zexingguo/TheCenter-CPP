$(document).ready(function(){
    $('header button').on('click', function(){
       $(this).toggleClass('is-active');
       $('nav[role="nav-mobile"]').slideToggle(1000);
    });
    $(window).resize(function(){
        if( $(window).width() > 960 ){
            $('nav[role="nav-mobile"]').hide();
            $('button').removeClass('is-active');
        }
    });
})