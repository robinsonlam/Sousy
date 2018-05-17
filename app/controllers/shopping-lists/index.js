import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  shoppingLists: alias('model'),

  actions: {
    alertItemName(item) {
      alert(`You clicked on: ${item}`);
    }
  }
});
