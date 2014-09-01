import every from "./every";
import _predicateWrap from "./internal/predicate_wrap";

/**
 * Given a list of predicates returns a new predicate that will be true exactly when all of them are.
 *
 * @static
 * @memberOf R
 * @category logic
 * @param {Array} list An array of predicate functions
 * @param {*} optional Any arguments to pass into the predicates
 * @return {Function} a function that applies its arguments to each of
 *         the predicates, returning `true` if all are satisfied.
 * @example
 *
 *      gt10 = function(x) { return x > 10; };
 *      even = function(x) { return x % 2 === 0};
 *      f = allPredicates([gt10, even]);
 *      f(11) // => false
 *      f(12) // => true
 */
var allPredicates = _predicateWrap(every);

export default allPredicates;
