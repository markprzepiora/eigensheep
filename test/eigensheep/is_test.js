(function() {
  module("R.is");

  var is = require('eigensheep/is')['default'];

  test("Object", function() {
    equal(is(Object, {}), true);
    equal(is(Object, new String('')), true);
  });

  test("Number", function() {
    equal(is(Number, 1), true);
    equal(is(Number, {}), false);
    equal(is(Number, "2"), false);
  });

  test("String", function() {
    equal(is(String, 'a string'), true);
    equal(is(String, new String('')), true);
    equal(is(String, 2), false);
  });

  test("is curried", function() {
    equal(is(String)("test"), true);
    equal(is(String)(2), false);
  });
})();
