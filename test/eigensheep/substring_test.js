(function() {
  module("R.substring");

  var substring = require('eigensheep/substring')['default'];

  test("returns a subset of a string between one index and another", function() {
    strictEqual(
      substring(2, 5, 'abcdefghijklm'),
      'cde'
    );
  });
})();
