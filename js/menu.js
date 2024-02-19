const menuOpen = document.querySelector('.menu-open');
const menuClose = document.querySelector('.menu-close');
const sideSection = document.querySelector('.sidesection');

sideSection.style.animation = 'slide-in 0.5s ease-in-out'; // Add animation to sidesection

menuOpen.addEventListener('click', () => {
  sideSection.style.transition = 'transform 0.5s ease-in';
  sideSection.style.transform = 'translateX(0)';
  sideSection.style.display = 'block'; // Display sidsection when menuOpen is clicked
});

menuClose.addEventListener('click', () => {
  sideSection.style.transition = 'transform 0.5s ease-out';
  sideSection.style.transform = 'translateX(0)';
  sideSection.style.display = 'none'; 
});









