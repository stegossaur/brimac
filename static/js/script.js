document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname;

  document.querySelectorAll('.menu-center a').forEach(link => {
    const linkHref = link.getAttribute('href');

    // Página inicial
    if (
      (linkHref === '/' && (currentPath === '/' || currentPath.endsWith('index.html'))) ||
      currentPath.endsWith(linkHref)
    ) {
      link.classList.add('active');
    }
  });
});
