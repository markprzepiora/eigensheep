import curry2 from "./internal/curry2";
import _containsWith from "./internal/contains_with";

/**
 * Returns a new list containing only one copy of each element in the original list, based
 * upon the value returned by applying the supplied predicate to two list elements. Prefers
 * the first item if two items compare equal based on the predicate.
 *
 * @func
 * @memberOf R
 * @category List
 * @param {Array} list The array to consider.
 * @return {Array} The list of unique items.
 * @example
 *
 * var strEq = function(a, b) { return ('' + a) === ('' + b) };
 * uniqWith(strEq)([1, '1', 2, 1]); //= [1, 2]
 * uniqWith(strEq)([{}, {}]);       //= [{}]
 * uniqWith(strEq)([1, '1', 1]);    //= [1]
 * uniqWith(strEq)(['1', 1, 1]);    //= ['1']
 */
export default curry2(function _uniqWith(pred, list) {
    var idx = -1, len = list.length;
    var result = [], item;
    while (++idx < len) {
        item = list[idx];
        if (!_containsWith(pred, item, result)) {
            result.push(item);
        }
    }
    return result;
});
