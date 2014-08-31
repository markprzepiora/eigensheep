(function() {
  module("R.valuesIn");

  var valuesIn = require('eigensheep/values_in')['default'];

  test("returns all of an object's values, including its prototypes", function() {
    var F = function() { this.one = 1 };
    F.prototype.two = 2;
    var f = new F();

    deepEqual(valuesIn(f), [1, 2]);
  });
})();
