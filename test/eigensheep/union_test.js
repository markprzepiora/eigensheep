(function() {
  module("R.union");

  var union = require('eigensheep/union')['default'];

  test("performs a set union of two arrays", function() {
    deepEqual(
      union([1, 2, 3, 4], [3, 4, 5, 6]),
      [1, 2, 3, 4, 5, 6]
    );
  });

  test("removes duplicates", function() {
    deepEqual(
      union([1, 1, 2], [2, 1, 3, 3]),
      [1, 2, 3]
    );
  });

  test("tests using strict equality", function() {
    deepEqual(
      union([1], ['1']),
      [1, '1']
    );
  });

  test("can be curried", function() {
    var extraItems = ['travel_insurance'];
    var addToShoppingCart = union(extraItems);

    deepEqual(
      addToShoppingCart(['flight']),
      ['travel_insurance', 'flight']
    );
  });
})();
