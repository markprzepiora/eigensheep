(function() {
  module("R.toPairsIn");

  var toPairsIn = require('eigensheep/to_pairs_in')['default'];

  test("does what it's supposed to", function() {
    var F = function() { this.one = 1 };
    F.prototype.two = 2;
    var f = new F();

    deepEqual(
      toPairsIn(f),
      [['one', 1], ['two', 2]]
    );
  });
})();
