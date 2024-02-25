const searchIcon = document.getElementById('search-icon');
  const searchBar = document.querySelector('.search-bar');

  searchIcon.addEventListener('click', function() {
    searchBar.classList.toggle('active');
  });