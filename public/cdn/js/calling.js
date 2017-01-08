

/*
1. Parallax
*/

$(document).ready(function() {
    // Optimalisation: Store the references outside the event handler:
    var $window = $(window);
    

    function checkWidth() {
        var windowsize = $window.width();
        if (windowsize > 991) {

    			$('.parallax4').parallax("50%", 0.1);  
            
        	}
    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
});



/*
2. Responsive Menu
*/

$(function() {
	$( '#dl-menu' ).dlmenu({
		animationClasses : { classin : 'dl-animate-in-5', classout : 'dl-animate-out-5' }
	});
});





/*
3. Counter
*/

/* ==============================================
Counter js
===============================================*/

 // set countUp options
    var options = {
        useEasing : false, // toggle easing
        useGrouping : true, // 1,000,000 vs 1000000
        separator : ',', // character to use as a separator
        decimal : '.', // character to use as a decimal
    }
    var useOnComplete = true;
    var useEasing = true;
    var useGrouping = true;

        $('.counter-style').appear(function(){

        var demo = new countUp('myTargetElement', 0, 300, 0, 4, options);
        demo.start();
    	});
	
	


        $('.counter-style').appear(function(){

        var demo = new countUp('myTargetElement2', 0, 1350, 0, 4, options);
        demo.start();
    	});




        $('.counter-style').appear(function(){

        var demo = new countUp('myTargetElement3', 0, 400, 0, 4, options);
        demo.start();
    	});

	

        $('.counter-style').appear(function(){

        var demo = new countUp('myTargetElement4', 0, 268, 0, 4, options);
        demo.start();
    	});



    	$('.counter-style').appear(function(){

        var demo = new countUp('myTargetElement5', 0, 300, 0, 4, options);
        demo.start();
    	});
	
	


        $('.counter-style').appear(function(){

        var demo = new countUp('myTargetElement6', 0, 1350, 0, 4, options);
        demo.start();
    	});




        $('.counter-style').appear(function(){

        var demo = new countUp('myTargetElement7', 0, 400, 0, 4, options);
        demo.start();
    	});

	

        $('.counter-style').appear(function(){

        var demo = new countUp('myTargetElement8', 0, 268, 0, 4, options);
        demo.start();
    	});
	

/*Counter Js End*/



/*
4. Search
*/

(function() {
				var morphSearch = document.getElementById( 'morphsearch' ),
					input = morphSearch.querySelector( 'input.morphsearch-input' ),
					ctrlClose = morphSearch.querySelector( 'span.morphsearch-close' ),
					isOpen = isAnimating = false,
					// show/hide search area
					toggleSearch = function(evt) {
						// return if open and the input gets focused
						if( evt.type.toLowerCase() === 'focus' && isOpen ) return false;

						var offsets = morphsearch.getBoundingClientRect();
						if( isOpen ) {
							classie.remove( morphSearch, 'open' );
							

							// trick to hide input text once the search overlay closes 
							// todo: hardcoded times, should be done after transition ends
							if( input.value !== '' ) {
								setTimeout(function() {
									classie.add( morphSearch, 'hideInput' );
									setTimeout(function() {
										classie.remove( morphSearch, 'hideInput' );
										input.value = '';
									}, 300 );
								}, 500);
							}
							
							input.blur();
						}
						else {
							classie.add( morphSearch, 'open' );
							
						}
						isOpen = !isOpen;
					};

				// events
				input.addEventListener( 'focus', toggleSearch );
				ctrlClose.addEventListener( 'click', toggleSearch );
				// esc key closes search overlay
				// keyboard navigation events
				document.addEventListener( 'keydown', function( ev ) {
					var keyCode = ev.keyCode || ev.which;
					if( keyCode === 27 && isOpen ) {
						toggleSearch(ev);
					}
				} );


				/***** for demo purposes only: don't allow to submit the form *****/
				morphSearch.querySelector( 'button[type="submit"]' ).addEventListener( 'click', function(ev) { ev.preventDefault(); } );
			})();



/*
5. Owl Carousel
*/

$(document).ready(function(){
		  $(".owl-carousel-post-box").owlCarousel({
		    loop:true,
		    margin:10,
		    responsiveClass:true,
		    smartSpeed:1000,
		    thumbs:false,
		    responsive:{
		        0:{
		            items:1,
		            nav:true
		        },
		        767:{
		            items:2,
		            nav:false
		        },
		        991:{
		            items:3,
		            nav:true,
		            loop:true
		        }
		    }
		})
		});







$(document).ready(function(){
		  $(".owl-carousel").owlCarousel({
		    loop:true,
		    margin:10,
		    responsiveClass:true,
		    smartSpeed:1000,
		    thumbs:false,
		    responsive:{
		        0:{
		            items:1,
		            nav:true
		        },
		        767:{
		            items:2,
		            nav:false
		        },
		        991:{
		            items:3,
		            nav:true,
		            loop:true
		        }
		    }
		})
		});


		$(document).ready(function(){
		  $(".owl-carousel2").owlCarousel({
		    loop:true,
		    margin:10,
		    thumbs:false,
		    responsiveClass:true,
		    smartSpeed:1000,
		    responsive:{
		        0:{
		            items:1,
		            nav:true
		        },
		        767:{
		            items:1,
		            nav:false
		        },
		        991:{
		            items:1,
		            nav:true,
		            loop:true
		        }
		    }
		})
		});


		$(document).ready(function(){
		  $(".owl-carousel3").owlCarousel({
		    loop:true,
		    margin:10,
		    responsiveClass:true,
		    smartSpeed:1000,
		    thumbs:false,
		    responsive:{
		        0:{
		            items:1,
		            nav:true
		        },
		        767:{
		            items:2,
		            nav:false
		        },
		        991:{
		            items:4,
		            nav:true,
		            loop:true
		        }
		    }
		})
		});

		$(document).ready(function(){
		  $(".owl-carousel4").owlCarousel({
		    loop:false,
		    margin:10,
		    responsiveClass:true,
		    thumbs:true,
		    thumbImage: true,
		    thumbContainerClass: 'owl-thumbs',
		    thumbItemClass: 'owl-thumb-item',
		    smartSpeed:1000,
		    responsive:{
		        0:{
		            items:1,
		            nav:true
		        },
		        767:{
		            items:1,
		            nav:false
		        },
		        991:{
		            items:1,
		            nav:true,
		            loop:true
		        }
		    }
		})
		});


		$(document).ready(function(){
		  $(".owl-carousel5").owlCarousel({
		    loop:true,
		    margin:40,
		    responsiveClass:true,
		    thumbs:true,
		    smartSpeed:1000,
		    responsive:{
		        0:{
		            items:1,
		            nav:false
		        },
		        767:{
		            items:2,
		            nav:false
		        },
		        991:{
		            items:2,
		            nav:false,
		            loop:true
		        }
		    }
		})
		});

		$(document).ready(function(){
		  $(".owl-carousel-side").owlCarousel({
		    loop:true,
		    margin:10,
		    responsiveClass:true,
		    thumbs:false,
		    smartSpeed:1000,
		    responsive:{
		        0:{
		            items:1,
		            nav:true
		        },
		        767:{
		            items:1,
		            nav:false
		        },
		        991:{
		            items:1,
		            nav:true,
		            loop:true
		        }
		    }
		})
		});

		$(document).ready(function(){
		  $(".owl-carousel6").owlCarousel({
		    loop:true,
		    margin:40,
		    responsiveClass:true,
		    thumbs:true,
		    smartSpeed:1000,
		    responsive:{
		        0:{
		            items:1,
		            nav:false
		        },
		        767:{
		            items:2,
		            nav:false
		        },
		        991:{
		            items:2,
		            nav:false,
		            loop:true
		        }
		    }
		})
		});

		$(document).ready(function(){
		  $(".owl-carousel-single-top").owlCarousel({
		    loop:true,
		    margin:10,
		    responsiveClass:true,
		    smartSpeed:1000,
		    thumbs:false,
		    responsive:{
		        0:{
		            items:1,
		            nav:true
		        },
		        767:{
		            items:1,
		            nav:false
		        },
		        991:{
		            items:1,
		            nav:true,
		            loop:true
		        }
		    }
		})
		});

		$(document).ready(function(){
		  $(".owl-carousel7").owlCarousel({
		    loop:true,
		    margin:30,
		    responsiveClass:true,
		    thumbs:false,
		    smartSpeed:1000,
		    responsive:{
		        0:{
		            items:1,
		            nav:false
		        },
		        767:{
		            items:2,
		            nav:false
		        },
		        991:{
		            items:4,
		            nav:true,
		            loop:true
		        }
		    }
		})
		});


		$(document).ready(function(){
		  $(".owl-carousel8").owlCarousel({
		    loop:true,
		    margin:10,
		    responsiveClass:true,
		    smartSpeed:1000,
		    thumbs:false,
		    responsive:{
		        0:{
		            items:1,
		            nav:true
		        },
		        767:{
		            items:1,
		            nav:false
		        },
		        991:{
		            items:1,
		            nav:true,
		            loop:true
		        }
		    }
		})
		});


		$(document).ready(function(){
		  $(".owl-carousel9").owlCarousel({
		    loop:true,
		    margin:30,
		    responsiveClass:true,
		    thumbs:false,
		    smartSpeed:1000,
		    responsive:{
		        0:{
		            items:1,
		            nav:false
		        },
		        767:{
		            items:1,
		            nav:false
		        },
		        991:{
		            items:1,
		            nav:true,
		            loop:true
		        }
		    }
		})
		});

		$(document).ready(function(){
		  $(".owl-carousel10").owlCarousel({
		    loop:true,
		    margin:30,
		    responsiveClass:true,
		    thumbs:false,
		    smartSpeed:1000,
		    responsive:{
		        0:{
		            items:1,
		            nav:false
		        },
		        767:{
		            items:3,
		            nav:false
		        },
		        991:{
		            items:5,
		            nav:true,
		            loop:true
		        }
		    }
		})
		});


		$(document).ready(function(){
		  $(".owl-carousel-news1").owlCarousel({
		    loop:true,
		    margin:10,
		    responsiveClass:true,
		    autoplay:true,
		    thumbs:false,
		    smartSpeed:1000,
		    responsive:{
		        0:{
		            items:1,
		            nav:true
		        },
		        767:{
		            items:1,
		            nav:false
		        },
		        991:{
		            items:1,
		            nav:true,
		            loop:true
		        }
		    }
		})
		});
		$(document).ready(function(){
		  $(".owl-carousel-news2").owlCarousel({
		    loop:true,
		    margin:10,
		    responsiveClass:true,
		    autoplay:true,
		    thumbs:false,
		    smartSpeed:1000,
		    responsive:{
		        0:{
		            items:1,
		            nav:true
		        },
		        767:{
		            items:1,
		            nav:false
		        },
		        991:{
		            items:1,
		            nav:true,
		            loop:true
		        }
		    }
		})
		});

		/*Gallery owl carousel*/

		$(document).ready(function(){
		  $(".owl-carousel-gal2").owlCarousel({
		    loop:true,
		    margin:10,
		    responsiveClass:true,
		    smartSpeed:1000,
		    thumbs:true,
		    responsive:{
		        0:{
		            items:1,
		            nav:true
		        },
		        767:{
		            items:2,
		            nav:false
		        },
		        991:{
		            items:2,
		            nav:false,
		            loop:true
		        }
		    }
		})
		});

		$(document).ready(function(){
		  $(".owl-carousel-gal3").owlCarousel({
		    loop:true,
		    margin:10,
		    responsiveClass:true,
		    smartSpeed:1000,
		    thumbs:true,
		    responsive:{
		        0:{
		            items:1,
		            nav:true
		        },
		        767:{
		            items:2,
		            nav:false
		        },
		        991:{
		            items:3,
		            nav:false,
		            loop:true
		        }
		    }
		})
		});

		$(document).ready(function(){
		  $(".owl-carousel-gal4").owlCarousel({
		    loop:true,
		    margin:10,
		    responsiveClass:true,
		    smartSpeed:1000,
		    thumbs:true,
		    responsive:{
		        0:{
		            items:1,
		            nav:true
		        },
		        767:{
		            items:3,
		            nav:false
		        },
		        991:{
		            items:4,
		            nav:false,
		            loop:true
		        }
		    }
		})
		});

		$(document).ready(function(){
		  $(".owl-carousel-big-gal").owlCarousel({
		    loop:true,
		    margin:10,
		    responsiveClass:true,
		    smartSpeed:1000,
		    thumbs:true,
		    responsive:{
		        0:{
		            items:1,
		            nav:true
		        },
		        767:{
		            items:1,
		            nav:false
		        },
		        991:{
		            items:1,
		            nav:false,
		            loop:true
		        }
		    }
		})
		});

		$(document).ready(function(){
		  $(".owl-carousel-single-test").owlCarousel({
		    loop:true,
		    margin:40,
		    responsiveClass:true,
		    thumbs:true,
		    smartSpeed:1000,
		    responsive:{
		        0:{
		            items:1,
		            nav:false
		        },
		        767:{
		            items:1,
		            nav:false
		        },
		        991:{
		            items:1,
		            nav:false,
		            loop:true
		        }
		    }
		})
		});



/*
6. Top Sliding Panel
*/		

$(document).ready(function () {

	if (jQuery(window).width() < 992) {
		$(".mcare-header-bg").css("background-color", "#0ec0c0");
	}
	$("#flip").click(function(){
		 		//$("#panel-top").css("margin-top:0px");
		 		 //$("#panel-top").animate({'margin-top':'0px'}, 'fast');

		 		 $("#panel-top").toggle(400);
			});
			
});
$(window).resize(function () { 
	$('#panel-top').hide();
});



/*
7. Share Toggle
*/	

$(document).on("click", '.share-toggle', function(event) 
{
    event.preventDefault();
    $(this).toggleClass('toggle-active');
    $(this).siblings('.share').toggleClass('share-active');
});



/*
8 Menu Dropdown Fade Effect 
*/

 $(function(){
    $(".dropdown").hover(            
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
                $(this).toggleClass('open');            
            },
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
                $(this).toggleClass('open');               
            });
    });


