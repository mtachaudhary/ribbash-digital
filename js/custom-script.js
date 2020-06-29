// JavaScript Document
(function($) {

    // Initialize owl-carousel
    $('.rd-blog-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
        responsive:{
            0:{
                items: 1,
                nav: false,
                dots: true
            },
            600:{
                items: 2,
                nav: false,
                dots: true
            },
            1000:{
                items: 3,
                nav: true,
                dots: false
            }
        }
    });

    // Initialize Related Products owl-carousel
    $('.rd-related-products-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
        responsive:{
            0:{
                items: 1,
                nav: false,
                dots: true
            },
            600:{
                items: 2,
                nav: false,
                dots: true
            },
            1000:{
                items: 2,
                nav: true,
                dots: false
            }
        }
    });

    // Setup wow.js
    new WOW().init();

    // Animate overlay width on viewport
    var $win = $(window);
    var $stat = $('.rd-swip-overlay');

    $win.on('scroll', function () {
        var scrollTop = $win.scrollTop();

        $stat.each(function () {
            var $self = $(this);
            var prev = $self.offset();
            if ( (scrollTop - prev.top) > -300) {
                $self.animate({
                    width: "0%"
                  }, 700 );
            }
        });

    }).scroll();


    // Add class to header on scroll
    $(window).scroll(function() {    
        var scroll = $(document).scrollTop();
    
        if (scroll >= 150) {
            $(".rd-header").addClass("rd-header-shrink");
        } else {
            $(".rd-header").removeClass("rd-header-shrink");
        }
    });

})(jQuery);