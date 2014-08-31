import _indexOf from "./internal/index_of";

/**
 * Returns `true` if all elements are unique, otherwise `false`.
 * Uniquness is determined using strict equality (`===`).
 *
 * @static
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
export default function isSet(list) {
    var len = list.length;
    var i = -1;
    while (++i < len) {
        if (_indexOf(list, list[i], i + 1) >= 0) {
            return false;
        }
    }
    return true;
};
