import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | enrollment-application/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:enrollment-application/index');
    assert.ok(route);
  });
});
