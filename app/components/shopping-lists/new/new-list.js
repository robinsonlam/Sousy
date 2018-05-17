import Component from '@ember/component';

export default Component.extend({
  classNames: ['shoppingList', 'editable'],

  newItem: null,

  actions: {
    saveList() {
      this.get('saveList')();
    }
  }
});
