import curry2 from "./internal/curry2";
import curry3 from "./internal/curry3";
import _indexOf from "./internal/index_of";

/**
 * Returns the position of the first occurrence of an item in an array
 * (by strict equality),
 * or -1 if the item is not included in the array.
 *
 * @func
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

/**
 * Returns the position of the first occurrence of an item (by strict equality) in
 * an array, or -1 if the item is not included in the array. However,
 * `indexOf.from` will only search the tail of the array, starting from the
 * `fromIdx` parameter.
 *
 * @func
 * @memberOf R
 * @category List
 * @param target The item to find.
 * @param {Array} list The array to search in.
 * @param {Number} fromIdx the index to start searching from
 * @return {Number} the index of the target, or -1 if the target is not found.
 *
 * @example
 *
 *      indexOf.from(3, 2, [-1,0,1,2,3,4]) // => 4
 *      indexOf.from(10, 2, [1,2,3,4]) // => -1
 */
indexOf.from = curry3(function indexOfFrom(target, fromIdx, list) {
    return _indexOf(list, target, fromIdx);
});

export default indexOf;
