$(document).ready(function() {
  let currentIndex = 0;
  const testimonials = $(".testimonial-box");
  const totalTestimonials = testimonials.length;

  function showTestimonial(index) {
    testimonials.removeClass("active");
    testimonials.eq(index).addClass("active");
    updateArrowsVisibility(index);
  }

  function updateArrowsVisibility(index) {
    $(".prev-arrow").toggle(index > 0);
    $(".next-arrow").toggle(index < totalTestimonials - 1);
  }

  $(".next-arrow").click(function() {
    if (currentIndex < totalTestimonials - 1) {
      currentIndex++;
      showTestimonial(currentIndex);
    }
  });

  $(".prev-arrow").click(function() {
    if (currentIndex > 0) {
      currentIndex--;
      showTestimonial(currentIndex);
    }
  });

  // Add event listeners for arrow keys
  $(document).keydown(function(e) {
    if (e.key === "ArrowRight" && currentIndex < totalTestimonials - 1) {
      currentIndex++;
      showTestimonial(currentIndex);
    } else if (e.key === "ArrowLeft" && currentIndex > 0) {
      currentIndex--;
      showTestimonial(currentIndex);
    }
  });

  // Initialize the first testimonial
  showTestimonial(currentIndex);
});
