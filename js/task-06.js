const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlur);
const inputLength = Number(inputEl.dataset.length);

function onInputBlur(event) {
    if (event.currentTarget.value.length !== inputLength) {
        inputEl.classList.add('invalid');
    } else {
        inputEl.classList.replace('invalid', 'valid');
    };
};