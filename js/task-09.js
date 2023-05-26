function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const colorNameEl = document.querySelector('.color');
const colorBtnEl = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');

colorBtnEl.addEventListener('click', onBtnClick);
function onBtnClick(event) {
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorNameEl.textContent = bodyEl.style.backgroundColor;
};
