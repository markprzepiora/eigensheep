(function() {
  module("R.isEmpty");

  var isEmpty = require('eigensheep/is_empty')['default'];

  test("undefined is empty", function() {
    equal(isEmpty(undefined), true);
  });

  test("null is empty", function() {
    equal(isEmpty(null), true);
  });

  test("false is empty", function() {
    equal(isEmpty(false), true);
  });

  // Is this correct?
  test("true is empty", function() {
    equal(isEmpty(true), true);
  });

  test("0 is empty", function() {
    equal(isEmpty(0), true);
  });

  // Is this correct?
  test("all numbers are empty", function() {
    equal(isEmpty(1), true);
    equal(isEmpty(-1), true);
    equal(isEmpty(123), true);
  });

  test("empty strings are empty", function() {
    equal(isEmpty(''), true);
  });

  test("empty arrays are empty", function() {
    equal(isEmpty([]), true);
  });

  test("non-empty arrays are not empty", function() {
    equal(isEmpty([1, 2, 3]), false);
  });

  test("non-empty strings are not empty", function() {
    equal(isEmpty('hello'), false);
  });
})();
