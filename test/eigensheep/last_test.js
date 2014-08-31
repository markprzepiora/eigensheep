(function() {
  module("R.last");

  var last = require('eigensheep/last')['default'];

  test("returns the last element of an array", function() {
    equal(last([1, 2, 3]), 3);
  });

  test("returns the last letter of a string", function() {
    equal(last('foobarbaz'), 'z');
  });

  test("returns undefined for an empty array", function() {
    equal(last([]), undefined);
  });

  test("returns undefined for an empty string", function() {
    equal(last(''), undefined);
  });

  test("returns undefined for a number", function() {
    equal(last(1), undefined);
  });

  test("returns undefined for null", function() {
    equal(last(null), undefined);
  });
})();
