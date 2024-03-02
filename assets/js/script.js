(function ($) {

    /* ============================================================ */
    /* PRELOADER
    /* ============================================================ */
    $(window).on('load', function() {
        $(".preloader").fadeOut();     
    });
    
    /* ============================================================ */
    /* Mobile Menu Integration
    /* ============================================================ */
    function mobile_menu(selector, actionSelector) {
        var mobile_menu = $(selector);
        mobile_menu.on('click', function() {
            $(selector).toggleClass('is-menu-open');
        });

        var hamburgerbtn = $(selector);
        hamburgerbtn.on('click', function() {
            $(actionSelector).toggleClass('is-menu-open');
        });

        $(document).on('click', function(e) {
            var selectorType = $(actionSelector).add(mobile_menu);
            if (
                selectorType.is(e.target) !== true &&
                selectorType.has(e.target).length === 0
            ) {
                $(actionSelector).removeClass('is-menu-open');
                $(selector).removeClass('is-menu-open');
            }
        });
        $('.mobile-menu .site-menu a, .menu-overlay').on('click', function(e) {
            $(actionSelector).removeClass('is-menu-open');
            $(selector).removeClass('is-menu-open');
        });
    }
    mobile_menu(
        '.menu-toggler, .close-menu ',
        '.mobile-menu, .menu-overlay'
    );  
        


    /* ============================================================ */
    /* Swiper Slider Init
    /* ============================================================ */
    var heroSlider = new Swiper('.heroSlider .swiper', {
        slidesPerView: 1,
        loop: 1,
        speed: 1000,
        autoplay:{
            delay: 5000,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
    });
    var worksSlider = new Swiper('.works__slider', {
        slidesPerView: 1.5,
        loop: 1,
        speed: 800,
        // autoplay:{
        //     delay: 3000,
        // }, 
        spaceBetween: 10,
		pagination: {
			el: ".works__pagination",
			clickable: true,
		},
		breakpoints: {
			576: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 3.5,
			},
		}
    });
    var worksSlider = new Swiper('.instagram__gallery .swiper', {
        slidesPerView: 3,
        loop: 1,
        speed: 5000,
        autoplay: {
            delay: 0,
            disableOnInteraction: true,
        },
        allowTouchMove: false,
        spaceBetween: 0,
		breakpoints: {
			576: {
				slidesPerView: 4,
			},
			992: {
				slidesPerView: 6,
			},
			1200: {
				slidesPerView: 8,
			},
		}
    });
    var videoActionSlider = new Swiper('.video__wrapper.swiper', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: 1,
        speed: 800,
        navigation: {
            nextEl: '.video__wrapper .slide__next',
            prevEl: '.video__wrapper .slide__prev',
          }
    });

    /* ============================================================ */
    /* Scroll Top
    /* ============================================================ */
    $('body').append(
        `<a href='#home' title='Scroll Top' id='scroll-top' class='topbutton'><svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'><path fill-rule='evenodd' d='M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z'/></svg></a>`
    );
    var $scrolltop = $('#scroll-top');
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > $(this).height()) {
            $scrolltop.addClass('btn-show').removeClass('btn-hide');
        } else {
            $scrolltop.addClass('btn-hide').removeClass('btn-show');
        }
    });
    $("a[href='#home']").on('click', function () {
        $('html, body').animate(
            {
                scrollTop: 0,
            },
            'normal'
        );
        return false;
    });

    
})(jQuery);