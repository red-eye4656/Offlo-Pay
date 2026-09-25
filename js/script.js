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






document.addEventListener("DOMContentLoaded", () => {

  const interactiveElements = document.querySelectorAll(
    "a, button, .pay-action"
  );

  interactiveElements.forEach((element) => {

    element.addEventListener(
      "touchstart",
      () => {
        element.classList.add("touching");
      },
      { passive: true }
    );

    element.addEventListener(
      "touchend",
      () => {
        element.classList.remove("touching");
      },
      { passive: true }
    );

    element.addEventListener(
      "touchcancel",
      () => {
        element.classList.remove("touching");
      },
      { passive: true }
    );

  });

});






document.addEventListener("DOMContentLoaded", () => {

  const toggle =
    document.querySelector(".mobile-menu-toggle");

  const panel =
    document.querySelector(".mobile-menu-panel");

  if (!toggle || !panel) return;


  const closeMenu = () => {

    toggle.classList.remove("is-open");

    toggle.setAttribute(
      "aria-expanded",
      "false"
    );

  };


  toggle.addEventListener("click", () => {

    const isOpen =
      toggle.classList.toggle("is-open");

    toggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

  });


  panel.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", () => {

      closeMenu();

    });

  });


  document.addEventListener("click", (event) => {

    if (
      !toggle.contains(event.target) &&
      !panel.contains(event.target)
    ) {
      closeMenu();
    }

  });

});





