(function() {
  module("R.insert.all");

  var insert = require('eigensheep/insert')['default'];

  test("returns a new array with an array inserted in an existing array", function() {
    var incompletePowers = [2, 4, 32];
    var completePowers   = insert.all(2, [8, 16], incompletePowers);

    notEqual(completePowers, incompletePowers, "the resulting array should be strictly distinct from the source");
    deepEqual(completePowers, [2, 4, 8, 16, 32], "the resulting array should have the insert.alled element");
    deepEqual(incompletePowers, [2, 4, 32], "the source array should not be modified");
  });

  test("insert a list at the end of an array", function() {
    var numbers = [1, 2, 3];
    deepEqual(
      insert.all(3, [4, 5], numbers),
      [1, 2, 3, 4, 5]
    );
  });

  test("insert.alling past the end of an array", function() {
    var numbers = [1, 2, 3];
    deepEqual(
      insert.all(100, [4, 5], numbers),
      [1, 2, 3, 4, 5]
    );
  });
})();
