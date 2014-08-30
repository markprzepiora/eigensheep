import _isArrayLike from "./is_array_like";

/**
 * `makeFlat` is a helper function that returns a one-level or fully recursive function
 * based on the flag passed in.
 *
 * @private
 */
// TODO: document, even for internals...
export default function makeFlat(recursive) {
    return function __flatt(list) {
        var array, value, result = [], val, i = -1, j, ilen = list.length, jlen;
        while (++i < ilen) {
            array = list[i];
            if (_isArrayLike(array)) {
                value = (recursive) ? __flatt(array) : array;
                j = -1;
                jlen = value.length;
                while (++j < jlen) {
                    result.push(value[j]);
                }
            } else {
                result.push(array);
            }
        }
        return result;
    };
};
