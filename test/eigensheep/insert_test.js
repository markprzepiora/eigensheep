(function() {
  module("R.insert");

  var insert = require('eigensheep/insert')['default'];

  test("returns a new array with an element inserted in an existing array", function() {
    var incompletePowers = [2, 4, 8, 32];
    var completePowers   = insert(3, 16, incompletePowers);

    notEqual(completePowers, incompletePowers, "the resulting array should be strictly distinct from the source");
    deepEqual(completePowers, [2, 4, 8, 16, 32], "the resulting array should have the inserted element");
    deepEqual(incompletePowers, [2, 4, 8, 32], "the source array should not be modified");
  });

  test("inserting at the end of an array", function() {
    var numbers = [1, 2, 3];
    deepEqual(
      insert(3, 4, numbers),
      [1, 2, 3, 4]
    );
  });

  test("inserting past the end of an array", function() {
    var numbers = [1, 2, 3];
    deepEqual(
      insert(100, 4, numbers),
      [1, 2, 3, 4]
    );
  });
})();
