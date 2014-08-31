(function() {
  module("R.head");

  var head = require('eigensheep/head')['default'];

  test("returns the first element of an array", function() {
    equal(head([1, 2, 3]), 1);
  });

  test("returns the first letter of a string", function() {
    equal(head('foobarbaz'), 'f');
  });

  test("returns undefined for an empty array", function() {
    equal(head([]), undefined);
  });

  test("returns undefined for an empty string", function() {
    equal(head(''), undefined);
  });

  test("returns undefined for a number", function() {
    equal(head(1), undefined);
  });

  test("returns undefined for null", function() {
    equal(head(null), undefined);
  });
})();
