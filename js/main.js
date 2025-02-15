$(document).ready(function() {
  let currentIndex = 0;
  const testimonials = $(".testimonial-box");
  const totalTestimonials = testimonials.length;

  function showTestimonial(index) {
    testimonials.removeClass("active");
    testimonials.eq(index).addClass("active");
  }

  function nextTestimonial() {
    if (currentIndex < totalTestimonials - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    showTestimonial(currentIndex);
  }

  function prevTestimonial() {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = totalTestimonials - 1;
    }
    showTestimonial(currentIndex);
  }

  $(".next-arrow").click(nextTestimonial);
  $(".prev-arrow").click(prevTestimonial);

  // Add event listeners for arrow keys
  $(document).keydown(function(e) {
    if (e.key === "ArrowRight") {
      nextTestimonial();
    } else if (e.key === "ArrowLeft") {
      prevTestimonial();
    }
  });

  // Initialize the first testimonial
  showTestimonial(currentIndex);
});
