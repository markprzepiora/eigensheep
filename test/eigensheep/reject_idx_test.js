(function() {
  module("R.reject.idx");

  var reject = require('eigensheep/reject')['default'];

  test("rejecting elements of an array", function() {
    var lastTwo = function(val, idx, list) {
      return list.length - idx <= 2;
    };

    deepEqual(
      reject.idx(lastTwo, [8, 6, 7, 5, 3, 0, 9]),
      [8, 6, 7, 5, 3]
    );
  });
})();
