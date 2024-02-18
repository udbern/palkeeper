const tabs = document.querySelectorAll('.tab');
const allContents = document.querySelectorAll('.content-section');

tabs.forEach(tab => {
  tab.addEventListener('click', function() {
    const targetContent = document.querySelector(`#${this.dataset.content}`);
    
    // Remove active class from all tabs
    tabs.forEach(t => {
      t.classList.remove('active');
    });
    // Add active class to clicked tab
    this.classList.add('active');
    
    // Hide all content sections
    allContents.forEach(content => {
      content.style.display = 'none';
    });
    // Show the content section that matches the clicked tab
    targetContent.style.display = 'block';
  });
});
