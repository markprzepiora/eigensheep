import _concat from "./internal/concat";

/**
 * Wrap a function inside another to allow you to make adjustments to the parameters, or do
 * other processing either before the internal function is called or with its results.
 *
 * @func
 * @memberOf R
 * @category Function
 * @param {Function} fn The function to wrap.
 * @param {Function} wrapper The wrapper function.
 * @return {Function} The wrapped function.
 * @example
 *
 *      var slashify = wrap(flip(add)('/'), function(f, x) {
 *        return match(/\/$/)(x) ? x : f(x)
 *      });
 *
 * slashify('a') //= 'a/'
 * slashify('a/') //= 'a/'
 */
export default function(fn, wrapper) {
    return function() {
        return wrapper.apply(this, _concat([fn], arguments));
    };
};
