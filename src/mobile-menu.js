document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
  const closeMenuIcon = document.querySelector('.close-menu-icon');
  const navList = document.querySelector('.nav-list');
  const headerContent = document.querySelector('.main-header');
  const navLinks = document.querySelectorAll('.nav-link');
  const body = document.body;

  let isMenuOpen = false;

  // Changes visibility of the mobile icon based on screen size and menu status.
  function updateMobileIconVisibility() {
    mobileMenuIcon.style.display =
      window.innerWidth <= 767 && !isMenuOpen ? 'block' : 'none';
  }

  // Opens the menu and hides the mobile menu icon.
  function openMenu() {
    navList.classList.add('visible');
    mobileMenuIcon.style.display = 'none';
    closeMenuIcon.style.display = 'block';
    body.style.overflow = 'hidden';
    headerContent.style.position = 'fixed';
    isMenuOpen = true;
  }

  // Closes the menu and decides if the mobile menu icon should show.
  function closeMenu() {
    navList.classList.remove('visible');
    closeMenuIcon.style.display = 'none';
    body.style.overflow = '';
    headerContent.style.position = '';
    isMenuOpen = false;
    updateMobileIconVisibility();
  }

  mobileMenuIcon.addEventListener('click', openMenu);
  closeMenuIcon.addEventListener('click', closeMenu);

  // Makes sure the menu closes and updates icon visibility when a link is clicked.
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Checks to adjust the mobile icon's visibility when the window size changes.
  window.addEventListener('resize', function () {
    updateMobileIconVisibility();
    if (window.innerWidth > 767 && isMenuOpen) {
      closeMenu();
    }
  });

  // Checks the initial visibility of the mobile menu icon when the page loads.
  updateMobileIconVisibility();
});
