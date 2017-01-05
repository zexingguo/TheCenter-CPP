$(document).ready(function(){
    $('nav[role="nav-mobile"] li').hover(function(){
        $(this).toggleClass('white-bg', 450, 'ease');
        $(this).toggleClass('link-hover', 450, 'ease');
    });
    $('.sub-menu li').hover(function(){
        $(this).toggleClass('white-bg', 450, 'ease');
        $(this).toggleClass('link-hover', 450, 'ease');
    })
    $('footer a').hover(function(){
        $(this).toggleClass('link-hover', 450, 'ease');
    })
});