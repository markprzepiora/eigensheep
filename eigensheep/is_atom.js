import _isArray from "./internal/is_array";

/**
 * Returns `true` if the argument is an atom; `false` otherwise. An atom is defined as any
 * value that is not an array, `undefined`, or `null`.
 *
 * @func
 * @memberOf R
 * @category Array
 * @sig a -> Boolean
 * @param {*} x The element to consider.
 * @return {boolean} `true` if `x` is an atom, and `false` otherwise.
 * @example
 *
 *      ramda.isAtom([]); //=> false
 *      ramda.isAtom(null); //=> false
 *      ramda.isAtom(undefined); //=> false
 *
 *      ramda.isAtom(0); //=> true
 *      ramda.isAtom(''); //=> true
 *      ramda.isAtom('test'); //=> true
 *      ramda.isAtom({}); //=> true
 */
export default function(x) {
    return x != null && !_isArray(x);
};
