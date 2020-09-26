(function(){
  const titles = document.querySelectorAll('.footer-middle__links-title');

  let screenWidth = document.documentElement.clientWidth;

  if (screenWidth >= 1280) {
    titles.forEach((el) => {
      el.classList.add('footer-middle__links-title--active');
      el.removeEventListener('click', function() {
        el.classList.toggle('footer-middle__links-title--active');
      });
    });
  } else {
    titles.forEach((el) => {
      el.classList.remove('footer-middle__links-title--active');
      el.addEventListener('click', function() {
        el.classList.toggle('footer-middle__links-title--active');
      });
    });
  }

  window.addEventListener('resize', function () {
    if (window.matchMedia('(min-width: 1280px)').matches) {
      titles.forEach((el) => {
        el.classList.add('footer-middle__links-title--active');
        el.removeEventListener('click', function() {
          el.classList.toggle('footer-middle__links-title--active');
        });
      });
    } else {
      titles.forEach((el) => {
        el.classList.remove('footer-middle__links-title--active');
        el.addEventListener('click', function() {
          el.classList.toggle('footer-middle__links-title--active');
        });
      });
    }
  });
})();