/*
9  Slit Slider
*/

$(function() {
			
				var Page = (function() {

					var $navArrows = $( '#nav-arrows' ),
						$nav = $( '#nav-dots > span' ),
						slitslider = $( '#slider' ).slitslider( {
							onBeforeChange : function( slide, pos ) {

								$nav.removeClass( 'nav-dot-current' );
								$nav.eq( pos ).addClass( 'nav-dot-current' );

							}
						} ),

						init = function() {

							initEvents();
							
						},
						initEvents = function() {

							// add navigation events
							$navArrows.children( ':last' ).on( 'click', function() {

								slitslider.next();
								return false;

							} );

							$navArrows.children( ':first' ).on( 'click', function() {
								
								slitslider.previous();
								return false;

							} );

							$nav.each( function( i ) {
							
								$( this ).on( 'click', function( event ) {
									
									var $dot = $( this );
									
									if( !slitslider.isActive() ) {

										$nav.removeClass( 'nav-dot-current' );
										$dot.addClass( 'nav-dot-current' );
									
									}
									
									slitslider.jump( i + 1 );
									return false;
								
								} );
								
							} );

						};

						return { init : init };

				})();

				Page.init();

				/**
				 * Notes: 
				 * 
				 * example how to add items:
				 */

				/*
				
				var $items  = $('<div class="sl-slide sl-slide-color-2" data-orientation="horizontal" data-slice1-rotation="-5" data-slice2-rotation="10" data-slice1-scale="2" data-slice2-scale="1"><div class="sl-slide-inner bg-1"><div class="sl-deco" data-icon="t"></div><h2>some text</h2><blockquote><p>bla bla</p><cite>Margi Clarke</cite></blockquote></div></div>');
				
				// call the plugin's add method
				ss.add($items);

				*/
			
			});
			jQuery('a.introVidnow').click(function(){
				
				autoPlayVideo('zcO6JEBkwAc','100%','479');
				$(".introVidnow").css("display", "none");
				//$(".video_wrapper").css("position", "relative");
				$(".video_wrapper").css("z-index", "2").delay(2800);
			  
			  
			});
			function autoPlayVideo(vcode, width, height){
			  "use strict";
			  $(".video_wrapper").html('<iframe width="'+width+'" height="'+height+'" class="inner-vid" style="" src="https://www.youtube.com/embed/'+vcode+'?autoplay=1&loop=1&rel=0&wmode=transparent" frameborder="0" allowfullscreen wmode="Opaque"></iframe>');
			}


