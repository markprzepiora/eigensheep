(function() {
  module("R.mathMod");

  var mathMod = require('eigensheep/math_mod')['default'];

  test("returns the remainder of a number modulo another", function() {
    equal(mathMod(7, 2), 1);
    equal(mathMod(8, 2), 0);
    equal(mathMod(2, 7), 2);

    equal(mathMod(17, 5), 2);
  });

  test("acts correctly for negative numbers too", function() {
    strictEqual(mathMod(-17, 5), 3);
    strictEqual(mathMod(17, -5), NaN);
    strictEqual(mathMod(17, 0), NaN);
    strictEqual(mathMod(17.2, 5), NaN);
    strictEqual(mathMod(17, 5.5), NaN);
  });
})();
