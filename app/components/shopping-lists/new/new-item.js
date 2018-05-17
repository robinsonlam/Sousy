import Component from '@ember/component';

export default Component.extend({
  classNames: ['item', 'new'],

  actions: {
    addItem() {
      this.get('addItem')();
    }
  }
});