/*
10 Filterable Portfolio
*/

/* ==============================================
Filterable doctor 3 col
===============================================*/

$(window).load(function(){

    var $container = $('.portfolioContainer');

    $container.isotope({
    	animationEngine : 'best-available',
    	itemSelector : '.work',
        filter: '*',
        animationOptions: {		        	
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
 
    $('.portfolioFilter a').click(function(){
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false
    }
            
         });
         return false;
    });
});


 /* ==============================================
Filterable doctor 4 col
===============================================*/

		$(window).load(function(){

		    var $container = $('.portfolioContainer');

		    $container.isotope({
		    	animationEngine : 'best-available',
		    	itemSelector : '.work',
		        filter: '*',
		        animationOptions: {		        	
		            duration: 750,
		            easing: 'linear',
		            queue: false
		        }
		    });
		 
		    $('.portfolioFilter a').click(function(){
		        $('.portfolioFilter .current').removeClass('current');
		        $(this).addClass('current');
		 
		        var selector = $(this).attr('data-filter');
		        $container.isotope({
		            filter: selector,
		            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
		            
		         });
		         return false;
		    });
		});





/*
11. Callender js 
*/

$(document).ready(function() {

		$('#calendar').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
			defaultDate: '2015-02-12',
			businessHours: true, // display business hours
			editable: true,
			events: [
				{
					title: 'Business Lunch',
					start: '2015-02-03T13:00:00',
					constraint: 'businessHours'
				},
				{
					title: 'Meeting',
					start: '2015-02-13T11:00:00',
					constraint: 'availableForMeeting', // defined below
					color: '#257e4a'
				},
				{
					title: 'Conference',
					start: '2015-02-18',
					end: '2015-02-20'
				},
				{
					title: 'Party',
					start: '2015-02-29T20:00:00'
				},

				// areas where "Meeting" must be dropped
				{
					id: 'availableForMeeting',
					start: '2015-02-11T10:00:00',
					end: '2015-02-11T16:00:00',
					rendering: 'background'
				},
				{
					id: 'availableForMeeting',
					start: '2015-02-13T10:00:00',
					end: '2015-02-13T16:00:00',
					rendering: 'background'
				},

				// red areas where no events can be dropped
				{
					start: '2015-02-24',
					end: '2015-02-28',
					overlap: false,
					rendering: 'background',
					color: '#ff9f89'
				},
				{
					start: '2015-02-06',
					end: '2015-02-08',
					overlap: false,
					rendering: 'background',
					color: '#ff9f89'
				}
			]
		});
		
	});


