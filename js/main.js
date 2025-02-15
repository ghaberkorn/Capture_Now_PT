$(document).ready(function() {
  let currentIndex = 0;
  const testimonials = $(".testimonial-box");
  const totalTestimonials = testimonials.length;

  function showTestimonial(index) {
    testimonials.removeClass("active");
    testimonials.eq(index).addClass("active");
  }

  function nextTestimonial() {
    currentIndex = (currentIndex + 1) % totalTestimonials;
    showTestimonial(currentIndex);
  }

  function prevTestimonial() {
    currentIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials;
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
