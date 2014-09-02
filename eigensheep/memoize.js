import foldl from "./foldl";
import _slice from "./internal/slice";

/**
 * Creates a new function that, when invoked, caches the result of calling `fn` for a given
 * argument set and returns the result. Subsequent calls to the memoized `fn` with the same
 * argument set will not result in an additional call to `fn`; instead, the cached result
 * for that set of arguments will be returned.
 *
 * Note that this version of `memoize` effectively handles only string and number
 * parameters.
 *
 * @func
 * @memberOf R
 * @category Function
 * @sig (a... -> b) -> (a... -> b)
 * @param {Function} fn The function to be wrapped by `memoize`.
 * @return {Function}  Returns a memoized version of `fn`.
 * @example
 *
 *      var numberOfCalls = 0;
 *      var tracedAdd = function(a, b) {
 *        numberOfCalls += 1;
 *        return a + b;
 *      };
 *      var memoTrackedAdd = ramda.memoize(trackedAdd);
 *
 *      memoAdd(1, 2); //=> 3 (numberOfCalls => 1)
 *      memoAdd(1, 2); //=> 3 (numberOfCalls => 1)
 *      memoAdd(2, 3); //=> 5 (numberOfCalls => 2)
 *
 *      // Note that argument order matters
 *      memoAdd(2, 1); //=> 3 (numberOfCalls => 3)
 */
export default function(fn) {
    var cache = {};
    return function() {
        var position = foldl(function(cache, arg) {
                return cache[arg] || (cache[arg] = {});
            }, cache,
            _slice(arguments, 0, arguments.length - 1));
        var arg = arguments[arguments.length - 1];
        return (position[arg] || (position[arg] = fn.apply(this, arguments)));
    };
};
