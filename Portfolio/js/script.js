$(document).ready(function() {
  /* getting slides to work with id# using JQuery */
  $("#slides").superslides({
    animation: "fade",
    play: 4000,
    pagination: false,
  });
  /* getting Typed to work with class using vanillaJS */
  var typed = new Typed(".typed", {
      strings:["Software Engineer.","Android/iOS Developer.","Web Developer."],
      typeSpeed:70,
      loop:true,
      startDelay:1000,
      showCursor:false
  });
});
