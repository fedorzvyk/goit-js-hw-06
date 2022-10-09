const inputRange = document.querySelector('#font-size-control');
const text = document.getElementById('text');

inputRange.addEventListener('input', onInputRangeTextTransform);

text.style.fontSize = inputRange.value + 'px';
function onInputRangeTextTransform(event) {
    text.style.fontSize = `${event.currentTarget.value}px`;
}
