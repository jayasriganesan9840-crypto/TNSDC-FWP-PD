// Highlight active navbar link on scroll

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 100;

    if (scrollY >= sectionTop) {

      current = section.getAttribute("id");

    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {

      link.classList.add("active");

    }

  });

});

// Animate Skills Bars when in view

const skillFills = document.querySelectorAll(".fill");

const skillSection = document.querySelector("#skills");

window.addEventListener("scroll", () => {

  const sectionPos = skillSection.getBoundingClientRect().top;

  const screenPos = window.innerHeight / 1.3;

  if (sectionPos < screenPos) {

    skillFills.forEach(fill => {

      fill.style.width = fill.getAttribute("data-width");

    });

  }

});

// Contact form alert

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {

  e.preventDefault();

  alert("Thank you! Your details have been submitted.");

  form.reset();

});