(function() {
  module("R.foldr");

  var foldr = require('eigensheep/foldr')['default'];
  var reduceRight = require('eigensheep/reduce_right')['default'];

  test("it is just an alias for reduceRight", function() {
    equal(foldr, reduceRight);
  });
})();
