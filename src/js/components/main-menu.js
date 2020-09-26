(function(){
  const menu = document.querySelector('.menu');
  const menuBtn = menu.querySelector('.menu__btn');
  const menuItems = menu.querySelectorAll('.menu__item');

  menu.classList.add('menu--closed');

  menuBtn.addEventListener('click', function () {
    closeAllSubmenu();
    menu.classList.toggle('menu--closed');
  });

  // Close all submenu except menuItems[index]
  const closeAllSubmenu = (index) => {
    for (let i = 0; i < menuItems.length; i++) {
      let submenu = menuItems[i].querySelector('.submenu');

      if (i != index) {
        menuItems[i].classList.add('menu__item--closed');

        if (submenu) {
          submenu.classList.add('submenu--closed');
        }
      }
    }
  };

  for (let i = 0; i < menuItems.length; i++) {
    let submenu = menuItems[i].querySelector('.submenu');

    if (submenu) {
      menuItems[i].addEventListener('click', function () {
        closeAllSubmenu(i);
        menuItems[i].classList.toggle('menu__item--closed');
        submenu.classList.toggle('submenu--closed');
      });
    } else {
      menuItems[i].addEventListener('click', function () {
        closeAllSubmenu();
      });
    }
  }

  let screenWidth = document.documentElement.clientWidth;
  const promoTitle = document.querySelector('.promo__title');

  if (screenWidth >= 1280) {
    menu.classList.remove('menu--closed');
    promoTitle.innerText = 'Лучшие предложения месяца';
  }

  window.addEventListener('resize', function () {
    if (window.matchMedia('(min-width: 1280px)').matches) {
      menu.classList.remove('menu--closed');
      promoTitle.innerText = 'Лучшие предложения месяца';
    } else {
      menu.classList.add('menu--closed');
    }
  });
})();

