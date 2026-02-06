// Hamburger menu functionality
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu-overlay');
const closeMenu = document.querySelector('.close-menu');

hamburger && hamburger.addEventListener('click', () => {
  mobileMenu.classList.add('active');
});
closeMenu && closeMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
});

// Optional: close menu when clicking outside menu links
mobileMenu && mobileMenu.addEventListener('click', (e) => {
  if (e.target === mobileMenu) {
    mobileMenu.classList.remove('active');
  }
});

// Close mobile menu when any link inside it is clicked
if (mobileMenu) {
  const menuLinks = mobileMenu.querySelectorAll('a');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
    });
  });
}
