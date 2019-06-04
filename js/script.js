$(document).ready(function() {
  /* getting SLIDES to work with id# using JQuery */
  $("#slides").superslides({
    animation: "fade",
    play: 4000,
    pagination: false
  });
  /* getting TYPED to work with class using vanillaJS */
  var typed = new Typed(".typed", {
    strings: ["Android/iOS Developer.", "Software Engineer.", "Web Developer."],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showCursor: false
  });
  /* getting OWL to work with class using JQuery */
  $(".owl-carousel").owlCarousel({
    loop: true,
    items: 4,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 3
      },
      938: {
        items: 4
      }
    }
  });
  /* PIECHART, skillsSection class position from the top and storing it in our variable using JQuery */
  let skillsTopOffset = $(".skillsSection").offset().top;
  /* Creating a window scroll event (when window is scrolled run this function) */
  $(window).scroll(function() {
    /* console.log(window.pageYOffset); */
    if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
      /* getting PieChart to work with class using JQuery */
      $(".chart").easyPieChart({
        //your options goes here
        easing: "easyInOut",
        barColor: "#fff",
        trackColor: false,
        scaleColor: false,
        lineWidth: 4,
        size: 152,
        onStep: function(from, to, percent) {
          $(this.el)
            .find(".percent")
            .text(Math.round(percent));
        }
      });
    }
  });
  /* FANCYBOX */
  $("[data-fancybox]").fancybox();

  /* ISOTPE target the items */
  $(".items").isotope({
    filter: "*",
    animationOptions: {
      duration: 1500,
      easing: "linear",
      queue: false
    }
  });
 /* ISOTPE filter the items */
  $('#filters a').click(function () {
    $('#filters .current').removeClass('current');
    $(this).addClass('current');

    let selector = $(this).attr('data-filter');
    $(".items").isotope({
      filter: selector,
      animationOptions: {
        duration: 1500,
        easing: "linear",
        queue: false
      }
    });
    /* dont go to any link */
    return false;
  })
  
});
