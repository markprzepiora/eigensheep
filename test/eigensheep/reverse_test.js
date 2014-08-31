(function() {
  module("R.reverse");

  var reverse = require('eigensheep/reverse')['default'];

  test("returns the reverse of an array", function() {
    var numbers  = [1, 2, 3];
    var reversed = reverse(numbers);

    notStrictEqual(numbers, reversed);
    deepEqual(reversed, [3, 2, 1]);
  });
})();
