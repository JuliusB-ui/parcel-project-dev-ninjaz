document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
  const closeMenuIcon = document.querySelector('.close-menu-icon');
  const navList = document.querySelector('.nav-list');
  const headerContent = document.querySelector('.header-content');
  const body = document.body;

  let isMenuOpen = false;

  function openMenu() {
    navList.classList.add('visible');
    mobileMenuIcon.style.display = 'none';
    closeMenuIcon.style.display = 'block';
    body.style.backgroundColor = 'var(--dark-green, #1e2827)';
    headerContent.style.backgroundColor = 'var(--dark-green, #1e2827)';
    navList.style.backgroundColor = 'var(--dark-green, #1e2827)';
    isMenuOpen = true;
  }

  function closeMenu() {
    navList.classList.remove('visible');
    closeMenuIcon.style.display = 'none';
    mobileMenuIcon.style.display = 'block';
    body.style.backgroundColor = '';
    headerContent.style.backgroundColor = '';
    navList.style.backgroundColor = '';
    isMenuOpen = false;
  }

  mobileMenuIcon.addEventListener('click', function () {
    !isMenuOpen ? openMenu() : closeMenu();
  });

  closeMenuIcon.addEventListener('click', closeMenu);

  window.addEventListener('resize', function () {
    const isTablet = window.innerWidth >= 768 && window.innerWidth <= 1280;
    const isLargeScreen = window.innerWidth > 1280;

    if (isTablet && isMenuOpen) {
      closeMenu();
    }

    mobileMenuIcon.style.display = isTablet || isLargeScreen ? 'none' : 'block';
  });
});
