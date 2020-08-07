var animation = bodymovin.loadAnimation({
	  container: document.getElementById('loader-anim'),
	  renderer: 'svg',
	  loop: true,
	  autoplay: true,
	  rendererSettings: { 
	  	className: 'test'
	  },
	  path: ''
	})

/* RANDOM COVER FUNCTION */

// shuffle = function(v) {
//     for(var j, x, i = v.length; i; j = Math.floor(Math.random() * i), x = v[--i], v[i] = v[j], v[j] = x);
//     return v;
// };

var cmLyEl = [
	"show-qonto",
	// "show-marks",
	"show-chauffeurprive",
	"show-lecollectionist",
	"show-orangelabs",
	"show-mondocteur",
	// "show-sendinblue",
	// "show-rydoo"
];

// shuffle(cmLyEl);

/* END RANDOM COVER FUNCTION */


/*=======================================
=            COVER CAROUSSEL            =
=======================================*/

function coverCarousselBg(){

	$('#section-home .container-caroussel .container-bg .bg').removeClass('show');
	$('.rd-home-banner').removeClass('rd-gradient-bg-green rd-gradient-bg-yellow rd-gradient-bg-sky-blue rd-gradient-bg-dark-blue rd-bg-dark-grayish-blue');

	if ($('#section-home .container-caroussel').hasClass('show-qonto')) {
		$('#section-home .container-caroussel .container-bg .bg.bg-qonto').addClass('show');
		$('.rd-home-banner').addClass('rd-gradient-bg-sky-blue');
	} 
	// else if ($('#section-home .container-caroussel').hasClass('show-marks')) {
	// 	$('#section-home .container-caroussel .container-bg .bg.bg-marks').addClass('show');
	// 	$('.rd-home-banner').addClass('rd-bg-dark-grayish-blue');
	// } 
	else if ($('#section-home .container-caroussel').hasClass('show-chauffeurprive')) {
		$('#section-home .container-caroussel .container-bg .bg.bg-chauffeurprive').addClass('show');
		$('.rd-home-banner').addClass('rd-gradient-bg-green');
	} 
	else if ($('#section-home .container-caroussel').hasClass('show-lecollectionist')) {
		$('#section-home .container-caroussel .container-bg .bg.bg-lecollectionist').addClass('show');
		$('.rd-home-banner').addClass('rd-gradient-bg-yellow');
	} 
	else if ($('#section-home .container-caroussel').hasClass('show-orangelabs')) {
		$('#section-home .container-caroussel .container-bg .bg.bg-orangelabs').addClass('show');
		$('.rd-home-banner').addClass('rd-gradient-bg-dark-blue');
	} 
	else if ($('#section-home .container-caroussel').hasClass('show-mondocteur')) {
		$('#section-home .container-caroussel .container-bg .bg.bg-mondocteur').addClass('show');
		$('.rd-home-banner').addClass('rd-bg-dark-grayish-blue');
	} 
	// else if ($('#section-home .container-caroussel').hasClass('show-rydoo')) {
	// 	$('#section-home .container-caroussel .container-bg .bg.bg-rydoo').addClass('show');
	// } 
	// else if ($('#section-home .container-caroussel').hasClass('show-sendinblue')) {
	// 	$('#section-home .container-caroussel .container-bg .bg.bg-sendinblue').addClass('show');
	// };

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
	
	var len = cmLyEl.length;
	// console.log(len-1);

	if (countElNum >= len-1) {
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


$(document).ready(function() {

	$('#section-home .container-text p:nth-child(2), #section-home .container-text p:nth-child(3)').each(function (index) {
	    var characters = $(this).text().split("");

	    $this = $(this);
	    $this.empty();
	    $.each(characters, function (i, el) {
	    $this.append("<span>" + el + "</span");
	    });

	});

});

$(window).on('load', function() {

	animation.addEventListener('enterFrame',function(e){

		if(((e.currentTime > 94 && e.currentTime < 104) || (e.currentTime > 148 && e.currentTime > 158) || (e.currentTime > 210 && e.currentTime < 220)) && (!$('#container-general').hasClass('ready'))) {
	  				  
		  	initCoverCaroussel();
			
	  		$('#section-home .container-caroussel .wrapper-container-el .container-el .el:visible').removeClass('show');
			
			setTimeout(function() {
				$('#section-home .container-caroussel .container-text').addClass('slide-1');

				setTimeout(function() {
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
	});

});