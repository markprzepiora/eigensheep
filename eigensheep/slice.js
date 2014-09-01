import invoker from "./invoker";
import flip from "./flip";

/**
 * Returns the elements from `xs` starting at `a` and ending at `b - 1`.
 *
 * @func
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

/**
 * Returns the elements from `xs` starting at `a` going to the end of `xs`.
 *
 * @func
 * @memberOf R
 * @category List
 * @param {number} a The starting index.
 * @param {Array} xs The list to take elements from.
 * @return {Array} The items from `a` to the end of `xs`.
 * @example
 *
 *      var xs = range(0, 10);
 *      slice.from(2)(xs); //= [2, 3, 4, 5, 6, 7, 8, 9]
 *
 *      var ys = range(4, 8);
 *      var tail = slice.from(1);
 *      tail(xs); //= [5, 6, 7]
 */
slice.from = flip(slice)(void 0);

export default slice;
