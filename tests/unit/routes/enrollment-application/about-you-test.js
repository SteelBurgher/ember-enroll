import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | enrollment-application/about-you', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:enrollment-application/about-you');
    assert.ok(route);
  });
});
