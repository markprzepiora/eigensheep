import curry2 from "./internal/curry2";

/**
 * Returns `true` if all elements of the list match the predicate, `false` if there are any
 * that don't.
 *
 * @func
 * @memberOf R
 * @category List
 * @param {Function} fn The predicate function.
 * @param {Array} list The array to consider.
 * @return {boolean} `true` if the predicate is satisfied by every element, `false`
 *         otherwise
 * @example
 *
 *      var lessThan2 = flip(lt)(2);
 *      var lessThan3 = flip(lt)(3);
 *      var xs = range(1, 3); //= [1, 2]
 *      every(lessThan2)(xs); //= false
 *      every(lessThan3)(xs); //= true
 */
var every = curry2(function(fn, list) {
    var i = -1;
    while (++i < list.length) {
        if (!fn(list[i])) {
            return false;
        }
    }
    return true;
});

export default every;
