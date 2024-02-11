/* ----------------------------- 
Pre Loader
----------------------------- */
$(window).load(function() {
	'use strict';
	$('.loading-icon').delay(500).fadeOut();
	$('#preloader').delay(800).fadeOut('slow');
});


/* ----------------------------- 
Backgroung slider
----------------------------- */
$(window).ready(function() {
	'use strict';
	$.vegas('slideshow', {
	  backgrounds:[
		{ src:'assets/images/bg-slider/bg-1.jpg', fade:1000 },
		{ src:'assets/images/bg-slider/bg-2.jpg', fade:1000 },
		{ src:'assets/images/bg-slider/bg-3.jpg', fade:1000 }
	  ]
	})();
});


				

/* ----------------------------- 
Scroll into viewPort Animation
----------------------------- */
$(document).ready(function() {	
	'use strict';
	$('.animated').appear(function() {
		var element = $(this),
			animation = element.data('animation'),
			animationDelay = element.data('animation-delay');
			if ( animationDelay ) {

				setTimeout(function(){
					element.addClass( animation + " visible");
				}, animationDelay);

			} else {
				element.addClass( animation + " visible");
			}
	});
});
	

/* ----------------------------- 
NiceScroll
----------------------------- */	
$(document).ready(function() { 
	'use strict';
    $("html").niceScroll({
		cursorcolor: '#E74C3C',
		cursoropacitymin: '1',
		cursorborder: '0px',
		cursorborderradius: '0px',
		cursorwidth: '5px',
		cursorminheight: 60,
		horizrailenabled: false,
		zindex: 1090
	});
  });




				
/* ----------------------------- 
Card Style Script
----------------------------- */					
$(document).ready(function() {
	'use strict';
	var $el 			= $( '#card-ul' ),
		sectionFeature  = $('#section-feature'),
		baraja 			= $el.baraja();
	
		if ( $(window).width() > 480) {
			sectionFeature.appear(function(){
				baraja.fan({
					speed : 1500,
					easing : 'ease-out',
					range : 100,
					direction : 'right',
					origin : { x : 50, y : 200 },
					center : true
				});
			});
			$('#feature-expand').click(function() {
				baraja.fan({
					speed : 500,
					easing : 'ease-out',
					range : 100,
					direction : 'right',
					origin : { x : 50, y : 200 },
					center : true
				});
			}); 
		} else {
			sectionFeature.appear(function(){
				baraja.fan({
					speed : 1500,
					easing : 'ease-out',
					range : 80,
					direction : 'left',
					origin : { x : 200, y : 50 },
					center : true
				});
			});
			$('#feature-expand').click(function() {
				baraja.fan({
					speed : 500,
					easing : 'ease-out',
					range : 80,
					direction : 'left',
					origin : { x : 200, y : 50 },
					center : true
				});
			});
		}
		
	// Feature navigation
	$('#feature-prev').on( 'click', function( event ) {
		baraja.previous();
	});

	$('#feature-next').on( 'click', function( event ) {
		baraja.next();
	});
	
	// close Features
	$('#feature-close').on( 'click', function( event ) {
		baraja.close();
	});	
});

/* ----------------------------- 
Fitvids init
----------------------------- */
 $(document).ready(function(){
    'use strict';
    $('.video-content').fitVids();
 });


/* ----------------------------- 
IE 9 Placeholder fix
----------------------------- */
$('[placeholder]').focus(function() {
  var input = $(this);
  if (input.val() == input.attr('placeholder')) {
    input.val('');
    input.removeClass('placeholder');
  }
}).blur(function() {
  var input = $(this);
  if (input.val() == '' || input.val() == input.attr('placeholder')) {
    input.addClass('placeholder');
    input.val(input.attr('placeholder'));
  }
}).blur();



/* ----------------------------- 
Screenshot Load
----------------------------- */	
$(document).ready(function() {
	'use strict';
	$('.view-project').on('click', function(e) {
		e.preventDefault();
		
		$(".row.porfolio-container").css("display","none");

		const portfolioWrapID=$("#tabMenuButtnDiv .custom-btn-primary").attr("data-id");
		var portfolioWrap	= $(portfolioWrapID);

		var href 			= $(this).attr('href') + ' .portfolio-project' ;
		//var	portfolioWrap	= $('.porfolio-container');
		var	contentLoaded 	= $('#portfolio-load');
		var	offset			= $('#section-screenshots').offset().top;
		
		portfolioWrap.animate({'left':'-120%'},{duration:400,queue:false});
		portfolioWrap.fadeOut(400);
		$('html, body').animate({scrollTop: offset},{duration:800,queue:true});
		setTimeout(function(){ $('#portfolio-loader').fadeIn('fast'); },300);
		
		setTimeout(function(){
            contentLoaded.load(href, function(){
                $('#portfolio-loader').fadeOut('fast');
                contentLoaded.fadeIn(600).animate({'left':'0'},{duration:800,queue:false});
                $('.back-button').fadeIn(600);

			

            });
        },400);
		
		
		
	});
	
	$('.backToProject').on('click', function(e){
		e.preventDefault();
		

		const portfolioWrapID=$("#tabMenuButtnDiv .custom-btn-primary").attr("data-id");

		//var portfolioWrap	= $('.porfolio-container');
		var portfolioWrap	= $(portfolioWrapID);
		var	contentLoaded 	= $('#portfolio-load');
			
		contentLoaded.animate({'left':'105%'},{duration:400,queue:false}).delay(300).fadeOut(400);
        $(this).parent().fadeOut(400);
		setTimeout(function(){
            portfolioWrap.animate({'left':'0'},{duration:400,queue:false});
            portfolioWrap.fadeIn(600);

			
			$(".custom-btn-primary").click();
			location.href="#section-screenshots";
        },500);

		
	});


});

