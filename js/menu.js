const menuOpen = document.querySelector('.menu-open');
const menuClose = document.querySelector('.menu-close');
let sideSection = document.querySelector('.sidesection'); // Use let to allow reassignment

// Function to refresh sideSection styles
const refreshSideSection = () => {
  sideSection.style.transition = 'none'; // Disable transition during refresh
  sideSection.style.transform = ''; // Reset transform
  sideSection.style.display = ''; // Reset display
  sideSection.offsetHeight; // Trigger reflow to apply changes immediately
  sideSection.style.transition = ''; // Re-enable transition after refresh
};

// Initial refresh
refreshSideSection();

// Event listener for menuOpen
menuOpen.addEventListener('click', () => {
  sideSection.style.transition = 'transform 0.5s ease-in';
  sideSection.style.transform = 'translateX(0)';
  sideSection.style.display = 'block';
});

// Event listener for menuClose
menuClose.addEventListener('click', () => {
  sideSection.style.transition = 'transform 0.5s ease-out';
  sideSection.style.transform = '';
  sideSection.style.display = 'none';
});

// Event listener for window resize
window.addEventListener('resize', () => {
  refreshSideSection(); // Refresh sideSection styles on window resize
});







