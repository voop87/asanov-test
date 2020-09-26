(function(){
  const cards = document.querySelectorAll('.product-card');
  const MAX_QUANTITY = 99;

  for (const card of cards) {
    const buttonsElem = card.querySelector('.product-card__buttons');
    const buyBtn = buttonsElem.querySelector('.product-card__btn-buy');
    const minusBtn = buttonsElem.querySelector('.product-card__btn-minus');
    const plusBtn = buttonsElem.querySelector('.product-card__btn-plus');
    let quantityElem = buttonsElem.querySelector('.product-card__quantity');

    buyBtn.addEventListener('click', function () {
      card.classList.toggle('addedToCart');
    });

    minusBtn.addEventListener('click', function () {
      quantityElem.value--;
      if (quantityElem.value < 0) {
        quantityElem.value = 0;
        card.classList.remove('addedToCart');
      }
    });

    plusBtn.addEventListener('click', function () {
      quantityElem.value++;
      if (quantityElem.value > MAX_QUANTITY) {
        quantityElem.value = MAX_QUANTITY;
      }
    });
  }
})();
