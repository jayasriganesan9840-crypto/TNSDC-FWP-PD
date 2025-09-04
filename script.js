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

form.addEventListener("submit", function (e) {

  e.preventDefault();

  alert("Thank you! Your details have been submitted.");

  form.reset();

});

// ✅ Script to load Google Drive Profile Image

const DRIVE_INPUT = "19-54qR2kuO_OO25kejuN1L1B6QqF4A2Y";

const id = (String(DRIVE_INPUT).match(/[-\w]{25,}/) || [String(DRIVE_INPUT).trim()])[0];

const candidates = [

  `https://drive.google.com/uc?export=view&id=${id}`,

  `https://drive.google.com/uc?export=download&id=${id}`,

  `https://drive.usercontent.google.com/uc?id=${id}&export=download`,

  `https://drive.google.com/thumbnail?id=${id}&sz=w2000`

];

const img = document.getElementById("profilePic");

let i = 0;

function tryNext() {

  if (i >= candidates.length) {

    img.alt = "⚠️ Could not load image. Check Drive sharing settings.";

    return;

  }

  const url = candidates[i++];

  img.onerror = tryNext;

  img.src = url;

}

tryNext();