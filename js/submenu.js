document.addEventListener('DOMContentLoaded', function() {
  const chevronIcons = document.querySelectorAll('#chevron-right');

  // Initially hide all submenus
  const submenus = document.querySelectorAll('.submenu');
  submenus.forEach(submenu => {
    submenu.style.display = 'none';
  });

  chevronIcons.forEach(icon => {
    icon.addEventListener('click', function() {
      const submenu = this.parentElement.nextElementSibling;
      if (submenu.style.display === 'block') {
        submenu.style.display = 'none';
        this.style.transform = 'rotate(0deg)';
      } else {
        submenu.style.display = 'block';
        this.style.transform = 'rotate(90deg)';
      }
    });
  });
});


