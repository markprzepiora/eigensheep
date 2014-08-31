(function() {
  module("R.isSet");

  var isSet = require('eigensheep/is_set')['default'];

  test("empty arrays are sets", function() {
    equal(isSet([]), true);
  });

  test("one-element arrays are sets", function() {
    equal(isSet([1]), true);
  });

  test("arrays with duplicate numbers are not sets", function() {
    equal(isSet([1, 1, 2]), false);
  });

  test("arrays with precisely the same object are not sets", function() {
    var obj = {};
    equal(isSet([obj, obj]), false);
  });

  test("comparison is by strict equality", function() {
    equal(isSet([1, '1', 2]), true);
    equal(isSet([{}, {}]), true);
  });
})();
