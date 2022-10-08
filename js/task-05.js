const input = document.querySelector('#name-input');
const nameLabel = document.querySelector('#name-output');

input.addEventListener('input', onInputChange);

function onInputChange(event) {
    event.currentTarget.value === ''
        ? (nameLabel.textContent = 'Anonymous')
        : (nameLabel.textContent = event.currentTarget.value);
}
