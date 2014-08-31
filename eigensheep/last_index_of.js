import curry2 from "./internal/curry2";
import _lastIndexOf from "./internal/last_index_of";

/**
 * Returns the position of the last occurrence of an item (by strict equality) in
 * an array, or -1 if the item is not included in the array.
 *
 * @static
 * @memberOf R
 * @category List
 * @param target The item to find.
 * @param {Array} list The array to search in.
 * @return {Number} the index of the target, or -1 if the target is not found.
 *
 * @example
 *
 *      lastIndexOf(3, [-1,3,3,0,1,2,3,4]) // => 6
 *      lastIndexOf(10, [1,2,3,4]) // => -1
 */
var lastIndexOf = curry2(function(target, list) {
    return _lastIndexOf(list, target);
});

export default lastIndexOf;
