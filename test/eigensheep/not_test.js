(function() {
  module("R.not");

  var not = require('eigensheep/not')['default'];

  test("negating a function", function() {
    var gt10 = function(x) { return x > 10; };
    var lte10 = not(gt10);

    equal(lte10(10), true);
    equal(lte10(11), false);
  });
})();
