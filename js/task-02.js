const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsArray = ingredients.map((ingr) => {
  const ingredient = document.createElement("li");
  ingredient.classList.add('item')
  ingredient.textContent = ingr;
  return ingredient
})

document.querySelector ("#ingredients").append (...ingredientsArray)