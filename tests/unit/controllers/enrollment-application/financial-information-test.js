import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | enrollment-application/financial-information', function(hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:enrollment-application/financial-information');
    assert.ok(controller);
  });
});
