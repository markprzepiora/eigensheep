(function() {
  module("R.construct");

  var construct = require('eigensheep/construct')['default'];

  test("wraps a constructor function inside a curried function of the contruct's arity", function() {
    function Person(name, age) {
      this.name = name;
      this.age  = age;
    }

    var createPerson = construct(Person);

    var markMaker = createPerson("Mark");
    var youngMark = markMaker(6);
    var oldMark   = markMaker(80);

    equal(youngMark.constructor, Person);
    equal(youngMark.name, "Mark");
    equal(youngMark.age, 6);

    equal(oldMark.constructor, Person);
    equal(oldMark.name, "Mark");
    equal(oldMark.age, 80);
  });
})();
