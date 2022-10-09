function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxes = document.getElementById('boxes');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
    let addSize = 0;
    amount = Number(input.value);
    const min = Number(input.min);
    const max = Number(input.max);

    if (amount <= max && amount >= min) {
        const boxArray = [];
        for (let i = 0; i < amount; i += 1) {
            const box = document.createElement('div');
            box.style.width = 30 + addSize + 'px';
            box.style.height = 30 + addSize + 'px';
            box.style.backgroundColor = getRandomHexColor();
            addSize += 10;
            boxArray.push(box);
        }
        boxes.append(...boxArray);
    } else {
        alert(`Value should be bigger then ${min} and less then ${max}`);
    }
}

function destroyBoxes(event) {
    boxes.innerHTML = '';
    input.value = '';
}
