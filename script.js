document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll(".quote-slide");
  let currentSlide = 0;

  function showSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }

  showSlide();

  setInterval(showSlide, 5000);
});




