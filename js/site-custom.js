	$(window).load(function() {

	    'use strict';
	    $("#loader").fadeOut("slow")


	});

	/* ==============================================
	Custom Javascript
	=============================================== */
	$(document).ready(function() {

	    'use strict';
		
		// Mouse Wheel Scrolling
		//jQuery.scrollSpeed(100, 800);
		
	    // Main Navigation
	    jQuery("#main-menu").menuzord({
	        align: "right",
	        animation: "none",
	        effect: "slide",
	        indicatorFirstLevel: "<i class='fa fa-angle-down'></i>",
	        indicatorSecondLevel: "<i class='fa fa-angle-right'></i>"
	    });

	    $(function() {
	        var header = $("#nav-wrap"),
	            yOffset = 0,
	            triggerPoint = 150;
	        $(window).scroll(function() {
	            yOffset = $(window).scrollTop();

	            if (yOffset >= triggerPoint) {
	                header.addClass("navbar-fixed-top animated fadeInDown");
	            } else {
	                header.removeClass("navbar-fixed-top animated fadeInDown");
	            }

	        });
	    });

	    var body = $('body'),
	        toggle = $('#offcanvas-toggle'),
	        container = $('#offcanvas-container'),
	        overlay = $('#offcanvas-overlay'),
	        oncanvas_css_class_name = 'oncanvas',
	        scroll_lock_css_class_name = 'scroll-lock';

	    $('.offcanvas-toggle').on('click', function(e) {
	        e.preventDefault();

	        toggle.toggleClass(oncanvas_css_class_name);
	        container.toggleClass(oncanvas_css_class_name);
	        body.toggleClass(scroll_lock_css_class_name);
	        overlay.toggleClass(oncanvas_css_class_name);
	    });

	    // Open Video
	    jQuery('.play-video').on('click', function(e) {
	        var videoContainer = jQuery('.video-box');
	        videoContainer.prepend('<iframe src="http://player.vimeo.com/video/7449107" width="500" height="281" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
	        videoContainer.fadeIn(300);
	        e.preventDefault();
	    });
	    // Close Video
	    jQuery('.close-video').on('click', function(e) {
	        jQuery('.video-box').fadeOut(400, function() {
	            jQuery("iframe", this).remove().fadeOut(300);
	        });
	    });

	    /* Tooltip */
	    $('.social-icons ul li a').tooltip({
	        placement: 'top',
	        animation: true,
	        delay: {
	            show: 200,
	            hide: 100
	        }
	    });

	    // Flickr Photostream
	    $('#basicuse').jflickrfeed({
	        limit: 9,
	        qstrings: {
	            id: '52617155@N08'
	        },
	        itemTemplate: '<li><a href="{{image_b}}"><img src="{{image_s}}" alt="{{title}}" /></a></li>'
	    });

	    $('.skillbar').appear();
	    $('.skillbar').on('appear', function() {
	        $(this).find('.skillbar-bar').animate({
	            width: $(this).attr('data-percent')
	        }, 3000);
	    });

	    // Piecharts
	    jQuery('#pie-charts').waypoint(function(direction) {
	        jQuery('.chart').easyPieChart({
	            barColor: "#323232",
	            trackColor: "#FFF",
	            onStep: function(from, to, percent) {
	                jQuery(this.el).find('.percent').text(Math.round(percent));
	            }
	        });
	    }, {
	        offset: function() {
	            return jQuery.waypoints('viewportHeight') - jQuery(this).height() + 200;
	        }
	    });

	    // Twitter Feed
	    $(".tweet-stream").tweet({
	        username: "envato",
	        modpath: "twitter/",
	        count: 2,
	        template: "{text}{time}",
	        loading_text: "loading twitter feed..."
	    });

	    $.stellar({
	        responsive: true,
	        horizontalScrolling: false,
	        verticalOffset: 40
	    });

	    /* Conter */
	    $('.counter').counterUp({
	        delay: 10,
	        time: 1000
	    });

	    $('.fancybox-media')
	        .attr('rel', 'media-gallery')
	        .fancybox({
	            openEffect: 'none',
	            closeEffect: 'none',
	            prevEffect: 'none',
	            nextEffect: 'none',

	            arrows: false,
	            helpers: {
	                locked: true,
	                media: {},
	                buttons: {}
	            }
	        });

	    // fade in #back-top
	    /*$(function() {
	        $(window).scroll(function() {
	            if ($(this).scrollTop() > 100) {
	                $('#back-top').fadeIn();
	            } else {
	                $('#back-top').fadeOut();
	            }
	        });
	        // scroll body to 0px on click
	        $('#back-top a').click(function() {
	            $('body,html').animate({
	                scrollTop: 0
	            }, 800);
	            return false;
	        });
	    });*/

	    // Our Portfolio Slider


	    $("#home-portfolio").owlCarousel({
	        items: 3,
	        margin: 30,
	        loop: true,
	        nav: true,
	        slideBy: 1,
	        dots: false,
	        center: false,
	        autoplay: true,
	        autoheight: true,
	        navText: ['&#xf104;', '&#xf105'],
	        responsive: {
	            320: {
	                items: 1,
	            },
	            480: {
	                items: 2,
	            },
	            600: {
	                items: 2,
	            },
	            1000: {
	                items: 3,
	                loop: true,
	            },
	            1200: {
	                items: 3,
	                loop: true,
	            }
	        }
	    });
	    $("#home-clients").owlCarousel({
	        items: 3,
	        margin: 30,
	        loop: true,
	        nav: false,
	        slideBy: 1,
	        dots: true,
	        center: false,
	        autoplay: true,
	        autoheight: true,
	        navText: ['&#xf104;', '&#xf105'],
	        responsive: {
	            320: {
	                items: 1,
	            },
	            480: {
	                items: 2,
	            },
	            600: {
	                items: 2,
	            },
	            1000: {
	                items: 3,
	                loop: true,
	            },
	            1200: {
	                items: 3,
	                loop: true,
	            }
	        }
	    });
	    $("#home-menu").owlCarousel({
	        items: 4,
	        margin: 30,
	        loop: true,
	        nav: true,
	        slideBy: 1,
	        dots: false,
	        center: false,
	        autoplay: true,
	        autoheight: true,
	        navText: ['&#xf104;', '&#xf105'],
	        responsive: {
	            320: {
	                items: 1,
	            },
	            480: {
	                items: 2,
	            },
	            600: {
	                items: 3,
	            },
	            1000: {
	                items: 3,
	                loop: true,
	            },
	            1200: {
	                items: 3,
	                loop: true,
	            }
	        }
	    });

	    $("#home-services").owlCarousel({
	        items: 1,
	        margin: 0,
	        loop: true,
	        nav: false,
	        slideBy: 1,
	        dots: true,
	        center: false,
	        autoplay: true,
	        autoheight: true,
	        navText: ['&#xf104;', '&#xf105'],
	    });

	    $("#home-menu").owlCarousel({
	        items: 1,
	        margin: 0,
	        loop: true,
	        nav: true,
	        slideBy: 1,
	        dots: true,
	        center: false,
	        autoplay: true,
	        autoheight: true,
	        navText: ['&#xf104;', '&#xf105'],
	    });

	    // Google Map
	    $("#map_extended").gMap({
	        markers: [{
	            address: "",
	            html: '<h4>Office</h4>' +
	                '<address>' +
	                '<div>' +
	                '<div><b>Address:</b></div>' +
	                '<div>Envato Pty Ltd, 13/2<br> Elizabeth St Melbourne VIC 3000,<br> Australia</div>' +
	                '</div>' +
	                '<div>' +
	                '<div><b>Phone:</b></div>' +
	                '<div>+1 (408) 786 - 5117</div>' +
	                '</div>' +
	                '<div>' +
	                '<div><b>Fax:</b></div>' +
	                '<div>+1 (408) 786 - 5227</div>' +
	                '</div>' +
	                '<div>' +
	                '<div><b>Email:</b></div>' +
	                '<div><a href="mailto:info@valleta.com">info@info@valleta.com</a></div>' +
	                '</div>' +
	                '</address>',
	            latitude: 40.432355,
	            longitude: -3.71442,
	            icon: {
	                image: "images/pin.png",
	                iconsize: [35, 48],
	                iconanchor: [17, 48]
	            }
	        }, ],
	        icon: {
	            image: "images/pin.png",
	            iconsize: [35, 48],
	            iconanchor: [17, 48]
	        },
	        latitude: 40.432355,
	        longitude: -3.71442,
	        zoom: 17
	    });

	    // Contact Form
	    jQuery("#contact_form").validate({
	        meta: "validate",
	        submitHandler: function(form) {

	            var s_name = $("#name").val();
	            var s_lastname = $("#lastname").val();
	            var s_email = $("#email").val();
	            var s_phone = $("#phone").val();
	            var s_suject = $("#subject").val();
	            var s_comment = $("#comment").val();
	            var s_guest = $("#guest").val();
	            $.post("contact.php", {
	                    name: s_name,
	                    lastname: s_lastname,
	                    email: s_email,
	                    phone: s_phone,
	                    subject: s_suject,
	                    comment: s_comment,
	                    guest : s_guest
	                },
	                function(result) {
	                    $('#sucessmessage').append(result);
	                });
	            $('#contact_form').hide();
	            return false;
	        },
	        /* */
	        rules: {
	            name: "required",

	            lastname: "required",
	            // simple rule, converted to {required:true}
	            email: { // compound rule
	                required: true,
	                email: true
	            },
	            phone: {
	                required: true,
	            },
	            comment: {
	                required: true
	            },
	            subject: {
	                required: true
	            },
	            guest :{
	            	required : true
	            }
	        },
	        messages: {
	            name: "Please enter your name.",
	            lastname: "Please enter your last name.",
	            email: {
	                required: "Please enter email.",
	                email: "Please enter valid email"
	            },
	            phone: "Please enter a phone.",
	            subject: "Please enter a subject.",
	            comment: "Please enter a comment.",
	            guest : "Por favor indique el numero de personas"
	        },
	    }); /*========================================*/

	    // init cubeportfolio
	    // Portfolio Style 2 Mosaic Flat
	    $('#js-styl2-mosaic-flat').cubeportfolio({
	        filters: '#js-filters-styl2-mosaic-flat',
	        loadMore: '#js-loadMore-styl2-mosaic-flat',
	        loadMoreAction: 'click',
	        layoutMode: 'mosaic',
	        sortToPreventGaps: true,
	        mediaQueries: [{
	            width: 1500,
	            cols: 5
	        }, {
	            width: 1100,
	            cols: 4
	        }, {
	            width: 800,
	            cols: 3
	        }, {
	            width: 480,
	            cols: 2
	        }, {
	            width: 320,
	            cols: 1
	        }],
	        defaultFilter: '*',
	        animationType: 'quicksand',
	        gapHorizontal: 0,
	        gapVertical: 0,
	        gridAdjustment: 'responsive',
	        caption: 'minimal',
	        displayType: 'sequentially',
	        displayTypeSpeed: 100,

	        // lightbox
	        lightboxDelegate: '.cbp-lightbox',
	        lightboxGallery: true,
	        lightboxTitleSrc: 'data-title',
	        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',
	    });
		
		$('#js-grid-juicy-projects').cubeportfolio({
        filters: '#js-filters-juicy-projects',
        loadMore: '#js-loadMore-juicy-projects',
        loadMoreAction: 'click',
        layoutMode: 'grid',
        defaultFilter: '*',
        animationType: 'quicksand',
        gapHorizontal: 30,
        gapVertical: 30,
        gridAdjustment: 'responsive',
        mediaQueries: [{
            width: 1500,
            cols: 3
        }, {
            width: 1100,
            cols: 3
        }, {
            width: 800,
            cols: 3
        }, {
            width: 480,
            cols: 2
        }, {
            width: 320,
            cols: 1
        }],
        caption: 'fadeIn',
        displayType: 'sequentially',
        displayTypeSpeed: 80,

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

        // singlePage popup
        singlePageDelegate: '.cbp-singlePage',
        singlePageDeeplinking: true,
        singlePageStickyNavigation: true,
        singlePageCounter: '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
        singlePageCallback: function(url, element) {
            // to update singlePage content use the following method: this.updateSinglePage(yourContent)
            var t = this;

            $.ajax({
                    url: url,
                    type: 'GET',
                    dataType: 'html',
                    timeout: 10000
                })
                .done(function(result) {
                    t.updateSinglePage(result);
                })
                .fail(function() {
                    t.updateSinglePage('AJAX Error! Please refresh the page!');
                });
        },
    });
	
		
		// init cubeportfolio
		$('#js-grid-awesome-work-new').cubeportfolio({
			filters: '#js-filters-awesome-work-new',
			loadMore: '#js-loadMore-awesome-work-new',
			loadMoreAction: 'click',
			layoutMode: 'grid',
			defaultFilter: '*',
			animationType: 'scaleSides',
			gapHorizontal: 0,
			gapVertical: 0,
			gridAdjustment: 'responsive',
			mediaQueries: [{
				width: 1500,
				cols: 2
			}, {
				width: 1100,
				cols: 2
			}, {
				width: 480,
				cols: 2
			}, {
				width: 320,
				cols: 1
			}],
			caption: 'zoom',
			displayType: 'lazyLoading',
			displayTypeSpeed: 400,
	
		   // lightbox
			lightboxDelegate: '.cbp-lightbox',
			lightboxGallery: true,
			lightboxTitleSrc: 'data-title',
			lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',
		});
		
		$('#awesome-work-3-col').cubeportfolio({
			filters: '#js-filters-awesome-work-3',
			loadMore: '#js-loadMore-awesome-work-3',
			loadMoreAction: 'click',
			layoutMode: 'grid',
			defaultFilter: '*',
			animationType: 'scaleSides',
			gapHorizontal: 0,
			gapVertical: 0,
			gridAdjustment: 'responsive',
			mediaQueries: [{
				width: 1500,
				cols: 3
			}, {
				width: 1100,
				cols: 3
			}, {
				width: 480,
				cols: 2
			}, {
				width: 320,
				cols: 1
			}],
			caption: 'zoom',
			displayType: 'lazyLoading',
			displayTypeSpeed: 400,
	
		   // lightbox
			lightboxDelegate: '.cbp-lightbox',
			lightboxGallery: true,
			lightboxTitleSrc: 'data-title',
			lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',
		});

	    $("#js-grid-mosaic-projects").cubeportfolio({
	            filters: "#js-filters-grid-mosaic-projects",
	            loadMore: "#js-loadMore-grid-mosaic-projects",
	            loadMoreAction: "click",
	            layoutMode: "mosaic",
	            defaultFilter: "*",
	            animationType: "quicksand",
	            gapHorizontal: 20,
	            gapVertical: 20,
	            gridAdjustment: "responsive",
	            mediaQueries: [{
	                width: 1500,
	                cols: 2
	            }, {
	                width: 1100,
	                cols: 4
	            }, {
	                width: 800,
	                cols: 3
	            }, {
	                width: 480,
	                cols: 2
	            }, {
	                width: 320,
	                cols: 1
	            }],
	            caption: "minimal",
	            displayType: "sequentially",
	            displayTypeSpeed: 80
	        }),
			
			$("#js-grid-awesome-work-2col").cubeportfolio({
				filters: "#js-filters-awesome-work-2col",
				loadMore: "#js-loadMore-awesome-work-2col",
				loadMoreAction: "click",
				layoutMode: "grid",
				defaultFilter: "*",
				animationType: "scaleSides",
				gapHorizontal: 20,
				gapVertical: 20,
				gridAdjustment: "responsive",
				mediaQueries: [{
					width: 1500,
					cols: 2
				}, {
					width: 1100,
					cols: 2
				}, {
					width: 480,
					cols: 2
				}, {
					width: 320,
					cols: 1
				}],
				caption: "zoom",
				displayType: "fadeIn",
				displayTypeSpeed: 400
			}),
	        

	        // init cubeportfolio
	        $('#js-grid-tabs').cubeportfolio({
	            filters: '#js-filters-tabs',
	            defaultFilter: '.breakfast',
	            animationType: 'bounceTop',
	            gridAdjustment: 'default',
	            displayType: 'default',
	            caption: '',
	        });

	    $(".btn-settings").on("click", function() {
	        $(this).parent().toggleClass("active")
	    }), $(".color-list div").on("click", function() {
	        if ($(this).hasClass("active")) return !1;
	        $("link.color-scheme-link").remove(), $(this).addClass("active").siblings().removeClass("active");
	        var e = $(this).attr("data-src"),
	            i = $('<link class="color-scheme-link" rel="stylesheet" />');
	        i.attr("href", e).appendTo("head")
	    }), $(".reset").on("click", function() {
	        if ($(".color-list div").removeClass("active"), $(this).hasClass("active")) return !1;
	        $("link.color-scheme-link").remove();
	        var e = $(this).attr("data-src"),
	            i = $('<link class="color-scheme-link" rel="stylesheet" />');
	        i.attr("href", e).appendTo("head")
	    }), $(".reset span").on("click", function() {
	        var e = $(this).attr("class");
	        $("body").attr("class", e)
	    })

	});