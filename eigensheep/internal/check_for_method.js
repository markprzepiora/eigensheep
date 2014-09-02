import isArray from "./is_array";

/**
 * Similar to hasMethod, this checks whether a function has a [methodname]
 * function. If it isn't an array it will execute that function otherwise it will
 * default to the ramda implementation.
 *
 * @private
 * @category Internal
 * @param {Function} func ramda implemtation
 * @param {String} methodname property to check for a custom implementation
 * @return {Object} whatever the return value of the method is
 */
export default function(methodname, func) {
    return function(a, b, c) {
        var length = arguments.length;
        var obj = arguments[length - 1],
            callBound = obj && !isArray(obj) && typeof obj[methodname] === 'function';
        switch (arguments.length) {
            case 0: return func();
            case 1: return callBound ? obj[methodname]() : func(a);
            case 2: return callBound ? obj[methodname](a) : func(a, b);
            case 3: return callBound ? obj[methodname](a, b) : func(a, b, c);
        }
    };
}
