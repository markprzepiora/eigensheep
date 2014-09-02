import _isArray from "./is_array";

/**
 * Tests whether or not an object is similar to an array.
 *
 * @private
 * @category Internal
 * @param {*} val The object to test.
 * @return {boolean} `true` if `val` has a numeric length property; `false` otherwise.
 * @example
 *
 *      isArrayLike([]); //=> true
 *      isArrayLike(true); //=> false
 *      isArrayLike({}); //=> false
 *      isArrayLike({length: 10}); //=> true
 */
export default function(x) {
    return _isArray(x) || (
        !!x &&
        typeof x === 'object' &&
        !(x instanceof String) &&
        (
            !!(x.nodeType === 1 && x.length) ||
            x.length >= 0
        )
    );
};
