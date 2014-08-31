(function() {
  module("R.where");

  var where = require('eigensheep/where')['default'];

  test("testing a simple object's properties", function() {
    var numbers = { one: 1, two: 2, three: 3 };

    equal(where({ one: 1 }, numbers), true);
    equal(where({ one: '1' }, numbers), false, "testing should be by strict equality");
    equal(where({ one: 1, two: 2 }, numbers), true);
    equal(where({ one: 1, two: '2' }, numbers), false);
  });

  test("deep matching an object's properties", function() {
    var amy = {
      name: "Amy",
      dad: { name: "Bob", age: 40 }
    };

    var charles = {
      name: "Charles",
      dad: { name: "Daniel", age: 35 }
    };

    equal(where({ dad: where({ name: "Bob" }) }, amy), true);
    equal(where({ dad: where({ name: "Bob" }) }, charles), false);
  });

  test("using a predicate to test matches", function() {
    var isNumber = function(x) { return typeof x === 'number' };
    var tester = {
      one:   isNumber,
      two:   isNumber,
      three: isNumber
    };

    equal(where(tester, { one: 1, two: 2, three: 3 }), true);
    equal(where(tester, { one: '1', two: 2, three: 3 }), false);
  });
})();
