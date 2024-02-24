document.addEventListener('DOMContentLoaded', function() {
    const searchBar = document.querySelector('.search-bar');
    const input = searchBar.querySelector('input');
  
    // Function to toggle active class
    const toggleSearchBar = () => {
      searchBar.classList.toggle('active');
      if (searchBar.classList.contains('active')) {
        input.focus(); // Focus on input when active
      }
    };
  
    // Event listeners for toggling the search bar
    searchBar.addEventListener('click', toggleSearchBar);
    input.addEventListener('blur', toggleSearchBar);
  });
  