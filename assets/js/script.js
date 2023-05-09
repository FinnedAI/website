function onVisible(element, callback) {
  new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.intersectionRatio > 0) {
        callback(element);
        observer.disconnect();
      }
    });
  }).observe(element);
}

(function() {
  'use strict';

  const navHeight = document.querySelector('#nav').offsetHeight;
  document.querySelector('.hero-header').style.height = `calc(100vh - ${navHeight}px)`;

  document.querySelectorAll('.swipe-in').forEach((el) => {
    onVisible(el, () => {
      // animate with animejs
      anime({
        targets: el,
        translateX: [100, 0],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1000,
        delay: (el, i) => {
          return i * 1000;
        }
      });
    });
  });
})();