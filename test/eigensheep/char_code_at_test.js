(function() {
  module("R.charCodeAt");

  var charCodeAt = require('eigensheep/char_code_at')['default'];

  test("returns the ASCII code of a string at index i", function() {
    deepEqual(charCodeAt(-1, "abcd"), NaN);
    strictEqual(charCodeAt(0, "abcd"), 97);
    strictEqual(charCodeAt(1, "abcd"), 98);
    deepEqual(charCodeAt(10, "abcd"), NaN);
  });
})();
