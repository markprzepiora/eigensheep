(function() {
  module("R.substringFrom");

  var substringFrom = require('eigensheep/substring_from')['default'];

  test("returns the trailing substring of a string starting with the nth character", function() {
    strictEqual(
      substringFrom(8, 'abcdefghijklm'),
      'ijklm'
    );
  });
})();
