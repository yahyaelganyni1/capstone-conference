window.onload = () => {
  const dropDown = document.querySelector('.dropdown-menu');
  const nav = document.querySelector('.disktop-nav');
  const closeBtn = document.querySelector('.close-btn');

  dropDown.addEventListener('click', () => {
    nav.style.display = 'unset';
  });

  closeBtn.addEventListener('click', () => {
    nav.style.display = 'none';
  });
};
