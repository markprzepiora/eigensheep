import mkArgStr from "./internal/mk_arg_str";

/**
 * Wraps a function of any arity (including nullary) in a function that accepts exactly `n`
 * parameters. Unlike `nAry`, which passes only `n` arguments to the wrapped function,
 * functions produced by `arity` will pass all provided arguments to the wrapped function.
 *
 * @func
 * @memberOf R
 * @category Function
 * @sig (Number, (* -> *)) -> (* -> *)
 * @param {number} n The desired arity of the returned function.
 * @param {Function} fn The function to wrap.
 * @return {Function} A new function wrapping `fn`. The new function is
 *         guaranteed to be of arity `n`.
 * @example
 *
 *      var takesTwoArgs = function(a, b) {
 *        return [a, b];
 *      };
 *      takesTwoArgs.length; //=> 2
 *      takesTwoArgs(1, 2); //=> [1, 2]
 *
 *      var takesOneArg = ramda.unary(1, takesTwoArgs);
 *      takesOneArg.length; //=> 1
 *      // All arguments are passed through to the wrapped function
 *      takesOneArg(1, 2); //=> [1, 2]
 */
var arity = (function () {
    var cache = {
        0: function (func) {
            return function () {
                return func.apply(this, arguments);
            };
        },
        1: function (func) {
            return function (arg0) {
                return func.apply(this, arguments);
            };
        },
        2: function (func) {
            return function (arg0, arg1) {
                return func.apply(this, arguments);
            };
        },
        3: function (func) {
            return function (arg0, arg1, arg2) {
                return func.apply(this, arguments);
            };
        }
    };

    //     For example:
    //     cache[5] = function(func) {
    //         return function(arg0, arg1, arg2, arg3, arg4) {
    //             return func.apply(this, arguments);
    //         }
    //     };

    var makeN = function (n) {
        var fnArgs = mkArgStr(n);
        var body = [
                '    return function(' + fnArgs + ') {',
            '        return func.apply(this, arguments);',
            '    }'
        ].join('\n');
        return new Function('func', body);
    };

    return function _arity(n, fn) {
        return (cache[n] || (cache[n] = makeN(n)))(fn);
    };
}());

export default arity;
