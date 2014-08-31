(function() {
  module("R.chain");

  var chain = require('eigensheep/chain')['default'];

  test("performs a flatmap", function() {
    var list = [1, 2, 3];
    var duplicate = function(n) {
      return [n, n];
    };

    deepEqual(
      chain(duplicate, list),
      [1, 1, 2, 2, 3, 3]
    );
  });

  test("it only unnests one level", function() {
    var list = [1, 2, 3];
    var nestedDuplicator = function(n) {
      return [[n, n]];
    };

    deepEqual(
      chain(nestedDuplicator, list),
      [[1, 1], [2, 2], [3, 3]]
    );
  });
})();
