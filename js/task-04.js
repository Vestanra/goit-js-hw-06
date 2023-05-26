const valueEl = document.querySelector('#value');
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');

btnDecrement.addEventListener('click', onButDecrementClick);
btnIncrement.addEventListener('click', onButIncremenClick);

let spanValue = 0;

function onButDecrementClick() {
    spanValue -= 1;
    valueEl.textContent = spanValue;
};
function onButIncremenClick() {
    spanValue += 1;
    valueEl.textContent = spanValue;
};

