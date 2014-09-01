(function() {
  module("R.path");

  var path = require('eigensheep/path')['default'];

  test("retrieve a nested path on an object using a string of property names separated by periods", function() {
    strictEqual(
      path('a.b.c', { a: { b: { c: 3 }}}),
      3
    );

    strictEqual(
      typeof path('a.b.c', { a: { z: { c: 3 }}}),
      'undefined'
    );
  });
})();
