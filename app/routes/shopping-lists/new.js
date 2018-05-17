import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return {
      shoppingList: {
        title: null,
        items: []
      },

      newItem: {
        name: null,
        amount: {
          value: null,
          measurement: null
        }
      }
    }
  }
});
