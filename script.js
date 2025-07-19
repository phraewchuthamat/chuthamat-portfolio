// script.js
// Function to update the active class in the navbar based on scroll position
function updateNavbarActiveLink() {
  const sections = document.querySelectorAll("section[id], .content[id]"); // Select all sections with an ID and the 'content' div
  const navLinks = document.querySelectorAll(".navbar__link"); // Select all navbar links

  let currentActive = "home";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (
      window.scrollY >= sectionTop - 100 &&
      window.scrollY < sectionTop + sectionHeight - 100
    ) {
      currentActive = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").substring(1) === currentActive) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", updateNavbarActiveLink);
window.addEventListener("load", updateNavbarActiveLink);

window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight * 0.6 && top > 0) {
      section.classList.add("active-section");
    } else {
      section.classList.remove("active-section");
    }
  });
});
