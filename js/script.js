document.addEventListener("DOMContentLoaded", function() {
  const toggleBtn = document.querySelector(".nav-toggle");
  const navMenu   = document.querySelector(".nav-menu");

  toggleBtn.addEventListener("click", function() {
    // Toggle the 'show' class on nav menu
    navMenu.classList.toggle("show");
    // Toggle the 'active' class on the button for the X icon
    toggleBtn.classList.toggle("active");
  });
});
