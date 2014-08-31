(function() {
  module("R.tail");

  var tail = require('eigensheep/tail')['default'];

  test("returns all but the first element of an array", function() {
    deepEqual(
      tail([1, 2, 3]),
      [2, 3]
    );
  });

  test("returns an empty array for an empty array", function() {
    deepEqual(tail([]), []);
  });

  test("returns an empty array for a one-element array", function() {
    deepEqual(tail([1]), []);
  });

  test("returns all but the first character of a string, as an array", function() {
    deepEqual(tail('foo'), ['o', 'o']);
  });

  test("returns an empty array for an empty string", function() {
    deepEqual(tail(''), []);
  });

  test("returns an empty array for null", function() {
    deepEqual(tail(null), []);
  });

  test("returns an empty array for a number", function() {
    deepEqual(tail(1), []);
  });
})();