/*
Flex Slider Carousel Calling
*/

$(function(){
      SyntaxHighlighter.all();
    });
    $(window).load(function(){
      $('#carousel').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: true,
        slideshow: false,
        itemWidth: 183,
        itemMargin: 5,
        asNavFor: '#slider'
      });

      $('#slider').flexslider({
        animation: "fade",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        sync: "#carousel",
        start: function(slider){
          $('body').removeClass('loading');
        }
      });
    });


/*
Sticky Header
*/



$(window).load(function(){
      $("#headerstic").sticky({ topSpacing: 0 });
    });


/*
Gallery Popup Calling
Magnifique popup
*/

$('.parent-container-img2').each(function() { // the containers for all your galleries
    $(this).magnificPopup({
        delegate: 'figure', // the selector for gallery item
        type: 'image',
        closeBtnInside:false,
        mainClass: 'mfp-with-zoom',

        zoom: {
		    enabled: true, // By default it's false, so don't forget to enable it

		    duration: 300, // duration of the effect, in milliseconds
		    easing: 'ease-in-out', // CSS transition easing function 

		    // The "opener" function should return the element from which popup will be zoomed in
		    // and to which popup will be scaled down
		    // By defailt it looks for an image tag:
		    opener: function(openerElement) {
		      // openerElement is the element on which popup was initialized, in this case its <a> tag
		      // you don't need to add "opener" option if this code matches your needs, it's defailt one.
		      return openerElement.is('img') ? openerElement : openerElement.find('img');
		    }
		  },

		   callbacks: {
			   
			    buildControls: function() {
			      // re-appends controls inside the main container
			      this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
			    },
			    change: function() {
		        if (this.isOpen) {
		            this.wrap.addClass('mfp-open');
		        }
    }
			  },


        gallery: {
          enabled:true
        }

    });
});


