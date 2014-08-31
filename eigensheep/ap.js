import foldl from "./foldl";
import _concat from "./internal/concat";
import _map from "./internal/map";
import curry2 from "./internal/curry2";
import checkForMethod from "./internal/check_for_method";

/**
 * ap applies a list of functions to a list of values.
 *
 * @static
 * @memberOf R
 * @category Function
 * @param {Array} fns An array of functions
 * @param {Array} vs An array of values
 * @return the value of applying each the function `fns` to each value in `vs`
 * @example
 *
 *      R.ap([R.multiply(2), R.add(3), [1,2,3]); //=> [2, 4, 6, 4, 5, 6]
 */
var ap = curry2(checkForMethod('ap', function _ap(fns, vs) {
    return foldl(function(acc, fn) {
        return _concat(acc, _map(fn, vs));
    },  [], fns);
}));

export default ap;
