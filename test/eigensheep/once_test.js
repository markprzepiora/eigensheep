(function() {
  module("R.once");

  var once = require('eigensheep/once')['default'];

  test("wraps the given function so that it is only executed once", function() {
    var message = '';
    var writeMessage = function(msg) {
      message = msg;
      return msg + ' to you too!';
    };

    var writeOnce = once(writeMessage);

    equal(writeOnce('Hello'), 'Hello to you too!');
    equal(message, 'Hello');

    equal(writeOnce('Konnichiwa'), 'Hello to you too!');
    equal(message, 'Hello');
  });
})();
