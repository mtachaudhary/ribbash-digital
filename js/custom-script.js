// JavaScript Document
(function($) {

    // Initialize owl-carousel
    $('.rd-blog-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
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
        stagePadding: 25,
        nav:true,
        navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
        responsive:{
            0:{
                items: 1,
                nav: false,
                dots: true
            },
            768:{
                items: 2,
                nav: false,
                dots: true
            },
            1140:{
                items: 2,
                nav: true,
                dots: false
            }
        }
    });

    // Initialize App Preview owl-carousel
    $('.rd-app-preview-carousel').owlCarousel({
        loop:true,
        margin:5,
        nav:true,
        navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
        responsive:{
            0:{
                items: 1,
                nav: false,
                dots: true
            },
            480:{
                items: 2,
                nav: false,
                dots: true
            },
            600:{
                items: 3,
                nav: false,
                dots: true
            },
            900:{
                items: 4,
                nav: false,
                dots: true
            },
            1000:{
                items: 4,
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


    // Sticky Header on Scroll
    // $(window).scroll(function() {    
    //     var scroll = $(document).scrollTop();
    
    //     if (scroll >= 150) {
    //         $(".rd-header").addClass("rd-header-shrink");
    //     } else {
    //         $(".rd-header").removeClass("rd-header-shrink");
    //     }
    // });

    // $(function () {
    //     var scroll = $(document).scrollTop();

    //     if (scroll >= 150) {
    //         $(".rd-header").addClass("rd-header-shrink");
    //     } else {
    //         $(".rd-header").removeClass("rd-header-shrink");
    //     }
    // });


    var src     = $('.rd-logo img').attr('src');
    var srcAlt  = $('.rd-logo img').data('src-alt');

    var previousScroll  = 0,
        headerOrgOffset = $('.rd-header').offset().top;

    // Change header to White on hover
    $('.rd-header-transparent').hover( 
        function(){
            $(this).addClass('rd-header-white');
            $(this).find('.rd-navbar').addClass('navbar-light');
            $(this).find('.rd-navbar').removeClass('navbar-dark');

            $(this).find('.rd-logo img').attr('src', srcAlt);
            $(this).find('.rd-logo img').attr('data-src-alt', src);
        },
        function(){
            // check if dropdown not collapsed
            if (! $('.navbar-collapse').hasClass('show')) {
                $(this).removeClass('rd-header-white');
                $(this).find('.rd-navbar').addClass('navbar-dark');
                $(this).find('.rd-navbar').removeClass('navbar-light');

                $(this).find('.rd-logo img').attr('src', src);
                $(this).find('.rd-logo img').attr('data-src-alt', srcAlt);
            }
        }
    );

    // Scroll up sticky header
    $(window).scroll(function() {
        var currentScroll = $(this).scrollTop();
        
        if( currentScroll > headerOrgOffset ) {
            if ( currentScroll > previousScroll ) {
                $('.rd-header').fadeOut();
            } else {
                $('.rd-header').fadeIn();
                $('.rd-header').addClass('fixed-top rd-header-shrink');

                // On scroll, Transparent to White header
                $('.rd-header-transparent').addClass('rd-header-white');
                $('.rd-header-transparent .rd-navbar').addClass('navbar-light');
                $('.rd-header-transparent .rd-navbar').removeClass('navbar-dark');

                $('.rd-header-transparent .rd-logo img').attr('src', srcAlt);
                $('.rd-header-transparent .rd-logo img').attr('data-src-alt', src);
            }

            // On scroll Mouseleave, Transparent to White header
            $('.rd-header-transparent').on('mouseleave', function(){
                $(this).addClass('rd-header-white');
                $(this).find('.rd-navbar').addClass('navbar-light');
                $(this).find('.rd-navbar').removeClass('navbar-dark');

                $(this).find('.rd-logo img').attr('src', srcAlt);
                $(this).find('.rd-logo img').attr('data-src-alt', src);
            });
            
        } else {
            $('.rd-header').removeClass('fixed-top rd-header-shrink');

            // On top of the page, White to Transparent header
            $('.rd-header-transparent').removeClass('rd-header-white');
            $('.rd-header-transparent .rd-navbar').addClass('navbar-dark');
            $('.rd-header-transparent .rd-navbar').removeClass('navbar-light');

            $('.rd-header-transparent .rd-logo img').attr('src', src);
            $('.rd-header-transparent .rd-logo img').attr('data-src-alt', srcAlt);

            // On scroll Mouseleave, White to Transparent header
            $('.rd-header-transparent').on('mouseleave', function(){
                $(this).removeClass('rd-header-white');
                $(this).find('.rd-navbar').addClass('navbar-dark');
                $(this).find('.rd-navbar').removeClass('navbar-light');

                $(this).find('.rd-logo img').attr('src', src);
                $(this).find('.rd-logo img').attr('data-src-alt', srcAlt);
            });
        }

        previousScroll = currentScroll;
    });
    

    // Initialize Tooltip
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });


})(jQuery);