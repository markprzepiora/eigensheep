(function() {
  module("R.concat");

  var concat = require('eigensheep/concat')['default'];

  test("it concatenates arrays", function() {
    deepEqual(concat([], []), []);
    deepEqual(concat([4, 5, 6], [1, 2, 3]), [4, 5, 6, 1, 2, 3]);
  });

  test("it concatenates strings", function() {
    deepEqual(concat('', ''), '');
    deepEqual(concat('', 'DEF'), 'DEF');
    deepEqual(concat('ABC', 'DEF'), 'ABCDEF');
  });
})();
