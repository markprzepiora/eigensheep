import _map from "./internal/map";
import curry2 from "./internal/curry2";
import checkForMethod from "./internal/check_for_method";

/**
 * Returns a new list, constructed by applying the supplied function to every element of the
 * supplied list.
 *
 * Note: `ramda.map` does not skip deleted or unassigned indices (sparse arrays), unlike the
 * native `Array.prototype.map` method. For more details on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#Description
 *
 * @static
 * @memberOf R
 * @category List
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {Array} list The list to be iterated over.
 * @return {Array} The new list.
 * @example
 *
 *      var double = function(x) {
 *        return x * 2;
 *      };
 *
 *      ramda.map(double, [1, 2, 3]); //=> [2, 4, 6]
 */
var map = curry2(checkForMethod('map', _map));

export default map;
