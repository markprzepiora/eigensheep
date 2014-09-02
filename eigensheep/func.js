import NO_ARGS_EXCEPTION from "./internal/no_args_exception";
import _slice from "./internal/slice";

/**
 * Calls the specified function on the supplied object. Any additional arguments
 * after `fn` and `obj` are passed in to `fn`. If no additional arguments are passed to `func`,
 * `fn` is invoked with no arguments.
 *
 * @func
 * @memberOf R
 * @category Object
 * @param {String} fn The name of the property mapped to the function to invoke
 * @param {Object} obj The object
 * @return {*} The value of invoking `obj.fn`
 * @example
 *
 *      func('add', R, 1, 2) // => 3
 *
 *      var obj = { f: function() { return 'f called'; } };
 *      func('f', obj); // => 'f called'
 */
export default function(fn, obj) { // TODO: change param name: reserve `fn` for functions, not names?
    switch (arguments.length) {
        case 0: throw NO_ARGS_EXCEPTION;
        case 1: return function(obj) { return obj[fn].apply(obj, _slice(arguments, 1)); };
        default: return obj[fn].apply(obj, _slice(arguments, 2));
    }
};
