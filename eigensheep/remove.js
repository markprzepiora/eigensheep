import curry3 from "./internal/curry3";
import _concat from "./internal/concat";
import _slice from "./internal/slice";

/**
 * Removes the sub-list of `list` starting at index `start` and containing
 * `count` elements.  _Note that this is not destructive_: it returns a
 * copy of the list with the changes.
 * <small>No lists have been harmed in the application of this function.</small>
 *
 * @static
 * @memberOf R
 * @param {Number} start The position to start removing elements
 * @param {Number} count The number of elements to remove
 * @param {Array} list The list to remove from
 * @return {Array} a new Array with `count` elements from `start` removed
 * @example
 *
 *      remove(2, 3, [1,2,3,4,5,6,7,8]) // => [1,2,6,7,8]
 */
var remove = curry3(function _remove(start, count, list) {
    return _concat(
        _slice(list, 0, Math.min(start, list.length)),
        _slice(list, Math.min(list.length, start + count)));
});

export default remove;
