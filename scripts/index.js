/* eslint-disable strict */
/* global shoppingList, store */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});

api.getItems((items) => {
  items.forEach((item) => store.addItem(item));
  shoppingList.render();
  const item = store.items[0];
});
