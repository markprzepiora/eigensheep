(function() {
  module("R.constructN");

  var constructN = require('eigensheep/construct_n')['default'];

  test("wraps a constructor function inside a curried function with a specified arity", function() {
    function Person(name, age) {
      this.name = name;
      this.age  = age;
    }

    var createPerson = constructN(2, Person);

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

  test("specifying an arity of 0", function() {
    function Vector(x, y) {
      this.x = x || 0;
      this.y = y || 0;
    }

    var createVector = constructN(0, Vector);

    var vector1 = createVector();
    var vector2 = createVector(1);
    var vector3 = createVector(1, 2);

    equal(vector1.constructor, Vector);
    equal(vector2.constructor, Vector);
    equal(vector3.constructor, Vector);

    notEqual(vector1, vector2);
    notEqual(vector2, vector3);

    equal(vector1.x, 0);
    equal(vector1.x, 0);
    equal(vector2.x, 1);
    equal(vector2.y, 0);
    equal(vector3.x, 1);
    equal(vector3.y, 2);
  });
})();
