(function() {
  module("R.keysIn");

  var keysIn = require('eigensheep/keys_in')['default'];

  test("does what it's supposed to", function() {
    var F = function() { this.x = 'X' };
    F.prototype.y = 'Y';
    var f = new F();

    deepEqual(
      keysIn(f),
      ['x', 'y']
    );
  });
})();
