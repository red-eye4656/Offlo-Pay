document.addEventListener("DOMContentLoaded", () => {

  const navbar = document.querySelector(".navbar");

  const updateNavbar = () => {
    if (window.scrollY > 30) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", updateNavbar);
  updateNavbar();

  

  const revealElements = document.querySelectorAll(
    ".section, .feature-card, .difference-box, .experience-card, .team-card, .coming-box"
  );

  revealElements.forEach((element) => {
    element.classList.add("reveal");
  });

  const observer = new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }

      });

    },
    {
      threshold: 0.12
    }
  );

  revealElements.forEach((element) => {
    observer.observe(element);
  });

  

  const heroContent = document.querySelector(".hero-content");
  const heroVisual = document.querySelector(".hero-visual");

  setTimeout(() => {
    heroContent?.classList.add("hero-visible");
    heroVisual?.classList.add("hero-visible");
  }, 150);

  

  const glow = document.createElement("div");

  glow.className = "mouse-glow";

  document.body.appendChild(glow);

  let mouseX = 0;
  let mouseY = 0;

  let glowX = 0;
  let glowY = 0;

  document.addEventListener("mousemove", (event) => {

    mouseX = event.clientX;
    mouseY = event.clientY;

  });

  const animateGlow = () => {

    glowX += (mouseX - glowX) * 0.08;
    glowY += (mouseY - glowY) * 0.08;

    glow.style.transform =
      `translate3d(${glowX}px, ${glowY}px, 0)`;

    requestAnimationFrame(animateGlow);

  };

  animateGlow();

  

  const cards = document.querySelectorAll(".feature-card");

  cards.forEach((card) => {

    card.addEventListener("mousemove", (event) => {

      const rect = card.getBoundingClientRect();

      const x =
        event.clientX - rect.left;

      const y =
        event.clientY - rect.top;

      const rotateX =
        ((y / rect.height) - 0.5) * -5;

      const rotateY =
        ((x / rect.width) - 0.5) * 5;

      card.style.transform =
        `perspective(900px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)
         translateY(-6px)`;

    });

    card.addEventListener("mouseleave", () => {

      card.style.transform =
        "";

    });

  });

  

  document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", (event) => {

      const targetId =
        link.getAttribute("href");

      const target =
        document.querySelector(targetId);

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    });

  });

});

const menuToggle =
  document.querySelector(".menu-toggle");

const mobileMenu =
  document.querySelector(".mobile-menu");

const mobileLinks =
  document.querySelectorAll(".mobile-menu a");

const closeMobileMenu = () => {

  menuToggle?.classList.remove("active");

  mobileMenu?.classList.remove("open");

  document.body.classList.remove("menu-open");

  menuToggle?.setAttribute(
    "aria-expanded",
    "false"
  );

};

menuToggle?.addEventListener("click", () => {

  const isOpen =
    mobileMenu.classList.toggle("open");

  menuToggle.classList.toggle(
    "active",
    isOpen
  );

  document.body.classList.toggle(
    "menu-open",
    isOpen
  );

  menuToggle.setAttribute(
    "aria-expanded",
    String(isOpen)
  );

});

mobileLinks.forEach((link) => {

  link.addEventListener(
    "click",
    closeMobileMenu
  );

});

window.addEventListener("resize", () => {

  if (window.innerWidth > 1050) {
    closeMobileMenu();
  }

});


/* =========================================================
   OFFLO-PAY — PAYMENT UI DEMO INTERACTION
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  const actions = document.querySelectorAll(".payment-ui .pay-action");

  if (!actions.length) return;

  actions.forEach((action) => {

    action.addEventListener("click", () => {

      actions.forEach((item) => {
        item.classList.remove("demo-active");
      });

      action.classList.add("demo-active");

      window.setTimeout(() => {
        action.classList.remove("demo-active");
      }, 650);

    });

  });

});


