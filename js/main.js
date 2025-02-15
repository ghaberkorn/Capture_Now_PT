$(document).ready(function() {
  let currentIndex = 0;
  const testimonials = $(".testimonial-box");
  const totalTestimonials = testimonials.length;

  function showTestimonial(index) {
    testimonials.removeClass("active").hide(); // Hide all testimonials
    testimonials.eq(index).addClass("active").fadeIn(); // Show only the active one
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

  $(document).keydown(function(e) {
    if (e.key === "ArrowRight") {
      nextTestimonial();
    } else if (e.key === "ArrowLeft") {
      prevTestimonial();
    }
  });

  // Initialize first testimonial visibility
  testimonials.hide().eq(currentIndex).show();
});
