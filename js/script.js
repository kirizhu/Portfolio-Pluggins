/* loader fade out */
$(window).on("load", function() {
  $(".loader").fadeOut(600);
});

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
  $("#filters a").click(function() {
    $("#filters .current").removeClass("current");
    $(this).addClass("current");

    let selector = $(this).attr("data-filter");
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
  });

  /* Fixed navbar on scroll when navbar at top of window */
  const nav = $("#navigation");
  const navTop = nav.offset().top;

  $(window).on("scroll", stickyNavigation);

  function stickyNavigation() {
    let body = $("body");
    if ($(window).scrollTop() >= navTop) {
      body.css("padding-top", nav.outerHeight() + "px");
      body.addClass("fixedNav");
    } else {
      body.css("padding-top", 0);
      body.removeClass("fixedNav");
    }
  }

  /* Smooth scroll */
  $("#navigation li a").click(function(e) {
    e.preventDefault();
    let targetElement = $(this).attr("href");
    let targetPosition = $(targetElement).offset().top;
    $("html,body").animate({ scrollTop: targetPosition - 50 }, "slow");
  });
});
