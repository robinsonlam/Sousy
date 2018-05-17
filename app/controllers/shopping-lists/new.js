import Controller from '@ember/controller';
import { get } from '@ember/object';

import { alias } from '@ember/object/computed';

export default Controller.extend({
  shoppingList: alias('model.shoppingList'),
  newItem: alias('model.newItem'),

  actions: {
    async saveList() {
      try {
        const store = this.get('store');
        const shoppingList = this.get('shoppingList');
        // verify shoppingList
        store.createRecord('shopping-list', shoppingList);
      } catch (e) {
        alert(`Error saving list: ${e}`);
      }
    },

    async addItem(shoppingListItems, itemToAdd) {
      try {
        shoppingListItems.pushObject(itemToAdd);
      } catch (e) {
        alert(`Error: ${e}`);
      }
    }
  }
});
