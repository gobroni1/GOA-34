const switch1 = document.getElementById('switch');
const body = document.body;


switch1.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});
