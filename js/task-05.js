const inputEl = document.querySelector('#name-input');
const nameLabel = document.querySelector('#name-output');

inputEl.addEventListener('input', onInput);
function onInput(event) {
    if (event.currentTarget.value === '') {
        nameLabel.textContent = 'Anonymous'; 
    } else {
        nameLabel.textContent = event.currentTarget.value; 
    };  
};