const slider = document.querySelector('#font-size-control')
const text = document.querySelector('#text')

slider.addEventListener('input', changeFont);
// Задав початковий розмір шрифту, аби при першій зміні не було "стрибка"
text.style.fontSize = `58px`;

function changeFont (event) {
    text.style.fontSize = `${event.currentTarget.value}px`
}