(function() {
  module("R.isAtom");

  var isAtom = require('eigensheep/is_atom')['default'];

  test("arrays are not atoms", function() {
    equal(isAtom([]), false);
    equal(isAtom([1, 2, 3]), false);
  });

  test("null is not an atom", function() {
    equal(isAtom(null), false);
  });

  test("undefined is not an atom", function() {
    equal(isAtom(undefined), false);
  });

  test("numbers are atoms", function() {
    equal(isAtom(123), true);
    equal(isAtom(0), true);
  });

  test("strings are atoms", function() {
    equal(isAtom('hello world'), true);
    equal(isAtom(''), true);
  });

  test("objects are atoms", function() {
    equal(isAtom({}), true);
    equal(isAtom({one: 1, two: 2}), true);
  });
})();
