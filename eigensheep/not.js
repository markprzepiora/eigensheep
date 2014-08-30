import _not from "./internal/not";

/**
 * A function wrapping a call to the given function in a `!` operation.  It will return `true` when the
 * underlying function would return a false-y value, and `false` when it would return a truth-y one.
 *
 * @static
 * @memberOf R
 * @category logic
 * @param {Function} f a predicate
 * @return {Function} a function that applies its arguments to `f` and logically inverts its output.
 * @example
 *
 *      gt10 = function(x) { return x > 10; };
 *      f = not(gt10);
 *      f(11) // => false
 *      f(9) // => true
 */

var not = _not;

export default not;
