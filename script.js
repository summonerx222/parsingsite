const toggle = document.getElementById('themeToggle');
const body = document.body;

if (toggle) {
  toggle.addEventListener('click', () => {
    body.classList.toggle('warm-mode');
  });
}
