// Ajuste final: el lazo ESPOCH solo aparece en Inicio y reacciona al scroll.
(function(){
  const applyRouteState = () => {
    const isHome = document.querySelector('#inicio')?.classList.contains('active-view');
    document.body.classList.toggle('home-route', !!isHome);
    if (isHome) {
      document.body.classList.remove('ribbon-compact');
      document.body.classList.add('ribbon-show');
      const ribbon = document.querySelector('.university-ribbon');
      if (ribbon) {
        ribbon.style.animation = 'none';
        void ribbon.offsetHeight;
        ribbon.style.animation = '';
      }
    } else {
      document.body.classList.remove('ribbon-show', 'ribbon-compact');
    }
  };

  let lastY = window.scrollY;
  window.addEventListener('scroll', () => {
    if (!document.body.classList.contains('home-route')) return;
    const y = window.scrollY;
    const goingDown = y > lastY;
    if (y < 35) {
      document.body.classList.remove('ribbon-compact');
      document.body.classList.add('ribbon-show');
    } else if (goingDown) {
      document.body.classList.add('ribbon-compact');
      document.body.classList.remove('ribbon-show');
    } else {
      document.body.classList.remove('ribbon-compact');
      document.body.classList.add('ribbon-show');
    }
    lastY = y;
  }, { passive: true });

  document.addEventListener('click', (event) => {
    if (event.target.closest('[data-route]')) {
      setTimeout(applyRouteState, 80);
    }
  });

  window.addEventListener('hashchange', () => setTimeout(applyRouteState, 80));
  window.addEventListener('load', applyRouteState);
  setTimeout(applyRouteState, 200);
})();
