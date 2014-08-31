(function() {
  module("R.lPartial");

  var lPartial = require('eigensheep/l_partial')['default'];
  var multiply = function(a, b) { return a * b; };
  var greet = function(salutation, title, firstName, lastName) {
    return salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
  };

  test("creates a partially-applied version of an existing function", function() {
    var double = lPartial(multiply, 2);
    equal(double(5), 10);
  });

  test("creates a partially-left-applied version of an existing function", function() {
    var greetSir = lPartial(greet, 'Hello', 'Sir');
    equal(greetSir('Bob', 'Robertson'), 'Hello, Sir Bob Robertson!');
  });
})();
