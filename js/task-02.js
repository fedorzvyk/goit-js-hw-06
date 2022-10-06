const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

const list = document.querySelector('#ingredients');
const arrayList = [];

ingredients.forEach(elem => {
    const li = document.createElement('li');
    li.classList.add('item');
    li.textContent = elem;
    arrayList.push(li);
});

list.append(...arrayList);