function menu1Click(){
	$("#menu1").click();
}
							
/* ----------------------------- 
BxSlider
----------------------------- */		
$(document).ready(function() {
	'use strict';
	$('.testimonial-slider').bxSlider({
		pagerCustom: '#bx-pager',
		pager: true,
		touchEnabled: true,
		controls: false
	});	
});

				
/* ----------------------------- 
Main navigation
----------------------------- */
$(document).ready(function() {
	'use strict';
	$('.nav').onePageNav({
		currentClass: 'current',
		scrollSpeed: 1000,
		easing: 'easeInOutQuint'
	});
	$(window).bind('scroll', function(e) {
		var scrollPos = $(window).scrollTop();
		scrollPos > 220 ? $('.sticky-section').addClass('nav-bg') : $('.sticky-section').removeClass('nav-bg');
	});
});				
				
				
/* ----------------------------- 
MailCimp Plugin Script 
----------------------------- */
$(document).ready(function() {
	'use strict';
	$('#subscription-form').ajaxChimp({
		callback: mailchimpCallback,
		url: 'YOUR_URL' /* Replace it with your custom URL inside '' */
	});
	
	function mailchimpCallback(resp) {
		 if(resp.result === 'success') {
			$('.subscription-success')
				.html(resp.msg)
				.delay(500)
				.fadeIn(1000);

			$('.subscription-success').fadeOut(8000);
			
		} else if(resp.result === 'error') {
			$('.subscription-failed')
				.html(resp.msg)
				.delay(500)
				.fadeIn(1000);
				
			$('.subscription-failed').fadeOut(5000);
		}
		$('#subscription-form .input-email').val('');
	};
});

			

/* ----------------------------- 
Contact form
----------------------------- */			
$(document).ready(function() {
	'use strict';
	$('form.contact-form').on('submit', function(e) {
		$.post('contact/contact.php', $(this).serialize(), function(response) {
			if ($('.confirmation p').html() != "") {
				$('.confirmation p').replaceWith('<p><span class="fa fa-check"></span></p>');
			}
			$('.confirmation p').append(response).parent('.confirmation').show();
			$('html, body').animate({
				scrollTop: $('#section-contact').offset().top
				},{duration:800,queue:true});
			$('.form-item').val('');
			setTimeout(function() {
				$('.confirmation').hide();
			}, 8000);
		});
		// disable default action
		e.preventDefault();
	});

});
			

$(function() {
	$(window).scroll(function() {
	  if ($(this).scrollTop() > 250) {
		$('#topBtn').fadeIn();
	  } else {
		$('#topBtn').fadeOut();
	  }
	});
   
	$("#topBtn").click(function() {
	  $('html, body').animate({
		scrollTop : 0
	  }, 400);
	  return false;
	});
  });

  Fancybox.bind('[data-fancybox="gallery"]', {
	// Your custom options for a specific gallery
  });

  $(function(){
	// 변수 선언
	var imageButton = $('.item-box .item-img');
	var popup = $('.img-popup');
	var closeButton = popup.find('> .popup-inner > .close-btn');
	var htmlAndBody = $('html, body');
	var focusTarget;
  
	
	// 팝업 생성
	$("#card-ul a.fancy-button").on('click', function(e){
	  	e.preventDefault();
		
		var popupImg = popup.find('> .popup-inner > img');
		
		var src = $(this).attr('src');
		var alt = $(this).attr('alt');
		focusTarget = $(this);
		popupImg.attr('src', src).attr('alt', alt);
		createPopup();
	});

  
	// 팝업 제거
	popup.on('click', function(){
	  removePopup();
	});
	closeButton.on('click', function(e){
	  e.preventDefault();
	  removePopup();
	});
  
	// 팝업창 검은배경과 닫기 버튼을 제외한 나머지 부분 클릭시 닫히지 않도록 하기
	popup.find('> .popup-inner').on('click', function(e){
	  e.stopPropagation();
	})
  
	// 팝업 생성 함수
	function createPopup(){
	  popup.addClass('active');
	  htmlAndBody.css('overflow-y', 'hidden');
	  setTimeout(function(){
		closeButton.focus();
	  }, 50);
	}
	// 팝업 제거 함수
	function removePopup(){
	  popup.removeClass('active');
	  focusTarget.focus();
	  htmlAndBody.css('overflow-y', 'visible');
	}





  })


  function tabMenu(e){

	const id=e.dataset.id;
	console.log(id);
	$(".row.porfolio-container").css("display","none");
	$("#"+id).show("slow");

	$("#tabMenuButtnDiv button").removeClass("custom-btn-primary");
	$(e).addClass("custom-btn-primary");

	var	contentLoaded 	= $('#portfolio-load');		
	contentLoaded.animate({'bottom':'-505%'},{duration:400,queue:false}).delay(300).fadeOut(400);
    $(".backToProject").parent().fadeOut(400);
	
  }