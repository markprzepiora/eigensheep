(function() {
  module("R.props");

  var props = require('eigensheep/props')['default'];

  test("returns the indicated property of an object", function() {
    equal(
      props({ one: 1, two: 2, three: 3 }, 'two'),
      2
    );
  });

  test("returns undefined if the propserty does not exist", function() {
    equal(
      props({ one: 1, two: 2, three: 3 }, 'four'),
      undefined
    );
  });

  test("returns the nth element of an array", function() {
    equal(
      props(['one', 'two', 'three', 'four'], 1),
      'two'
    );
  });
})();
