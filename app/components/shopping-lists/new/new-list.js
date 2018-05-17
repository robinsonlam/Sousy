import Component from '@ember/component';

export default Component.extend({
  classNames: ['shoppingList', 'editable'],

  newItem: null,

  actions: {
    addItem() {
      alert(`Item added. ${JSON.stringify(this.newItem)}`);
      //
      // if (this.newItem.name && this.newItem.amount.value && this.newItem.amount.measurement) {
      //   shoppingList.items.push(this.newItem);
      // }
    },
    async saveList() {
      // Save List to DB
      try {
        const shoppingList = await this.get('shoppingList');
        alert(`List has been mock saved. ${JSON.stringify(shoppingList)}`);
        const newItem = await this.get('newItem');
        alert(`Item added. ${JSON.stringify(newItem)}`);
      } catch (e) {
        alert(`Error: ${e}`);
      }
      return true;
    }
  }
});
