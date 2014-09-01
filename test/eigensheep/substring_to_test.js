(function() {
  module("R.substringTo");

  var substringTo = require('eigensheep/substring_to')['default'];

  test("returns the leading substring of a string up to the nth character", function() {
    strictEqual(substringTo(0, 'abcd'), '');
    strictEqual(substringTo(1, 'abcd'), 'a');
    strictEqual(substringTo(2, 'abcd'), 'ab');
    strictEqual(substringTo(10, 'abcd'), 'abcd');
  });
})();
