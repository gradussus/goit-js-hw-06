function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeColorBtn = document.querySelector('.change-color');
const color = document.querySelector('.color')
const body = document.querySelector('body')

changeColorBtn.addEventListener('click', changeColor => {
  color.textContent = body.style.backgroundColor = getRandomHexColor()
  // Чи є такий варіант прийнятним? Можна було у дві дії записати, але мені здається що так краще
  
  // Варіант2
  // color.textContent = getRandomHexColor()
  // body.style.backgroundColor = color.textContent
})