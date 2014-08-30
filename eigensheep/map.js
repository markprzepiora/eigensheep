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

/**
 * Like `map`, but but passes additional parameters to the predicate function.
 *
 * `fn` receives three arguments: *(value, index, list)*.
 *
 * Note: `ramda.map.idx` does not skip deleted or unassigned indices (sparse arrays), unlike
 * the native `Array.prototype.map` method. For more details on this behavior, see:
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
 *      var squareEnds = function(elt, idx, list) {
 *        if (idx === 0 || idx === list.length - 1) {
 *          return elt * elt;
 *        }
 *        return elt;
 *      };
 *
 *      ramda.map.idx(squareEnds, [8, 6, 7, 5, 3, 0, 9];
 *      //=> [64, 6, 7, 5, 3, 0, 81]
 */
map.idx = curry2(checkForMethod('map', function _mapIdx(fn, list) {
    var idx = -1, len = list.length, result = new Array(len);
    while (++idx < len) {
        result[idx] = fn(list[idx], idx, list);
    }
    return result;
}));

export default map;
