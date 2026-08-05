document.addEventListener("DOMContentLoaded", () => {
  const style = document.createElement("style");
  style.textContent = `
    .projecticon{
      transition: transform .25s ease;
    }
    .proj-card:hover .projecticon{
      transform: rotate(-15deg);
    }
  `;
  document.head.appendChild(style);

  /* ---------- Dark / Light theme toggle ---------- */
  const root = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");
  const THEME_KEY = "kaua-portfolio-theme";

  function applyTheme(theme) {
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }
  }

  const savedTheme = localStorage.getItem(THEME_KEY);
  if (savedTheme) {
    applyTheme(savedTheme);
  } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    applyTheme("dark");
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const isDark = root.getAttribute("data-theme") === "dark";
      const next = isDark ? "light" : "dark";
      applyTheme(next);
      localStorage.setItem(THEME_KEY, next);
    });
  }

  /* ---------- Project tag filter ---------- */
  const filterBar = document.getElementById("projFilter");
  const projGrid = document.getElementById("projGrid");
  const projEmpty = document.getElementById("projEmpty");

  if (filterBar && projGrid) {
    const cards = Array.from(projGrid.querySelectorAll(".proj-card"));

    filterBar.addEventListener("click", (e) => {
      const btn = e.target.closest("button[data-filter]");
      if (!btn) return;

      filterBar.querySelectorAll("button").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;
      let visibleCount = 0;

      cards.forEach((card) => {
        const tags = (card.dataset.tags || "").split(",").map((t) => t.trim());
        const matches = filter === "all" || tags.includes(filter);
        card.style.display = matches ? "" : "none";
        if (matches) visibleCount++;
      });

      if (projEmpty) {
        projEmpty.classList.toggle("show", visibleCount === 0);
      }
    });
  }
});