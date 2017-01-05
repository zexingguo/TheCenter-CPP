$(document).ready(function(){
    
    
    $('.nav-dropdown').hover(function(){
        $(this).children('.sub-menu').stop('true', 'true').slideDown(250);
    },
    function(){
        $(this).children('.sub-menu').stop('true', 'true').slideUp(250); 
    });
    
    
    $('.nav-dropdown-mobile').on('click', function() {
        $(this).next('.sub-menu-mobile').slideToggle();
    });
    
});