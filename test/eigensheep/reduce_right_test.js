(function() {
  module("R.reduceRight");

  var foldr = require('eigensheep/foldr')['default'];
  var reduceRight = require('eigensheep/reduce_right')['default'];

  test("it is just an alias for foldr", function() {
    equal(foldr, reduceRight);
  });
})();
