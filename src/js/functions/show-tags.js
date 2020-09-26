(function(){
  const cards = document.querySelectorAll('.product-card');

  for (const card of cards) {
    let inStockElem = card.querySelector('.product-card__in-stock');
    if (card.classList.contains('in-stock')) {
      inStockElem.style.display = 'flex';
    }

    let tagElems = card.querySelectorAll('.product-card__tag');
    tagElems.forEach((el) => {
      if (el.innerText) {
        el.style.display = 'block';
      }
    });

    let oldPriceElem = card.querySelector('.product-card__price--old');
    if (oldPriceElem.innerText) {
      oldPriceElem.style.display = 'block';
      oldPriceElem.innerText += ' ₽';
    }

    let newPriceElem = card.querySelector('.product-card__price--new');
    newPriceElem.innerText += ' ₽';

    let cardDescription = card.querySelector('.card-description');
    let mechanismTitle = cardDescription.querySelector('dt.mechanism');
    let mechanismText = cardDescription.querySelectorAll('dd.mechanism span');
    let isMechanism = false;
    mechanismText.forEach((el) => {
      if (el.innerText) {
        mechanismTitle.style.display = 'block';
        el.classList.remove('empty');
        isMechanism = true;
      }
    });

    let proportionsTitle = cardDescription.querySelector('dt.proportions');
    let proportionsText = cardDescription.querySelectorAll('dd.proportions span');
    let isProportions = false;
    proportionsText.forEach((el) => {
      if (el.innerText) {
        proportionsTitle.style.display = 'block';
        el.classList.remove('empty');
        isProportions = true;
      }
    });

    let sleepingAreaTitle = cardDescription.querySelector('dt.sleeping-area');
    let sleepingAreaText = cardDescription.querySelectorAll('dd.sleeping-area span');
    let isSleepeingArea = false;
    sleepingAreaText.forEach((el) => {
      if (el.innerText) {
        sleepingAreaTitle.style.display = 'block';
        el.classList.remove('empty');
        isSleepeingArea = true;
      }
    });

    // Remove card description block if empty

    if (isMechanism == false && isProportions == false && isSleepeingArea == false) {
      cardDescription.style.display = 'none';
    }
  }
})();
