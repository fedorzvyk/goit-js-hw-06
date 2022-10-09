const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputCheck);

function onInputCheck(event) {
    if (event.currentTarget.value.length === 6) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    } else if (event.currentTarget.value.length === 0) {
        input.classList.remove('valid', 'invalid');
    } else input.classList.add('invalid');
}
