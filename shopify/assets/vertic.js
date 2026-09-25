// Vertic motion. Progressive enhancement only: every tile and button is a real <a href>,
// so taps navigate even if this never runs. No click handlers, no preventDefault.
(function () {
  var root = document.documentElement;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // `vx-motion` is set by an inline script in <head> (before first paint), and never
  // in the theme editor, so editing never fights the entrance.
  if (!root.classList.contains('vx-motion')) return;

  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      root.classList.add('vx-ready');
    });
  });

  setTimeout(function () {
    root.classList.add('vx-settled');
  }, reduce ? 0 : 1100);

  var tiles = document.querySelectorAll('.vx-tile');
  function show(tile) {
    tile.setAttribute('data-in', '');
  }

  if (!('IntersectionObserver' in window) || reduce) {
    tiles.forEach(show);
    return;
  }

  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        show(entry.target);
        io.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -8% 0px' }
  );
  tiles.forEach(function (tile) {
    io.observe(tile);
  });
})();
