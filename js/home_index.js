var animation = bodymovin.loadAnimation({
	  container: document.getElementById('loader-anim'),
	  renderer: 'svg',
	  loop: true,
	  autoplay: true,
	  rendererSettings: { 
	  	className: 'test'
	  },
	  path: '/AgenceMeV4/bodymovin/home/data.json'
	})

/* RANDOM COVER FUNCTION */

shuffle = function(v) {
    for(var j, x, i = v.length; i; j = Math.floor(Math.random() * i), x = v[--i], v[i] = v[j], v[j] = x);
    return v;
};

var cmLyEl = [
	
	"show-qonto",
	"show-marks",
	"show-chauffeurprive",
	"show-lecollectionist",
	"show-orangelabs",
	"show-mondocteur",
	"show-sendinblue",
	"show-rydoo"

];

shuffle(cmLyEl);

/* END RANDOM COVER FUNCTION */


/*=======================================
=            COVER CAROUSSEL            =
=======================================*/

function coverCarousselBg(){

	$('#section-home .container-caroussel .container-bg .bg').removeClass('show');
	if ($('#section-home .container-caroussel').hasClass('show-qonto')) {
		$('#section-home .container-caroussel .container-bg .bg.bg-qonto').addClass('show');
	} else if ($('#section-home .container-caroussel').hasClass('show-marks')) {
		$('#section-home .container-caroussel .container-bg .bg.bg-marks').addClass('show');
	} else if ($('#section-home .container-caroussel').hasClass('show-chauffeurprive')) {
		$('#section-home .container-caroussel .container-bg .bg.bg-chauffeurprive').addClass('show');
	} else if ($('#section-home .container-caroussel').hasClass('show-lecollectionist')) {
		$('#section-home .container-caroussel .container-bg .bg.bg-lecollectionist').addClass('show');
	} else if ($('#section-home .container-caroussel').hasClass('show-orangelabs')) {
		$('#section-home .container-caroussel .container-bg .bg.bg-orangelabs').addClass('show');
	} else if ($('#section-home .container-caroussel').hasClass('show-mondocteur')) {
		$('#section-home .container-caroussel .container-bg .bg.bg-mondocteur').addClass('show');
	} else if ($('#section-home .container-caroussel').hasClass('show-rydoo')) {
		$('#section-home .container-caroussel .container-bg .bg.bg-rydoo').addClass('show');
	} else if ($('#section-home .container-caroussel').hasClass('show-sendinblue')) {
		$('#section-home .container-caroussel .container-bg .bg.bg-sendinblue').addClass('show');
	};

	$('#header-desktop, #loader-anim, #nav-btn').removeClass(function (index, className) {
	    return (className.match (/\bstyle-\S+/g) || []).join(' ');
	});

	var dataClass = $('#section-home .container-caroussel .container-bg .bg.show').data('header');

	$('#header-desktop, #loader-anim, #nav-btn').addClass(dataClass);
};

var openDelayCover = 0;
function coverCarousselEl(){

	$('#section-home .container-caroussel .wrapper-container-el .container-el .el').addClass('hide');

	setTimeout(function() {

		$('#section-home .container-caroussel .wrapper-container-el .container-el .el').removeClass('displayBlock').removeClass('hide show');
		if ($('#section-home .container-caroussel').hasClass('show-qonto')) {
			$('#section-home .container-caroussel .wrapper-container-el .container-el .el.el-qonto').addClass('displayBlock');
		} else if ($('#section-home .container-caroussel').hasClass('show-marks')) {
			$('#section-home .container-caroussel .wrapper-container-el .container-el .el.el-marks').addClass('displayBlock');
		} else if ($('#section-home .container-caroussel').hasClass('show-chauffeurprive')) {
			$('#section-home .container-caroussel .wrapper-container-el .container-el .el.el-chauffeurprive').addClass('displayBlock');
		} else if ($('#section-home .container-caroussel').hasClass('show-lecollectionist')) {
			$('#section-home .container-caroussel .wrapper-container-el .container-el .el.el-lecollectionist').addClass('displayBlock');
		} else if ($('#section-home .container-caroussel').hasClass('show-orangelabs')) {
			$('#section-home .container-caroussel .wrapper-container-el .container-el .el.el-orangelabs').addClass('displayBlock');
		} else if ($('#section-home .container-caroussel').hasClass('show-mondocteur')) {
			$('#section-home .container-caroussel .wrapper-container-el .container-el .el.el-mondocteur').addClass('displayBlock');
		} else if ($('#section-home .container-caroussel').hasClass('show-rydoo')) {
			$('#section-home .container-caroussel .wrapper-container-el .container-el .el.el-rydoo').addClass('displayBlock');
		} else if ($('#section-home .container-caroussel').hasClass('show-sendinblue')) {
			$('#section-home .container-caroussel .wrapper-container-el .container-el .el.el-sendinblue').addClass('displayBlock');
		};

		if (openDelayCover == 0) {
			setTimeout(function() {
				$('#section-home .container-caroussel .wrapper-container-el .container-el .el:visible').addClass('show');
			}, 1100);
			openDelayCover = 1;
		} else {
			setTimeout(function() {
				$('#section-home .container-caroussel .wrapper-container-el .container-el .el:visible').addClass('show');
			}, 50);
		}

	}, 500);

};

