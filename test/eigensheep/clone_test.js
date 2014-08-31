(function() {
  module("R.clone");

  var clone = require('eigensheep/clone')['default'];

  test("creating a shallow copy of a simple number array", function() {
    var numbers = [1, 2, 3];
    var cloned = clone(numbers);

    notEqual(cloned, numbers, "the cloned array should not be strictly equal to the original one");
    deepEqual(cloned, numbers, "but the cloned array should contain the same elements as the original");
  });

  test("creating a shallow copy of an array with objects", function() {
    var list = [[1], [2]];
    var cloned = clone(list);

    notEqual(cloned, list, "the cloned array should not be strictly equal to the original one");
    equal(cloned[0], list[0], "the first element of the cloned array should be strictly equal to the original");
    equal(cloned[1], list[1], "the second element of the cloned array should be strictly equal to the original");
  });
})();
