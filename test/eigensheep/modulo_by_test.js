(function() {
  module("R.moduloBy");

  var moduloBy = require('eigensheep/modulo_by')['default'];

  test("takes the modulo in reverse order", function() {
    equal(moduloBy(2, 7), 1);
    equal(moduloBy(2, 8), 0);
    equal(moduloBy(7, 2), 2);

    equal(moduloBy(5, 17), 2);
  });

  test("has the same negative number bug as the % operator", function() {
    deepEqual(moduloBy(5, -17), -2);
  });
})();
