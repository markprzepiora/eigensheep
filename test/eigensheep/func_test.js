(function() {
  module("R.func");

  var func = require('eigensheep/func')['default'];

  test("calls the specified function on the supplied object", function() {
    var greeter = {
      genericGreeting: function() {
        return "Hello, stranger!";
      },
      personalGreeting: function(name) {
        return "Hello, " + name + "!";
      }
    };

    equal(
      func('genericGreeting')(greeter),
      "Hello, stranger!"
    );

    equal(
      func('genericGreeting', greeter),
      "Hello, stranger!"
    );

    equal(
      func('personalGreeting')(greeter, 'Mark'),
      "Hello, Mark!"
    );

    equal(
      func('personalGreeting', greeter, 'Mark'),
      "Hello, Mark!"
    );
  });
})();
