(function() {
  module("R.find");

  var find = require('eigensheep/find')['default'];
  var isEven = function(x) { return x % 2 === 0 };

  test("finds the first element of an array matching a predicate", function() {
    var numbers = [1, 3, 9, 7, 2, 8, 9];

    equal(find(isEven)(numbers), 2);
    equal(find(isEven, numbers), 2);
  });

  test("returns undefined when no matching element exists", function() {
    var numbers = [1, 3, 9, 7, 9];

    equal(typeof find(isEven, numbers), 'undefined');
  });
})();
