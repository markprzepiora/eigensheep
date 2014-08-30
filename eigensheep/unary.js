import nAry from "./n_ary";

/**
 * Wraps a function of any arity (including nullary) in a function that accepts exactly 1
 * parameter. Any extraneous parameters will not be passed to the supplied function.
 *
 * @static
 * @memberOf R
 * @category Function
 * @param {Function} fn The function to wrap.
 * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
 *         arity 1.
 * @example
 *
 *      var takesTwoArgs = function(a, b) {
 *        return [a, b];
 *      };
 *      takesTwoArgs.length; //=> 2
 *      takesTwoArgs(1, 2); //=> [1, 2]
 *
 *      var takesOneArg = ramda.unary(takesTwoArgs);
 *      takesOneArg.length; //=> 1
 *      // Only 1 argument is passed to the wrapped function
 *      takesOneArg(1, 2); //=> [1, undefined]
 */
export default function _unary(fn) {
    return nAry(1, fn);
};
