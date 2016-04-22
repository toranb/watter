import {module, test} from 'dummy/tests/helpers/qunit';
import registration from 'dummy/tests/helpers/registration';

var store;

module('unit: user model test', {
    beforeEach() {
      store = registration(this.container, this.registry, ['model:user']);
    }
});

test('scott user', (assert) => {
    const user = store.push('user', {id: 1});
    assert.ok(user.get('simpleStore'));
});

