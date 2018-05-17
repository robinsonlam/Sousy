import Route from '@ember/routing/route';

export default Route.extend({
  async model() {
    // NOTE: Fetch data from API here?
    try {
      const store = this.get('store');

      let shoppingLists = store.findAll('shopping-list');
      return shoppingLists;
    } catch (e) {
      alert(`Error retrieving Shopping Lists: ${e}`);
      return ['Big Breakfast', 'Turkey Sandwiches', 'Hot Chicken Roast'];
    }
  },
});
