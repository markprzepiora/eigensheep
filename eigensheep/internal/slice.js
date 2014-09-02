/**
 * An optimized, private array `slice` implementation.
 *
 * @private
 * @category Internal
 * @param {Arguments|Array} args The array or arguments object to consider.
 * @param {number} [from=0] The array index to slice from, inclusive.
 * @param {number} [to=args.length] The array index to slice to, exclusive.
 * @return {Array} A new, sliced array.
 * @example
 *
 *      _slice([1, 2, 3, 4, 5], 1, 3); //=> [2, 3]
 *
 *      var firstThreeArgs = function(a, b, c, d) {
 *        return _slice(arguments, 0, 3);
 *      };
 *      firstThreeArgs(1, 2, 3, 4); //=> [1, 2, 3]
 */
export default function(args, from, to) {
    from = (typeof from === 'number') ? from : 0;
    to = (typeof to === 'number') ? to : args.length;
    var length = to - from,
        arr = new Array(length),
        i = -1;

    while (++i < length) {
        arr[i] = args[from + i];
    }
    return arr;
}
