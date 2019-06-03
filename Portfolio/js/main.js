import { CountUp } from "./countUp.js";
$(document).ready(function() {
  let statsTopOffset = $(".statsSection").offset().top;
  let finished = false;
  $(window).scroll(function() {
    if (!finished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
      let elements = { counter1: 3, counter2: 4, counter3: 5, counter4: 4 };
      Object.keys(elements).map((key, index) => {
        const countUp = new CountUp(key, elements[key]);
        countUp.start();
      });
      finished=true;
    }
  });
});
