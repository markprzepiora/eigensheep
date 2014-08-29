import mkArgStr from "./internal/mk_arg_str";

/**
 * Wraps a function of any arity (including nullary) in a function that accepts exactly `n`
 * parameters. Any extraneous parameters will not be passed to the supplied function.
 *
 * @static
 * @memberOf R
 * @category Function
 * @param {number} n The desired arity of the new function.
 * @param {Function} fn The function to wrap.
 * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
 *         arity `n`.
 * @example
 *
 *      var takesTwoArgs = function(a, b) {
 *        return [a, b];
 *      };
 *      takesTwoArgs.length; //=> 2
 *      takesTwoArgs(1, 2); //=> [1, 2]
 *
 *      var takesOneArg = ramda.nAry(1, takesTwoArgs);
 *      takesOneArg.length; //=> 1
 *      // Only `n` arguments are passed to the wrapped function
 *      takesOneArg(1, 2); //=> [1, undefined]
 */
var nAry = (function () {
    var cache = {
        0: function (func) {
            return function () {
                return func.call(this);
            };
        },
        1: function (func) {
            return function (arg0) {
                return func.call(this, arg0);
            };
        },
        2: function (func) {
            return function (arg0, arg1) {
                return func.call(this, arg0, arg1);
            };
        },
        3: function (func) {
            return function (arg0, arg1, arg2) {
                return func.call(this, arg0, arg1, arg2);
            };
        }
    };


    //     For example:
    //     cache[5] = function(func) {
    //         return function(arg0, arg1, arg2, arg3, arg4) {
    //             return func.call(this, arg0, arg1, arg2, arg3, arg4);
    //         }
    //     };

    var makeN = function (n) {
        var fnArgs = mkArgStr(n);
        var body = [
                '    return function(' + fnArgs + ') {',
                '        return func.call(this' + (fnArgs ? ', ' + fnArgs : '') + ');',
            '    }'
        ].join('\n');
        return new Function('func', body);
    };

    return function _nAry(n, fn) {
        return (cache[n] || (cache[n] = makeN(n)))(fn);
    };
}());

export default nAry;
