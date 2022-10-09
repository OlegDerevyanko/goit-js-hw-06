
"use strict";

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsEl = document.querySelector('#ingredients');

const items = ingredients.map(ingredient => {
  const ingredientLi = document.createElement('li');
  ingredientLi.classList.add('item');
  ingredientLi.textContent = ingredient;

  return ingredientLi;
});

ingredientsEl.append(...items);


console.log(ingredientsEl);