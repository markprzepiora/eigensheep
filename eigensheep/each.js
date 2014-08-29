import curry2 from "./internal/curry2";

/**
 * Iterate over an input `list`, calling a provided function `fn` for each element in the
 * list.
 *
 * `fn` receives one argument: *(value)*.
 *
 * Note: `ramda.each` does not skip deleted or unassigned indices (sparse arrays), unlike
 * the native `Array.prototype.forEach` method. For more details on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#Description
 *
 * Also note that, unlike `Array.prototype.forEach`, Ramda's `each` returns the original
 * array.
 *
 * @static
 * @memberOf R
 * @category List
 * @param {Function} fn The function to invoke. Receives one argument, `value`.
 * @param {Array} list The list to iterate over.
 * @return {Array} The original list.
 * @example
 *
 *      ramda.each(function(num) {
 *        console.log(num + 100);
 *      }, [1, 2, 3]); //=> [1, 2, 3]
 *      //-> 101
 *      //-> 102
 *      //-> 103
 */
var each = curry2(function(fn, list) {
    var idx = -1, len = list.length;
    while (++idx < len) {
        fn(list[idx]);
    }
    // i can't bear not to return *something*
    return list;
});

export default each;
