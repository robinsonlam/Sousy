export default function() {
  this.namespace = '/api';

  this.get('/shopping-lists', function() {
    return {
      data: [{
        type: 'shopping-list',
        id: 'powerpuff-cookies',
        attributes: {
          title: 'Powerpuff Cookies',
          items: [
            {
              name: 'Sugar',
              amount: { value: '20', measurement: 'Grams' }
            },
            {
              name: 'Spice',
              amount: { value: '20', measurement: 'Grams' }
            },
            {
              name: 'Everything Nice',
              amount: { value: '10', measurement: 'Kilograms' }
            },
          ]
        }
      },
      {
        type: 'shopping-list',
        id: 'big-breakfast',
        attributes: {
          title: 'Big Breakfast',
          items: [
            {
              name: 'Bacon',
              amount: { value: '4', measurement: '' }
            },
            {
              name: 'Large Egg',
              amount: { value: '2', measurement: '' }
            },
            {
              name: 'Beef Sausage',
              amount: { value: '3', measurement: '' }
            },
          ]
        }
      }]
    };
  });
}
