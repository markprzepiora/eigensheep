(function() {
  module("R.join");

  var join = require('eigensheep/join')['default'];

  test("joins an array with a separator", function() {
    strictEqual(join('|', []), '');
    strictEqual(join('|', ['a', 'b', 'c']), 'a|b|c');
    strictEqual(join('', ['a', 'b', 'c']), 'abc');
    strictEqual(join(', ', [1, 2, 3]), '1, 2, 3');
  });
})();
