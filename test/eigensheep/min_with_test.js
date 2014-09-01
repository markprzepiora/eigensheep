(function() {
  module("R.minWith");

  var minWith = require('eigensheep/min_with')['default'];

  test("determines the smallest element of an array using a custom predicate", function() {
    var age = function(person) { return person.age };
    var family = [
      { name: "Julie", age: 27 },
      { name: "Mark", age: 29 },
      { name: "Belldandy", age: 7 }
    ];
    var findYoungest = minWith(age);

    strictEqual(findYoungest(family), family[2]);
  });
})();
