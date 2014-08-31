(function() {
  module("R.eqProps");

  var eqProps = require('eigensheep/eq_props')['default'];

  test("reports whether two objects have the same value for the specified property", function() {
    var first = { one: 1, two: 2, three: 3 };
    var second = { one: 1, two: '2', three: 'san' };

    equal(eqProps('one', first, second), true);
    equal(eqProps('two', first, second), false);
    equal(eqProps('three', first, second), false);
  });

  test("can be curried", function() {
    var first = { one: 1, two: 2, three: 3 };
    var second = { one: 1, two: '2', three: 'san' };

    equal(eqProps('one')(first, second), true);
    equal(eqProps('one')(first)(second), true);
    equal(eqProps('one', first)(second), true);
  });
})();
