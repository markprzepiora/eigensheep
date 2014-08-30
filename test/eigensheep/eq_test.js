(function() {
  module("R.eq");

  var eq = require('eigensheep/eq')['default'];

  test("returns whether two objects are strictly equal", function() {
    equal(eq(1, 1), true, "equal number literals are equal to each other");
    equal(eq(1, 2), false, "uneqal number literals are not equal");
    equal(eq(1, '1'), false, "a number and its string representation are not equal");
    equal(eq({}, {}), false, "two object literals representing the same object are not equal");

    var o = {};
    equal(eq(o, o), true, "the same object is equal to itself");
  });

  test("can be curried", function() {
    var isTheLoneliestNumber = eq(1);

    equal(isTheLoneliestNumber(1), true);
    equal(isTheLoneliestNumber('1'), false);
    equal(isTheLoneliestNumber(2), false);
  });
})();
