// Keep preview visits out of the production Analytics property.
(() => {
  if (window.location.hostname !== 'altintas-d.github.io' || !window.location.pathname.startsWith('/altintas-dm/')) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', 'G-LX1J7229CT');
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-LX1J7229CT';
  document.head.appendChild(script);
})();