function progressCoverCarousselReset(){
	$('#section-home .container-caroussel > .btn .progress').removeClass('active');
}

function progressCoverCarousselActive(){
	setTimeout(function() {
		$('#section-home .container-caroussel > .btn .progress').addClass('active');
	}, 50);

}


var countElNum = 0;
var delayCoverCaroussel = 6000;
var intervalCoverCaroussel = setInterval(function() {
      initCoverCaroussel();
    }, delayCoverCaroussel);

function initCoverCaroussel(){

	$('#section-home .container-caroussel').removeClass(function (index, className) {
	    return (className.match (/\bshow-\S+/g) || []).join(' ');
	})

	$('#section-home .container-caroussel').addClass(cmLyEl[countElNum]);

	if (countElNum >= 3) {
		countElNum = 0;
	} else {
		countElNum++;
	}

	coverCarousselBg();
	coverCarousselEl();
	progressCoverCarousselReset();
	progressCoverCarousselActive();

	clearInterval(intervalCoverCaroussel);
	intervalCoverCaroussel = setInterval(function() {
      initCoverCaroussel();
    }, delayCoverCaroussel);

};

$('#section-home .container-caroussel > .btn').click(function(){
	initCoverCaroussel();
})


/*=====  End of COVER CAROUSSEL  ======*/


/*==============================================
=            SECTION TEAM CAROUSSEL            =
==============================================*/


var numberEl = $("#section-team .container-text .container-caroussel-name > .el-name").length;
var countEl = 0;
var delayTeamCaroussel = 4000;

function sectionTeamCarousselPrg(){

	var elPp = '#section-team .wrapper-caroussel-pp .container-caroussel-pp .el-pp';

	if (countEl < numberEl) {
		$('#section-team .container-text .container-caroussel-name .el-name.show').removeClass('show');

		$(elPp + '.show').removeClass('show').addClass('hide');

		setTimeout(function() {
			$(elPp + '.hide').hide().removeClass('hide');
		}, 700);

		countEl++;
		
		$('#section-team .container-text .container-caroussel-name .el-name:nth-child('+countEl+')').addClass('show');

		$('.' + $('#section-team .container-text .container-caroussel-name .el-name.show').data('pp')).show();
		
		setTimeout(function() {
			$(elPp + ':visible').addClass('show');
			
		}, 50);
		
		setTimeout(function() {
			sectionTeamCarousselPrg();
		}, delayTeamCaroussel);

	} else {
		countEl = 0;
		sectionTeamCarousselPrg();
	};
};

function sectionTeamCarousselInit(){
	var parent = $("#section-team .container-text .container-caroussel-name");
	    var divs = parent.children();
	    while (divs.length) {
	        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
	    }
	    
	$('#section-team .container-text .container-caroussel-name .el-name:nth-child(1)').addClass('show');
	sectionTeamCarousselPrg();
};

/*=====  End of SECTION TEAM CAROUSSEL  ======*/


/*================================
=            SPONSORS            =
================================*/

function animSponsors() {
    $('#section-sponsors .container-li .li-el').hide();
    $('#section-sponsors .sep').addClass('anim');
    var delayAnimSponsors = 6000;
    var delayScaleSponsors = 700 + 300;
    $('#section-sponsors .container-li .li-el:nth-child(1)').show();
    setTimeout(function() {
        $('#section-sponsors .container-li .li-el:nth-child(1)').addClass('anim');
    }, 50);
    setTimeout(function() {
        $('#section-sponsors .container-li .li-el:nth-child(1)').removeClass('anim');
        setTimeout(function() {
            $('#section-sponsors .container-li .li-el:nth-child(1)').hide().insertAfter('#section-sponsors .container-li .li-el:last-child()');
            animSponsors();
        }, delayScaleSponsors);
    }, delayAnimSponsors);
};

