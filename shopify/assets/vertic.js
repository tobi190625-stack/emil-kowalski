// Vertic motion. Progressive enhancement only: every sign is a real <a href>,
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

  // Once the signs have been hung, switch plates to snappy press-only transitions.
  setTimeout(function () {
    root.classList.add('vx-settled');
  }, reduce ? 0 : 1200);

  var tiles = document.querySelectorAll('.vx-tile');
  function show(tile) {
    tile.setAttribute('data-in', '');
    setTimeout(function () {
      tile.setAttribute('data-settled', '');
    }, 950);
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
    { rootMargin: '0px 0px -12% 0px' }
  );
  tiles.forEach(function (tile) {
    io.observe(tile);
  });
})();
