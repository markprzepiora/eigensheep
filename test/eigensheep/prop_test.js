(function() {
  module("R.prop");

  var prop = require('eigensheep/prop')['default'];

  test("returns the indicated property of an object", function() {
    equal(
      prop('two', { one: 1, two: 2, three: 3 }),
      2
    );
  });

  test("returns undefined if the property does not exist", function() {
    equal(
      prop('four', { one: 1, two: 2, three: 3 }),
      undefined
    );
  });

  test("returns the nth element of an array", function() {
    equal(
      prop(1, ['one', 'two', 'three', 'four']),
      'two'
    );
  });
})();