/*=====  End of SPONSORS  ======*/



/*==================================
=            RESPONSIVE            =
==================================*/

function parallaxScrollEl(){

	$('.section-pr-el .container-el .el .title').each(function(){
		$(this).attr('data-parallax', '{"y": -40, "smoothness": 20}');
	})

	$('.section-pr-el .container-el .el .wrapper .container-img').each(function(){
		$(this).attr('data-parallax', '{"y": -80, "smoothness": 30}');
	})

	$('#section-work .container-illu img.cloud-1').attr('data-parallax', '{"x": 160, "y": 80, "smoothness": 200}');
	$('#section-work .container-illu img.cloud-2').attr('data-parallax', '{"x": 40, "smoothness": 50}');
	$('#section-work .container-illu img.cloud-3').attr('data-parallax', '{"x": 60, "smoothness": 50}');
	$('#section-work .container-illu img.cloud-4').attr('data-parallax', '{"x": 100, "y": 40, "smoothness": 50}');

}

function initResponsive(){

	if (window.matchMedia("(max-width: 970px)").matches) {
		$('.section-pr-el .container-el .el .title').each(function(){
			$(this).insertAfter($(this).closest('.el').find('.container-img'));
		})
	} else {
		parallaxScrollEl();
	}

}

/*=====  End of RESPONSIVE  ======*/



$(document).ready(function() {

	

	$('#section-home .container-text p:nth-child(2), #section-home .container-text p:nth-child(3)').each(function (index) {
	    var characters = $(this).text().split("");

	    $this = $(this);
	    $this.empty();
	    $.each(characters, function (i, el) {
	    $this.append("<span>" + el + "</span");
	    });

	});


	/* LOADER */
	
	animation.addEventListener('loopComplete',function(){
	  animation.goToAndPlay(56, true)
	})



	animation.addEventListener('enterFrame',function(e){
		if(e.currentTime > 94 && e.currentTime < 114 && !$('#container-general').hasClass('ready')) {

		  	$('#loader .container-bg .bg').removeClass('show');
		    $('#loader .container-bg .bg.'+cmLyEl[1]).addClass('show');


		    $('#header-desktop, #loader-anim, #nav-btn').removeClass(function (index, className) {
			    return (className.match (/\bstyle-\S+/g) || []).join(' ');
			});

			var dataClass = $('#loader .container-bg .bg.show').data('header');

			$('#header-desktop, #loader-anim, #nav-btn').addClass(dataClass);

		  }else if (e.currentTime > 148 && e.currentTime < 168 && !$('#container-general').hasClass('ready')) {
		  	$('#loader .container-bg .bg').removeClass('show');
		    $('#loader .container-bg .bg.'+cmLyEl[2]).addClass('show');

		    $('#header-desktop, #loader-anim, #nav-btn').removeClass(function (index, className) {
			    return (className.match (/\bstyle-\S+/g) || []).join(' ');
			});

			var dataClass = $('#loader .container-bg .bg.show').data('header');

			$('#header-desktop, #loader-anim, #nav-btn').addClass(dataClass);

		  }else if (e.currentTime > 210 && e.currentTime < 230 && !$('#container-general').hasClass('ready')) {
		  	$('#loader .container-bg .bg').removeClass('show');
		    $('#loader .container-bg .bg.'+cmLyEl[3]).addClass('show');

		    $('#header-desktop, #loader-anim, #nav-btn').removeClass(function (index, className) {
			    return (className.match (/\bstyle-\S+/g) || []).join(' ');
			});

			var dataClass = $('#loader .container-bg .bg.show').data('header');

			$('#header-desktop, #loader-anim, #nav-btn').addClass(dataClass);

		  }


	})

	/* END LOADER */

	initResponsive();

});


