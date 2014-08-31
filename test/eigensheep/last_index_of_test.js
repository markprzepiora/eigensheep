(function() {
  module("R.lastIndexOf");

  var lastIndexOf = require('eigensheep/last_index_of')['default'];

  test("returns the index of the last time an element is present in an array", function() {
    equal(lastIndexOf(4, [4, 3, 4, 2]), 2);
  });

  test("returns -1 if the element does not exist", function() {
    equal(lastIndexOf(10, [4, 3, 4, 2]), -1);
  });

  test("works for one-element arrays", function() {
    equal(lastIndexOf(10, [10]), 0);
    equal(lastIndexOf(20, [10]), -1);
  });

  test("works when the first element matches", function() {
    equal(lastIndexOf(10, [10, 5]), 0);
  });

  test("works when the last element matches", function() {
    equal(lastIndexOf(10, [5, 10]), 1);
  });

  test("returns -1 for an empty array", function() {
    equal(lastIndexOf(10, []), -1);
  });
})();
