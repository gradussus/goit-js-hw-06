const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const actualCounter = document.querySelector("#value");

let valueCounter = 0;

const decrement = () => {
  valueCounter -= 1;
  actualCounter.textContent = valueCounter;
};
const increment = () => {
  valueCounter += 1;
  actualCounter.textContent = valueCounter;
};

decrementBtn.addEventListener("click", decrement);
incrementBtn.addEventListener("click", increment);