$(window).on('load', function() {

	animation.addEventListener('enterFrame',function(e){
	  if(((e.currentTime > 94 && e.currentTime < 104) || (e.currentTime > 148 && e.currentTime > 158) || (e.currentTime > 210 && e.currentTime < 220)) && (!$('#container-general').hasClass('ready'))) {
	  	$('#container-general').addClass('ready');
	  	$('#loader .container-bg .bg').removeClass('show');
	  	$('#loader .container-bg .bg.'+cmLyEl[0]).addClass('show');
	  	initCoverCaroussel();
	  	$('#section-home .container-caroussel .wrapper-container-el .container-el .el:visible').removeClass('show');
		setTimeout(function() {
			$('#loader').addClass('hide');
			setTimeout(function() {
				$('#loader').hide();
			}, 500);
		}, 500);
		setTimeout(function() {
			$('#section-home .container-caroussel .container-text').addClass('slide-1');

			setTimeout(function() {
				$('#header-desktop .container-rs').addClass('show');
				$('#section-home .container-caroussel .container-bg').addClass('show');
				$('#section-home .container-caroussel .container-text').removeClass('slide-1').addClass('slide-2');
				$('#section-home .container-caroussel > .btn').addClass('show');
					$('#section-home .container-caroussel .container-ms').addClass('show');
				setTimeout(function() {

					$('#section-home .container-caroussel .container-text > p:nth-child(1)').addClass('show');
					$('#section-home .container-caroussel .container-text').removeClass('slide-2').addClass('show');
					$('#section-home .container-caroussel .container-text > .btn').addClass('show');
				}, 750);
			}, 500);
		}, 1000);
	  }

	})


	$window = $(window);
    var windowHeight = $window.height() / 1.5;

    var distanceSectionContact = $('#section-contact').offset().top - windowHeight;

    var distanceEl1 = $('#section-pr-1 .container-el .el:nth-child(1)').offset().top - windowHeight;
    var distanceEl2 = $('#section-pr-1 .container-el .el:nth-child(2)').offset().top - windowHeight;
    var distanceEl3 = $('#section-pr-2 .container-el .el:nth-child(1)').offset().top - windowHeight;
    var distanceEl4 = $('#section-pr-2 .container-el .el:nth-child(2)').offset().top - windowHeight;

    var distanceSectionWork = $('#section-work').offset().top - windowHeight;

    var distanceSectionTeam = $('#section-team').offset().top - windowHeight;

    function scrollAnim(){
		if ($window.scrollTop() >= distanceSectionContact) {
            if (!$('#section-contact').hasClass('reach')) {
                $('#section-contact').addClass('reach');
            };
        };
        if ($window.scrollTop() >= distanceEl1) {
            if (!$('#section-pr-1 .container-el .el:nth-child(1)').hasClass('reach')) {
                $('#section-pr-1 .container-el .el:nth-child(1)').addClass('reach');
            };
        };
        if ($window.scrollTop() >= distanceEl2) {
            if (!$('#section-pr-1 .container-el .el:nth-child(2)').hasClass('reach')) {
                $('#section-pr-1 .container-el .el:nth-child(2)').addClass('reach');
            };
        };
        if ($window.scrollTop() >= distanceEl3) {
            if (!$('#section-pr-2 .container-el .el:nth-child(1)').hasClass('reach')) {
                $('#section-pr-2 .container-el .el:nth-child(1)').addClass('reach');
            };
        };
        if ($window.scrollTop() >= distanceEl4) {
            if (!$('#section-pr-2 .container-el .el:nth-child(2)').hasClass('reach')) {
                $('#section-pr-2 .container-el .el:nth-child(2)').addClass('reach');
            };
        };

        if ($window.scrollTop() >= distanceSectionWork) {
            if (!$('#section-work').hasClass('reach')) {
                $('#section-work').addClass('reach');
            };
        };

        if ($window.scrollTop() >= distanceSectionTeam) {
            if (!$('#section-team').hasClass('reach')) {
                $('#section-team').addClass('reach');
                sectionTeamCarousselInit();
            };
        };

        if ($window.scrollTop() + $window.height() == $(document).height()) {
            if (!$('#section-sponsors').hasClass('reach')) {
                $('#section-sponsors').addClass('reach');
                
            };
        };
	}

	animSponsors();

    $window.scroll(function() {
    	scrollAnim();
    });

    scrollAnim();


    /**********************
     *    RATION VIDEO    *
     **********************
    if (window.devicePixelRatio >= 2 ) {
    	$('#section-work .container-illu').addClass('ratio2');
    }*/

})
