const randomColor = document.querySelector('.widget');
const span = document.querySelector('.color');
randomColor.addEventListener('click', onButtonClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onButtonClick(evt) {
  span.textContent = getRandomHexColor();
  if (!evt.target.classList.contains('change-color')) {
    return;
  }
  return (document.body.style.background = getRandomHexColor());
}