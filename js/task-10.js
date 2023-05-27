function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divBoxesEl = document.querySelector('#boxes');
const btnCreateEl = document.querySelector('button[data-create]');
const btnDestroyEl = document.querySelector('button[data-destroy]');
const inputNumberEl = document.querySelector('input');

let boxSize = 20;
let amount;

btnCreateEl.addEventListener('click', onBtnCreate);
btnDestroyEl.addEventListener('click', destroyBoxes);

function createBoxes() {
    const newBox = document.createElement('div');
    newBox.style.width = boxSize + 'px';
    newBox.style.height = boxSize + 'px';
    newBox.style.backgroundColor = getRandomHexColor();
    divBoxesEl.append(newBox);
 };

function onBtnCreate(amount) {
  amount = inputNumberEl.value;
  for (let i = 0; i < amount; i++) {
    boxSize += 10;
    createBoxes();
  }
};

function destroyBoxes(event) {
  divBoxesEl.innerHTML = '';
  inputNumberEl.value = '';
  boxSize = 20;
};












// const divBoxesArray = [];
// function btnCreate(amount) {
//   amount = inputNumberEl.value;
//   for (let i = 0; i < amount; i++) {
//       width += 10;
//       height += 10;
//       divBoxesArray.push(`<div style="width: ${width}px; height: ${height}px; background-color: ${getRandomHexColor()};"></div>`);
//   };
//    return divBoxesEl.insertAdjacentHTML('afterbegin', divBoxesArray.join(''));
// }


