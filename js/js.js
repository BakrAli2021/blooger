$(function() {
    $nav = $('.nav');
    $bars = $('.nav .toggle-collapse');
    $bars.click(function() {
        $nav.toggleClass('collapse');
    });
    // owl blog carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: false,
        autoplayTimeout: 3000,
        nav: true,
        navText: [$('.owl-nav .owl-nav-prev'), $('.owl-nav .owl-nav-next')],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            }
        }
    });
    $('footer .move-up').click(function() {
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });
    AOS.init();
});