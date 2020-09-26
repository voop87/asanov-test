/*
          CUSTOM SELECT
  HTML
  <div class="select">
    <div class=select__header">
      <span class="select__current"></span>
    </div>
    <ul class="select__body">
      <li class="select__item"></li>
      <li class="select__item"></li>
      <li class="select__item"></li>
    </ul>
  </div>
----------------------------------------
  CSS
  .select {
    position: relative;
  }
  .select__header {
    display: flex;
  }
  .select__current {
    position: relative;
  }
  .select--active .select__body {
    display: block;
  }
  .select__body {
    position: absolute;
    top: 98%;
    left: 0;
    right: 0;
    display: none;
    overflow: hidden;
  }
*/

(function (){
  let selectHeader = document.querySelectorAll('.select__header');
  let selectItem = document.querySelectorAll('.select__item');

  selectHeader.forEach((item) => {
    item.addEventListener('click', showSelect);
  });

  selectItem.forEach((item) => {
    item.addEventListener('click', chooseOption);
  });

  function showSelect () {
    this.parentElement.classList.toggle('select--active');
  };

  function chooseOption () {
    let text = this.innerText;
    let select = this.closest('.select');
    let currentText = select.querySelector('.select__current');

    currentText.innerText = text;
    select.classList.remove('select--active');
  };
})();
