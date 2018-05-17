import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | shopping-lists/new', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:shopping-lists/new');
    assert.ok(route);
  });
});
