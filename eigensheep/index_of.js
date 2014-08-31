import curry2 from "./internal/curry2";
import _indexOf from "./internal/index_of";

/**
 * Returns the position of the first occurrence of an item in an array
 * (by strict equality),
 * or -1 if the item is not included in the array.
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
 *      indexOf(3, [1,2,3,4]) // => 2
 *      indexOf(10, [1,2,3,4]) // => -1
 */
var indexOf = curry2(function(target, list) {
    return _indexOf(list, target);
});

export default indexOf;
