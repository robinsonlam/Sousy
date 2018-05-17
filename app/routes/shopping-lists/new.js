import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return {
      shoppingList: {
        title: 'Powerpuff Cookies',
        items: [
          {
            name: 'Sugar',
            amount: {
              value: '20',
              measurement: 'Grams'
            }
          },
          {
            name: 'Spice',
            amount: {
              value: '20',
              measurement: 'Grams'
            }
          },
          {
            name: 'Everything Nice',
            amount: {
              value: '10',
              measurement: 'Kilograms'
            }
          },
        ]
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
