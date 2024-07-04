import { apiCall } from "./api-client.js";

function loadPizza() {
  const URL =
    "https://raw.githubusercontent.com/brainmentorspvtltd/pizza-api/main/pizza.json";
  const promise = apiCall(URL);
  promise
    .then(function (response) {
      const pr = response.json();
      pr.then(function (data) {
        printPizzas(data.Vegetarian);
        console.log("Data is ", data);
      }).catch(function (err) {
        console.log("Invalid error", err);
      });
    })
    .catch(function (err) {
      console.log("Cannot Load API ", err);
    });
}

loadPizza();

function printPizzas(pizzas) {
  for (var i = 0; i < pizzas.length; i++) {
    printPizza(pizzas[i]);
  }
}

function printPizza(pizza) {
  const card = `<div class="card" style="width: 18rem;">
    <img src="${pizza.assets.menu[0].url}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${pizza.name}</h5>
    <p class="card-text">${pizza["menu_description"]} &#8377; ${pizza.price}</p>
    <a href="#" class="btn btn-primary">Order</a>
    </div>
    </div>`;
    const div = document.getElementById('output');
    div.innerHTML = div.innerHTML + card;
}
