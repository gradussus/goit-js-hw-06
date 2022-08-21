function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector("#boxes");
const input = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");

function createBoxes() {
  const moreBoxes = [];
  if (input.value <= 100) {
    for (let i = 0; i < input.value; i += 1) {
      const newBox = document.createElement("div");
      newBox.style.backgroundColor = getRandomHexColor();
      newBox.style.width = `${30 + i * 10}px`;
      newBox.style.height = `${30 + i * 10}px`;

      moreBoxes.push(newBox);

      boxes.append(...moreBoxes);
    }
  } else alert(`Ну куди ж ти? Не більше 100 квадратиків)`);
}
function destroyBoxes() {
  boxes.innerHTML = "";
  input.value = "";
}

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);
