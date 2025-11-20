document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("dark_mode");
  const html = document.documentElement;

  // Hent gemt tema
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    html.classList.add("dark");
  }

  btn.addEventListener("click", () => {
    html.classList.toggle("dark");

    // Gem brugerens valg
    const isDark = html.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
});