document.addEventListener("DOMContentLoaded", () => {

  const root = document.querySelector("#spending-insights");

  if (!root) return;

  const transactions = [
    { name: "Swiggy", category: "Food", amount: 620, day: 1 },
    { name: "Amazon", category: "Shopping", amount: 1450, day: 2 },
    { name: "Electricity Bill", category: "Bills", amount: 1850, day: 4 },
    { name: "Uber", category: "Travel", amount: 540, day: 6 },
    { name: "Jio Recharge", category: "Recharge", amount: 399, day: 8 },
    { name: "Anshik", category: "Money Transfer", amount: 850, day: 10 },
    { name: "Zomato", category: "Food", amount: 780, day: 12 },
    { name: "Myntra", category: "Shopping", amount: 2200, day: 14 },
    { name: "Netflix", category: "Bills", amount: 649, day: 17 },
    { name: "IRCTC", category: "Travel", amount: 1250, day: 19 },
    { name: "Airtel", category: "Recharge", amount: 599, day: 21 },
    { name: "Swiggy", category: "Food", amount: 920, day: 22 }
  ];

  const previousMonth = {
    Food: 1850,
    Shopping: 2600,
    Bills: 2400,
    Travel: 1900,
    Recharge: 1100,
    "Money Transfer": 900
  };

  const categories = [
    "Food",
    "Shopping",
    "Bills",
    "Travel",
    "Recharge",
    "Money Transfer"
  ];

  const money = value =>
    `₹${Math.round(value).toLocaleString("en-IN")}`;

  const total = transactions.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  const today = transactions
    .filter(item => item.day >= 21)
    .reduce((sum, item) => sum + item.amount, 0);

  const week = transactions
    .filter(item => item.day >= 15)
    .reduce((sum, item) => sum + item.amount, 0);

  let budget = Number(
    localStorage.getItem("offloMonthlyBudget") || 20000
  );

  const categoryTotals = {};

  categories.forEach(category => {
    categoryTotals[category] = transactions
      .filter(item => item.category === category)
      .reduce((sum, item) => sum + item.amount, 0);
  });

  function renderSummary() {

    document.querySelector("#spend-today").textContent =
      money(today);

    document.querySelector("#spend-week").textContent =
      money(week);

    document.querySelector("#spend-month").textContent =
      money(total);

    document.querySelector("#spend-budget").textContent =
      money(budget);

    const remaining = budget - total;

    document.querySelector("#budget-left").textContent =
      remaining >= 0
        ? `${money(remaining)} remaining`
        : `${money(Math.abs(remaining))} over budget`;
  }

  function renderCategories() {

    const container =
      document.querySelector("#category-breakdown");

    const max =
      Math.max(...Object.values(categoryTotals), 1);

    container.innerHTML = categories.map(category => {

      const amount = categoryTotals[category] || 0;

      const percentage =
        (amount / max) * 100;

      return `
        <div class="category-row">

          <span class="category-name">
            ${category}
          </span>

          <div class="category-bar">
            <span style="width:${percentage}%"></span>
          </div>

          <span class="category-amount">
            ${money(amount)}
          </span>

        </div>
      `;

    }).join("");
  }

  function renderBudget() {

    const percent = Math.min(
      Math.round((total / budget) * 100),
      100
    );

    document.querySelector("#budget-percent")
      .textContent = `${percent}%`;

    const degrees = percent * 3.6;

    document.querySelector(".budget-ring")
      .style.background = `
        radial-gradient(
          circle at center,
          #0B1418 58%,
          transparent 59%
        ),
        conic-gradient(
          #19E6C1 0deg,
          #19E6C1 ${degrees}deg,
          rgba(255,255,255,.07) ${degrees}deg
        )
      `;
  }

  function renderTrend() {

    const previousTotal =
      Object.values(previousMonth)
        .reduce((sum, value) => sum + value, 0);

    const change =
      ((total - previousTotal) / previousTotal) * 100;

    document.querySelector("#trend-value")
      .textContent =
      `${change >= 0 ? "+" : ""}${Math.round(change)}%`;

    document.querySelector("#trend-label")
      .textContent =
      change > 0
        ? "Spending is higher than last month"
        : "Spending is lower than last month";

    const max =
      Math.max(previousTotal, total);

    document.querySelector("#last-month-bar")
      .style.height =
      `${Math.max((previousTotal / max) * 100, 8)}%`;

    document.querySelector("#this-month-bar")
      .style.height =
      `${Math.max((total / max) * 100, 8)}%`;
  }

  function renderSuggestions() {

    const container =
      document.querySelector("#smart-suggestions");

    const suggestions = [];

    categories.forEach(category => {

      const current =
        categoryTotals[category] || 0;

      const previous =
        previousMonth[category] || 0;

      if (previous > 0 && current > previous * 1.15) {

        suggestions.push({
          title: "Overspending alert",
          text:
            `${category} spending is higher this month.`
        });

      }

    });

    const topCategory =
      categories.reduce(
        (best, category) =>
          categoryTotals[category] >
          categoryTotals[best]
            ? category
            : best,
        categories[0]
      );

    suggestions.push({
      title: "Smart suggestion",
      text:
        `${topCategory} is your highest spending category this month.`
    });

    suggestions.push({
      title: "Budget status",
      text:
        total > budget
          ? "You have crossed your monthly budget."
          : `${money(budget - total)} is still available this month.`
    });

    container.innerHTML =
      suggestions.slice(0, 3).map(item => `
        <div class="smart-suggestion">

          <strong>${item.title}</strong>

          <span>${item.text}</span>

        </div>
      `).join("");
  }

  function renderTransactions(filter = "all") {

    const container =
      document.querySelector("#insight-transactions");

    const filtered =
      filter === "all"
        ? transactions
        : transactions.filter(
            item => item.category === filter
          );

    container.innerHTML =
      filtered.slice().reverse().map(item => `
        <div class="insight-transaction">

          <div class="transaction-category-icon">
            ${item.category.charAt(0)}
          </div>

          <div>
            <strong>${item.name}</strong>
            <small>
              ${item.category} · This month
            </small>
          </div>

          <div class="insight-transaction-amount">
            − ${money(item.amount)}
          </div>

        </div>
      `).join("");
  }

  const budgetInput =
    document.querySelector("#budget-input");

  const budgetSave =
    document.querySelector("#budget-save");

  budgetInput.value = budget;

  budgetSave.addEventListener("click", () => {

    const value = Number(budgetInput.value);

    if (!value || value < 1000) return;

    budget = value;

    localStorage.setItem(
      "offloMonthlyBudget",
      String(budget)
    );

    renderSummary();
    renderBudget();
    renderSuggestions();

  });

  document
    .querySelector("#transaction-filter")
    .addEventListener("change", event => {

      renderTransactions(
        event.target.value
      );

    });

  renderSummary();
  renderCategories();
  renderBudget();
  renderTrend();
  renderSuggestions();
  renderTransactions();

});

