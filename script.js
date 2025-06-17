// Maina starp gaišo un tumšo režīmu
function toggleTheme() {
  document.body.classList.toggle("dark-mode");

  // Ja vēlies, saglabā izvēli lokāli
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

// Pārbauda saglabāto režīmu un piemēro to ielādējot lapu
window.onload = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }

  // Iestata gadu kājenē
  const year = new Date().getFullYear();
  document.getElementById("year").textContent = year;
};
