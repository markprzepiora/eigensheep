(function() {
  module("R.filter.idx");

  var filter = require('eigensheep/filter')['default'];

  test("filtering an array using indices", function() {
    var lastTwo = function(val, idx, list) {
      return list.length - idx <= 2;
    };

    deepEqual(
      filter.idx(lastTwo, [8, 6, 7, 5, 3, 0, 9]),
      [0, 9]
    );
  });
})();
