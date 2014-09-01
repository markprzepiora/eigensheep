(function() {
  module("R.maxWith");

  var maxWith = require('eigensheep/max_with')['default'];

  test("determines the biggest element of an array using a custom predicate", function() {
    var age = function(person) { return person.age };
    var family = [
      { name: "Julie", age: 27 },
      { name: "Mark", age: 29 },
      { name: "Belldandy", age: 7 }
    ];
    var findOldest = maxWith(age);

    strictEqual(findOldest(family), family[1]);
  });
})();
