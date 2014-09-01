(function() {
  module("R.lt");

  var lt = require('eigensheep/lt')['default'];

  test("returns whether a < b", function() {
    strictEqual(lt(1, 2), true);
    strictEqual(lt(1)(2), true);
    strictEqual(lt(2)(2), false);
  });
})();
