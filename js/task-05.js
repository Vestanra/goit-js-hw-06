const inputEl = document.querySelector('#name-input');
const nameLabel = document.querySelector('#name-output');

inputEl.addEventListener('input', onInput);
function onInput(event) {
    nameLabel.textContent = event.currentTarget.value;   
};