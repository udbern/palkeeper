const menuOpen = document.getElementById('menu-open');
const sidebar = document.querySelector('.sidebar');

menuOpen.addEventListener('click', () => {
  sidebar.style.left = '0';
  sidebar.style.transition = 'left 0.5s ease-in-out';
});

const menuClose = document.querySelector('.menu-close');

menuClose.addEventListener('click', () => {
  sidebar.style.left = '-100%';
  sidebar.style.transition = 'left 0.5s ease-in-out';
});



