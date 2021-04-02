import { ProxyState } from "../AppState.js";
import Ingredient from "../Models/Ingredient.js";
import Task from "../Models/Task.js";


export function saveState() {
  localStorage.setItem('pizzashack', JSON.stringify({
    pizzas: ProxyState.pizzas,
    ingredients: ProxyState.ingredients
  }))
}

export function loadState() {
  let data = JSON.parse(localStorage.getItem('pizzashack'))
  if (data) {
    ProxyState.pizzas = data.pizzas.map(pizza => new Pizza(pizza.name, pizza.size, pizza.id));
    ProxyState.ingredients = data.ingredients.map(ing => new Ingredient(ing.name, ing.pizzaId, ing.id));
  }
}

