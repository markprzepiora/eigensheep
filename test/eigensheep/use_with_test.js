(function() {
  module("R.useWith");

  var useWith = require('eigensheep/use_with')['default'];
  var double = function(y) { return y * 2; };
  var square = function(x) { return x * x; };
  var add = function(a, b) { return a + b; };
  var addAll = function() {
    var _args = [].slice.call(arguments, 0);
    return _args.reduce(add, 0);
  };

  test("it disperses arguments", function() {
    var addDoubleAndSquare = useWith(addAll, double, square);

    //≅ addAll(double(10), square(5));
    //≅ addAll(20, 25);
    //≅ 45;
    equal(addDoubleAndSquare(10, 5), 45);
  });

  test("it passes through additional arguments", function() {
    var addDoubleAndSquare = useWith(addAll, double, square);

    //≅ addAll(double(10), square(5), 100);
    //≅ addAll(20, 25, 100);
    //≅ 145;
    equal(addDoubleAndSquare(10, 5, 100), 145);
  });
})();
