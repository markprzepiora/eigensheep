import curry from "./curry";

/**
 * Turns a named method of an object (or object prototype) into a function that can be
 * called directly. Passing the optional `len` parameter restricts the returned function to
 * the initial `len` parameters of the method.
 *
 * The returned function is curried and accepts `len + 1` parameters (or `method.length + 1`
 * when `len` is not specified), and the final parameter is the target object.
 *
 * @static
 * @memberOf R
 * @category Function
 * @param {string} name The name of the method to wrap.
 * @param {Object} obj The object to search for the `name` method.
 * @param [len] The desired arity of the wrapped method.
 * @return {Function} A new function or `undefined` if the specified method is not found.
 * @example
 *
 *      var charAt = ramda.invoker('charAt', String.prototype);
 *      charAt(6, 'abcdefghijklm'); //=> 'g'
 *
 *      var join = ramda.invoker('join', Array.prototype);
 *      var firstChar = charAt(0);
 *      join('', ramda.map(firstChar, ['light', 'ampliifed', 'stimulated', 'emission', 'radiation']));
 *      //=> 'laser'
 */
export default function _invoker(name, obj, len) {
    var method = obj[name];
    var length = len === void 0 ? method.length : len;
    return method && curry(function() {
        if (arguments.length) {
            var target = Array.prototype.pop.call(arguments);
            var targetMethod = target[name];
            if (targetMethod == method) {
                return targetMethod.apply(target, arguments);
            }
        }
    }, length + 1);
};
