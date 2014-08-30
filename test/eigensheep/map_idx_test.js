(function() {
  module("R.map.idx");

  var map = require('eigensheep/map')['default'];
  var double = function(x) { return x * 2 };

  test("mapping elements at only some indices", function() {
    var squareEnds = function(elt, idx, list) {
      if (idx === 0 || idx === list.length - 1) {
        return elt * elt;
      }
      return elt;
    };

    deepEqual(
      map.idx(squareEnds, [8, 6, 7, 5, 3, 0, 9]),
      [64, 6, 7, 5, 3, 0, 81]
    );
  });
})();
