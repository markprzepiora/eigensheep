import invoker from "./invoker";

/**
 * Returns the elements from `xs` starting at `a` and ending at `b - 1`.
 *
 * @static
 * @memberOf R
 * @category List
 * @param {number} a The starting index.
 * @param {number} b One more than the ending index.
 * @param {Array} xs The list to take elements from.
 * @return {Array} The items from `a` to `b - 1` from `xs`.
 * @example
 *
 *      var xs = range(0, 10);
 *      slice(2, 5)(xs); //= [2, 3, 4]
 */
var slice = invoker('slice', Array.prototype);

export default slice;
