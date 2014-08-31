(function() {
  module("R.lastIndexOf.from");

  var lastIndexOf = require('eigensheep/last_index_of')['default'];

  test("returns the index of the last occurrence of an element, starting at an index", function() {
    equal(
      lastIndexOf.from('a', 3, ['a', 'b', 'c', 'a']),
      3,
      "specifying n = array.length - 1 should search through the entire array"
    );

    equal(
      lastIndexOf.from('a', 0, ['a', 'b', 'c', 'a', 'd']),
      0,
      "a match outside of the range should not be returned"
    );

    equal(
      lastIndexOf.from('a', 2, ['a', 'b', 'c', 'a', 'd']),
      0,
      "a match outside of the range should not be returned"
    );

    equal(
      lastIndexOf.from('a', 4, ['a', 'b', 'c', 'a', 'f']),
      3,
      "when the element occurs twice in the range, the last occurrence should be found"
    );
  });

  test("returns -1 if the element does not exist in the given range", function() {
    equal(
      lastIndexOf.from('c', 1, ['a', 'b', 'c', 'd']),
      -1
    );
  });

  test("works for one-element arrays", function() {
    equal(lastIndexOf.from(10, 0, [10]), 0);
    equal(lastIndexOf.from(20, 0, [10]), -1);
  });

  test("works when the first element matches", function() {
    equal(lastIndexOf.from(10, 1, [10, 5]), 0);
  });

  test("works when the last element matches", function() {
    equal(lastIndexOf.from(10, 1, [5, 10]), 1);
  });

  test("returns -1 for an empty array", function() {
    equal(lastIndexOf.from(10, 0, []), -1);
  });
})();
