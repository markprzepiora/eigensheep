(function() {
  module("R.times");

  var times = require('eigensheep/times')['default'];
  var double = function(x) { return 2*x };

  test("calls the input function n times", function() {
    var bell = 0;
    var ding = function() { bell++ }

    times(ding, 5);
    equal(bell, 5);
  });

  test("passes 0...n to the callback", function() {
    expect(5);

    var bell = 0;
    var ding = function(x) {
      equal(x, bell++); // 0, then 1, ...
    };

    times(ding, 5);
  });

  test("builds an array out of the return values of the callback", function() {
    deepEqual(
      times(double, 3),
      [0, 2, 4]
    );
  });
})();
