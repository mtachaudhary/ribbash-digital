// JavaScript Document
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