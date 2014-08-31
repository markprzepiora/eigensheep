(function() {
  module("R.pluck");

  var pluck = require('eigensheep/pluck')['default'];

  test("plucks a named property from all elements of a list", function() {
    var people = [
      { name: "Mark", age: 29 },
      { name: "Julie", age: 27 }
    ];

    deepEqual(pluck('name')(people), ["Mark", "Julie"]);
    deepEqual(pluck('name', people), ["Mark", "Julie"]);

    var numberNames = [['one', 1], ['two', 2]];
    deepEqual(pluck(1, numberNames), [1, 2]);
    deepEqual(pluck(2, numberNames), [undefined, undefined]);
  });
})();
