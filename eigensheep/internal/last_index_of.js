/**
 * Internal implementation of `lastIndexOf`.
 * Returns the position of the last occurrence of an item in an array
 * (by strict equality),
 * or -1 if the item is not included in the array.
 *
 * @private
 * @category Internal
 * @param {Array} The array to search
 * @param item the item to find in the Array
 * @param {Number} from (optional) the index to start searching the Array
 * @return {Number} the index of the found item, or -1
 *
 */
export default function _lastIndexOf(array, item, from) {
    var idx = array.length;
    if (typeof from == 'number') {
        idx = from < 0 ? idx + from + 1 : Math.min(idx, from + 1);
    }
    while (--idx >= 0) {
        if (array[idx] === item) return idx;
    }
    return -1;
};
