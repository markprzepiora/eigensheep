import _indexOf from "./internal/index_of";

/**
 * Returns `true` if all elements are unique, otherwise `false`.
 * Uniquness is determined using strict equality (`===`).
 *
 * @func
 * @memberOf R
 * @category List
 * @param {Array} list The array to consider.
 * @return {boolean} `true` if all elements are unique, else `false`.
 * @example
 *
 *      isSet(['1', 1]); //= true
 *      isSet([1, 1]);   //= false
 *      isSet([{}, {}]); //= true
 */
export default function(list) {
    var len = list.length;
    var i = -1;
    while (++i < len) {
        if (_indexOf(list, list[i], i + 1) >= 0) {
            return false;
        }
    }
    return true;
};
