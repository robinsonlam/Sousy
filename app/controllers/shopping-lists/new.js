import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  shoppingList: alias('model.shoppingList'),
  newItem: alias('model.newItem'),

  actions: {
    addItem(shoppingListItems, itemToAdd) {
      shoppingListItems.pushObject(itemToAdd);
    }
  }
});
