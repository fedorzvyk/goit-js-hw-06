function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector('button.change-color');
const span = document.querySelector('.color');

button.addEventListener('click', () => {
    document.body.style.backgroundColor = getRandomHexColor();
    span.innerText = getRandomHexColor();
});
