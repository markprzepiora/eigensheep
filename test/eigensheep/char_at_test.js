(function() {
  module("R.charAt");

  var charAt = require('eigensheep/char_at')['default'];

  test("returns the character of a string at index i", function() {
    strictEqual(charAt(-1, "abcd"), '');
    strictEqual(charAt(0, "abcd"), 'a');
    strictEqual(charAt(3, "abcd"), 'd');
    strictEqual(charAt(10, "abcd"), '');
  });
})();
