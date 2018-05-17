import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    // NOTE: Fetch data from API here?
    return ['Big Breakfast', 'Turkey Sandwiches', 'Hot Chicken Roast'];
  }
});
