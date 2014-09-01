(function() {
  module("R.pathOn");

  var pathOn = require('eigensheep/path_on')['default'];

  test("retrieve a nested path on an object using a string to define the path", function() {
    strictEqual(
      pathOn('/', 'a/b/c', { a: { b: { c: 3 }}}),
      3
    );
  });
})();
