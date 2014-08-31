(function() {
  module("R.indexOf.from");

  var indexOf = require('eigensheep/index_of')['default'];

  test("returns the index of the first occurrence of an element, starting at an index", function() {
    equal(
      indexOf.from('a', 0, ['a', 'b', 'c', 'a']),
      0,
      "specifying n = 0 should search through the entire array"
    );

    equal(
      indexOf.from('a', 1, ['a', 'b', 'c', 'a', 'd']),
      3,
      "a match outside of the range should not be returned"
    );

    equal(
      indexOf.from('a', 3, ['a', 'b', 'c', 'a', 'd']),
      3,
      "a match outside of the range should not be returned"
    );

    equal(
      indexOf.from('a', 0, ['a', 'b', 'c', 'a', 'f']),
      0,
      "when the element occurs twice in the range, the first occurrence should be found"
    );
  });

  test("returns -1 if the element does not exist in the given range", function() {
    equal(
      indexOf.from('c', 3, ['a', 'b', 'c', 'd']),
      -1
    );
  });

  test("works for one-element arrays", function() {
    equal(indexOf.from(10, 0, [10]), 0);
    equal(indexOf.from(20, 0, [10]), -1);
  });

  test("works when the first element matches", function() {
    equal(indexOf.from(10, 0, [10, 5]), 0);
  });

  test("works when the last element matches", function() {
    equal(indexOf.from(10, 0, [5, 10]), 1);
  });

  test("returns -1 for an empty array", function() {
    equal(indexOf.from(10, 0, []), -1);
  });
})();
