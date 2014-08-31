(function() {
  module("R.rPartial");

  var rPartial = require('eigensheep/r_partial')['default'];
  var multiply = function(a, b) { return a * b; };
  var greet = function(salutation, title, firstName, lastName) {
    return salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
  };

  test("creates a partially-applied version of a simple binary function", function() {
    var double = rPartial(multiply, 2);
    equal(double(5), 10);
  });

  test("creates a partially-right-applied version of an existing function", function() {
    var greetMsJaneJones = rPartial(greet, 'Ms.', 'Jane', 'Jones');
    equal(greetMsJaneJones('Hello'), 'Hello, Ms. Jane Jones!');
  });
})();
