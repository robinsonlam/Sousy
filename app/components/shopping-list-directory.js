import Component from '@ember/component';

export default Component.extend({
  actions: {
    alertItemName(item) {
      alert(`You clicked on: ${item}`);
    }
  }
});
