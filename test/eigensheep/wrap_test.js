(function() {
  module("R.wrap");

  var wrap = require('eigensheep/wrap')['default'];

  test("wrap a function inside another so its arguments can be pre-processed", function() {
    var addSlash = function(a) { return a + '/' };
    var slashify = wrap(addSlash, function(f, x) {
      return x.match(/\/$/) ? x : f(x)
    });

    equal(slashify('foo'), 'foo/');
    equal(slashify('foo/'), 'foo/');
  });
})();
