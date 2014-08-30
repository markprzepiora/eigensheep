(function() {
  module("R.contains");

  var contains = require('eigensheep/contains')['default'];

  test("checking whether a list contains an element", function() {
    equal(contains(1, [1, 2, 3]), true);
    equal(contains(3)([1, 2, 3]), true);
    equal(contains(4)([1, 2, 3]), false);
    equal(contains({})([{}, {}]), false);

    var obj = {};
    equal(
      contains(obj)([{}, obj, {}]),
      true
    );
  });
})();
