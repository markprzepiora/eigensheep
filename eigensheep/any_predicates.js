import some from "./some";
import _predicateWrap from "./internal/predicate_wrap";

/**
 * Given a list of predicates returns a new predicate that will be true exactly when any one of them is.
 *
 * @static
 * @memberOf R
 * @category logic
 * @param {Array} list An array of predicate functions
 * @param {*} optional Any arguments to pass into the predicates
 * @return {Function}  a function that applies its arguments to each of the predicates, returning
 *                   `true` if all are satisfied..
 * @example
 *
 *      gt10 = function(x) { return x > 10; };
 *      even = function(x) { return x % 2 === 0};
 *      f = allPredicates([gt10, even]);
 *      f(11) // => true
 *      f(8) // => true
 *      f(9) // => false
 */
var anyPredicates = _predicateWrap(some);

export default anyPredicates;
