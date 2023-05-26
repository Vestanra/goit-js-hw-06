function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divBoxesEl = document.querySelector('#boxes');
const btnCreateEl = document.querySelector('button[data-create]');
const btnDestroyEl = document.querySelector('button[data-destroy]');
const inputNumberEl = document.querySelector('input');


let width = 20;
let height = 20;
let amount;

btnCreateEl.addEventListener('click', onBtnCreate);
btnDestroyEl.addEventListener('click', destroyBoxes);

function createBoxes() {
    const newBox = document.createElement('div');
    newBox.style.width = width + 'px';
    newBox.style.height = height + 'px';
    newBox.style.backgroundColor = getRandomHexColor();
    divBoxesEl.append(newBox);
 };

function onBtnCreate (amount) {
  amount = inputNumberEl.value;
  for (let i = 0; i < amount; i++) {
    width += 10;
    height += 10;
    createBoxes();
  }
};

function destroyBoxes(event) {
  divBoxesEl.innerHTML = '';
  inputNumberEl.value = '';
  width = 20;
  height = 20;
};