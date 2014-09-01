/**
 * Internal implementation of `indexOf`.
 * Returns the position of the first occurrence of an item in an array
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
export default function indexOf(array, item, from) {
    var i = 0, length = array.length;
    if (typeof from == 'number') {
        i = from < 0 ? Math.max(0, length + from) : from;
    }
    for (; i < length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
    return -1;
};
