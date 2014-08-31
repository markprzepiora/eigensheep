(function() {
  module("R.xprodWith");

  var xprodWith = require('eigensheep/xprod_with')['default'];
  var concat = function(x, y) { return x + " " + y };

  test("computing the cross product of two arrays using a crossing function", function() {
    var greeterAndByer = xprodWith(concat, ["Hello", "Bye"]);

    deepEqual(
      greeterAndByer(["Mark", "Julie"]),
      ["Hello Mark", "Hello Julie", "Bye Mark", "Bye Julie"]
    );
  });
})();
