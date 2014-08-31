import hasMethod from "./internal/has_method";

/**
 * `empty` wraps any object in an array. This implementation is compatible with the
 * Fantasy-land Monoid spec, and will work with types that implement that spec.
 *
 * @static
 * @memberOf R
 * @category Function
 * @return {Array} an empty array
 * @example
 *
 * R.empty([1,2,3,4,5]); // => []
 */
export default function empty(x) {
    return (hasMethod('empty', x)) ? x.empty() : [];
};
