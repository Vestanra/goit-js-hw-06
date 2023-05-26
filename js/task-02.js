const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('#ingredients')
const liElements = ingredients.map(element => {
  const liEl = document.createElement('li');
  liEl.textContent = element;
  liEl.classList.add('item');
  return liEl
});
ulEl.append(...liElements);
