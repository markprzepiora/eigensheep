import NO_ARGS_EXCEPTION from "./internal/no_args_exception";
import _slice from "./internal/slice";
import _concat from "./internal/concat";

/**
 * Returns a new function much like the supplied one, except that the first two arguments'
 * order is reversed.
 *
 * @func
 * @memberOf R
 * @category Function
 * @param {Function} fn The function to invoke with its first two parameters reversed.
 * @return {*} The result of invoking `fn` with its first two parameters' order reversed.
 * @example
 *
 *      var mergeThree = function(a, b, c) {
 *        ([]).concat(a, b, c);
 *      };
 *      var numbers = [1, 2, 3];
 *
 *      mergeThree(numbers); //=> [1, 2, 3]
 *
 *      ramda.flip([1, 2, 3]); //=> [2, 1, 3]
 */
export default function flip(fn) {
    return function(a, b) {
        switch (arguments.length) {
            case 0: throw NO_ARGS_EXCEPTION;
            case 1: return function(b) { return fn.apply(this, [b, a].concat(_slice(arguments, 1))); };
            default: return fn.apply(this, _concat([b, a], _slice(arguments, 2)));
        }
    };
};
