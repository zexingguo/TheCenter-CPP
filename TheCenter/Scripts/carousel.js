$(window).on('load', function () {
    
    $('.carousel').slick({
        respondTo: window,
        autoplay: true,
        pauseOnHover: false,
        arrows: true,
        fade: true,
        lazyLoad: 'progressive',
        speed: 6000,
        autoplaySpeed: 6000
    });
    
    $('.projects-carousel').slick({
        respondTo: window,
        arrows: true,
        dots: true,
        infinite: true,
        slidesToShow: 4,
        variableWidth: true,
        centerMode: true,
    });
    
    $('.club-carousel').slick({
        respondTo: window,
        arrows: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        variableWidth: true,
        centerMode: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });
});

