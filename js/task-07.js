const inputEl = document.querySelector('#font-size-control');
const spanTextEl = document.querySelector('#text');

inputEl.addEventListener('input', onInput);
function onInput(event) {
    spanTextEl.style.fontSize =`${event.currentTarget.value}px`;
};