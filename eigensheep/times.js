import curry2 from "./internal/curry2";

/**
 * Calls an input function `n` times, returning an array containing the results of those
 * function calls.
 *
 * `fn` is passed one argument: The current value of `n`, which begins at `0` and is
 * gradually incremented to `n - 1`.
 *
 * @func
 * @memberOf R
 * @category List
 * @sig (i -> a) -> i -> [a]
 * @param {Function} fn The function to invoke. Passed one argument, the current value of `n`.
 * @param {number} n A value between `0` and `n - 1`. Increments after each function call.
 * @return {Array} An array containing the return values of all calls to `fn`.
 * @example
 *
 *      ramda.times(function(n) { return n; }, 5); //=> [0, 1, 2, 3, 4]
 */
var times = curry2(function _times(fn, n) {
    var arr = new Array(n);
    var i = -1;
    while (++i < n) {
        arr[i] = fn(i);
    }
    return arr;
});

export default times;
