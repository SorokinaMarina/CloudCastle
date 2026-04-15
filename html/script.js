const MAX_ITEMS = 4;

const itemButtons = document.querySelectorAll('.button');
let currentItemsNumber = 0;

function onButtonClick(i) {
  return () => {
    if (itemButtons[i].classList.contains('button--active')) {
      itemButtons[i].classList.remove('button--active');
      currentItemsNumber = currentItemsNumber - 1;
      if (currentItemsNumber === MAX_ITEMS) {
        itemButtons.forEach(item => {
          if (!item.classList.contains('button--active')) {
            item.setAttribute('disabled', '');
          }
        })
      }
    } else {
      itemButtons.forEach(item => {
        if (item.classList.contains('button--active')) {
          item.classList.remove('button--active');
        }
      });
      itemButtons[i].classList.add('button--active');
      currentItemsNumber = currentItemsNumber + 1;
      if (currentItemsNumber < MAX_ITEMS) {
        itemButtons.forEach(item => {
          if (!item.classList.contains('button--active')) {
            item.removeAttribute('disabled');
          }
        })
      }
    }
  }
}

for (let i = 0; i < itemButtons.length; i++) {
  itemButtons[i].addEventListener('click', onButtonClick(i));
}