(function(){
  const items = document.querySelectorAll('.mobile-menu__item');
  const loadBtn = document.getElementById('loadmore');
  const VISIBLE_QUANTITY = 6;

  for (let i = VISIBLE_QUANTITY; i < items.length; i++) {
    items[i].style.display = 'none';
  }

  loadBtn.addEventListener('click', function () {
    items.forEach((item) => {
      item.style.display = 'block';
    });

    loadBtn.style.display = 'none';
  });
})();
