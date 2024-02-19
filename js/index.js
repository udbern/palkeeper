const tabs = document.querySelectorAll('.tab');
const mainContent = document.querySelector('.main-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const content = tab.dataset.content;
    mainContent.textContent = `Content for ${content}`;
    
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});