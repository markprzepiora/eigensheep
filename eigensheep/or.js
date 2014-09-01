import curry2 from "./internal/curry2";

/**
 * A function wrapping calls to the two functions in an `||` operation, returning `true` or `false`.  Note that
 * this is short-circuited, meaning that the second function will not be invoked if the first returns a truth-y
 * value.
 *
 * @func
 * @memberOf R
 * @category logic
 * @param {Function} f a predicate
 * @param {Function} g another predicate
 * @return {Function} a function that applies its arguments to `f` and `g` and ORs their outputs together.
 * @example
 *
 *      gt10 = function(x) { return x > 10; };
 *      even = function(x) { return x % 2 === 0 };
 *      f = or(gt10, even);
 *      f(101) // => false
 *      f(8) // => true
 */
var or = curry2(function(f, g) {
    return function _or() {
        return !!(f.apply(this, arguments) || g.apply(this, arguments));
    };
});

export default or;