/*Gallery Popup call*/
$('.parent-container-img').each(function() { // the containers for all your galleries
    $(this).magnificPopup({
        delegate: 'figure', // the selector for gallery item
        type: 'image',
        closeBtnInside:false,
        mainClass: 'mfp-with-zoom',

        zoom: {
		    enabled: true, // By default it's false, so don't forget to enable it

		    duration: 300, // duration of the effect, in milliseconds
		    easing: 'ease-in-out', // CSS transition easing function 

		    // The "opener" function should return the element from which popup will be zoomed in
		    // and to which popup will be scaled down
		    // By defailt it looks for an image tag:
		    opener: function(openerElement) {
		      // openerElement is the element on which popup was initialized, in this case its <a> tag
		      // you don't need to add "opener" option if this code matches your needs, it's defailt one.
		      return openerElement.is('img') ? openerElement : openerElement.find('img');
		    }
		  },

		   callbacks: {
			   
			    buildControls: function() {
			      // re-appends controls inside the main container
			      this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
			    },
			    change: function() {
		        if (this.isOpen) {
		            this.wrap.addClass('mfp-open');
		        }
    }
			  },


        gallery: {
          enabled:true
        }

    });
});

/*Preloader*/


jQuery(window).load(function(){
    jQuery("#preloader").delay(500).fadeOut(1000);
    jQuery(".preload-logo").addClass('fade-out-left');
    jQuery(".back-logo").addClass('fade-out-right');
    jQuery(".preload-gif").addClass('fade-out-up');
    
});


/*Quick Sidebar*/

var 
				
	menuRight = document.getElementById( 'cbp-spmenu-s2' ),
	menuLeft2 = document.getElementById( 'cbp-spmenu-s2' ),
	
	showLeft2 = document.getElementById( 'showLeft2' ),
	showRight = document.getElementById( 'showRight' ),
	
	body = document.body;


showLeft2.onclick = function() {
	classie.toggle( this, 'active' );
	classie.toggle( menuRight, 'cbp-spmenu-open' );
};

showRight.onclick = function() {
	classie.toggle( this, 'active' );
	classie.toggle( menuRight, 'cbp-spmenu-open' );
};

