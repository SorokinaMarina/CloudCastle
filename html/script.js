const MAX_ITEMS = 4;

const itemButtons = document.querySelectorAll('.button');

function updateState () {
  const activeButton = document.querySelectorAll('.button--active').length;

  itemButtons.forEach(button => {
    if (!button.classList.contains('button--active')) {
      button.disabled = activeButton >= MAX_ITEMS
    }
  })
}

itemButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('button--active');
    updateState()
  })
})