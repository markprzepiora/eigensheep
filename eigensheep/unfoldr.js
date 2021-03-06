import curry2 from "./internal/curry2";

/**
 * Builds a list from a seed value. Accepts an iterator function, which returns either false
 * to stop iteration or an array of length 2 containing the value to add to the resulting
 * list and the seed to be used in the next call to the iterator function.
 *
 * The iterator function receives one argument: *(seed)*.
 *
 * @func
 * @memberOf R
 * @category List
 * @param {Function} fn The iterator function. receives one argument, `seed`, and returns
 *        either false to quit iteration or an array of length two to proceed. The element
 *        at index 0 of this array will be added to the resulting array, and the element
 *        at index 1 will be passed to the next call to `fn`.
 * @param {*} seed The seed value.
 * @return {Array} The final list.
 * @example
 *
 *      var f = function(n) { return n > 50 ? false : [-n, n + 10] };
 *      unfoldr(f, 10) //= [-10, -20, -30, -40, -50]
 */
export default curry2(function _unfoldr(fn, seed) {
    var pair = fn(seed);
    var result = [];
    while (pair && pair.length) {
        result.push(pair[0]);
        pair = fn(pair[1]);
    }
    return result;
});
