// script.js

const sections = document.querySelectorAll("section, .content");
const navLinks = document.querySelectorAll("nav ul li a");
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 10;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

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
