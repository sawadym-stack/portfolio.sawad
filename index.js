// Animate skill bars on scroll
const skills = document.querySelectorAll(".skill");

function fillSkillBar(bar, percentEl) {
  const target = parseInt(bar.getAttribute("data-width"));
  bar.style.width = target + "%";

  // Animate counter
  let count = 0;
  const step = Math.ceil(target / 50);
  const interval = setInterval(() => {
    count += step;
    if (count >= target) {
      count = target;
      clearInterval(interval);
    }
    percentEl.textContent = count + "%";
  }, 20);
}

// Intersection Observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const bar = entry.target.querySelector(".progress-bar");
      const percentEl = entry.target.querySelector(".percent");

      if (entry.isIntersecting) {
        fillSkillBar(bar, percentEl);
        entry.target.classList.add("visible");
      } else {
        // Reset for repeat animation
        bar.style.width = "0";
        percentEl.textContent = "0%";
        entry.target.classList.remove("visible");
      }
    });
  },
  { threshold: 0.3 }
);

skills.forEach((skill) => observer.observe(skill));

// Hover effect → replay bar & number
skills.forEach((skill) => {
  const bar = skill.querySelector(".progress-bar");
  const percentEl = skill.querySelector(".percent");
  const originalPercent = parseInt(bar.getAttribute("data-width"));

  skill.addEventListener("mouseenter", () => {
    bar.style.width = "0";
    percentEl.textContent = "0%";
    setTimeout(() => {
      fillSkillBar(bar, percentEl);
    }, 100);
  });

  skill.addEventListener("mouseleave", () => {
    bar.style.width = originalPercent + "%";
    percentEl.textContent = originalPercent + "%";
  });
});

const projectCards = document.querySelectorAll(".project-card");

const projectObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible");
    }
  });
}, { threshold: 0.3 });

projectCards.forEach(card => projectObserver.observe(card));

// Contact form reveal
const contactForm = document.querySelector(".contact-form");

const contactObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      contactForm.classList.add("visible");
    } else {
      contactForm.classList.remove("visible");
    }
  });
}, { threshold: 0.3 });

if (contactForm) {
  contactObserver.observe(contactForm);
}


