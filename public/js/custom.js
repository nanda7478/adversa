jQuery(function () {
  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop()) {
      jQuery("#back-top").fadeIn();
    } else {
      jQuery("#back-top").fadeOut();
    }
  });
  });

  


  
jQuery(".secure-transactions-slider").owlCarousel({
  center: false,
  items:6,
  loop:true,
  margin:10,
  autoWidth:true,
  nav:false,
  dots:false,
  autoplay: true,
  slideTransition: 'linear',
  autoplayTimeout: 2000,
  autoplaySpeed: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
    items: 2,
    margin: 20,
    },
    480: {
    items: 4,
    margin: 40,
    },
    575: {
    items: 5,
    margin: 40,
    },
    700: {
    items: 6,
    margin: 40,
    },
    1200: {
    items: 6,
    margin: 40,
    },
    1300: {
    items: 6,
    margin: 60,
    },
    1400: {
    items: 6,
    margin: 80,
    },
    1500: {
    items: 6,
    margin: 100,
    },
    1600: {
    items:6,
    margin: 10,
    },
  },
});

jQuery(".right-secure-transactions-slider").owlCarousel({
  center: false,
  items:6,
  loop:true,
  margin:10,
  autoWidth:true,
  nav:false,
  dots:false,
  autoplay: true,
  slideTransition: 'linear',
  autoplayTimeout: 2000,
  autoplaySpeed: 2000,
  autoplayHoverPause: true,rtl: true,
  responsive: {
    0: {
    items: 2,
    margin: 20,
    },
    480: {
    items: 4,
    margin: 40,
    },
    575: {
    items: 5,
    margin: 40,
    },
    700: {
    items: 6,
    margin: 40,
    },
    1200: {
    items: 6,
    margin: 40,
    },
    1300: {
    items: 6,
    margin: 60,
    },
    1400: {
    items: 6,
    margin: 80,
    },
    1500: {
    items: 6,
    margin: 100,
    },
    1600: {
    items:6,
    margin: 10,
    },
  },
});





jQuery('.testimonials-slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});




jQuery(window).scroll(function () {
  var sticky = jQuery("#myHeader"),
    scroll = jQuery(window).scrollTop();
  if (scroll >= 5) {
    sticky.addClass("sticky");
  } else {
    sticky.removeClass("sticky");
  }
});

jQuery(document).ready(function () {
  if (jQuery(window).width() > 1199) {
    jQuery("li.mega-menu ul.sub-menu").wrap(
      "<div class='hover_mega_menu'></div>"
    );
    jQuery("li.mega-menu2 ul.sub-menu").wrap(
      "<div class='hover_mega_menu'></div>"
    );
  }


  jQuery(document).ready(function () {
    jQuery("button.navbar-toggle").on("click", function () {
      jQuery("body").toggleClass("open-menu");
    });
  });
  
});

jQuery(window).scroll(function () {
  if (jQuery(".count-digit").hasClass("counter-loaded")) return;

  var offset = jQuery(".count-digit").offset().top - window.innerHeight;
  if (jQuery(window).scrollTop() > offset) {
    jQuery(".count-digit").addClass("counter-loaded");

    jQuery(".count-digit").each(function () {
      var $this = jQuery(this);
      var finalValue = parseFloat($this.text());

      jQuery({ Counter: 0 }).animate(
        { Counter: finalValue },
        {
          duration: 4000,
          easing: "swing",
          step: function (now) {
            if (finalValue % 1 === 0) {
              // Integer
              $this.text(Math.ceil(now));
            } else {
              // Decimal
              $this.text(now.toFixed(1));
            }
          }
        }
      );
    });
  }
});
