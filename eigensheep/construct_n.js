import curry from "./curry";
import nAry from "./n_ary";

/**
 * Wraps a constructor function inside a curried function that can be called with the same
 * arguments and returns the same type. The arity of the function returned is specified
 * to allow using variadic constructor functions.
 *
 * NOTE: Does not work with some built-in objects such as Date.
 *
 * @func
 * @memberOf R
 * @category Function
 * @param {number} n The arity of the constructor function.
 * @param {Function} Fn The constructor function to wrap.
 * @return {Function} A wrapped, curried constructor function.
 * @example
 *
 *      // Variadic constructor function
 *      var Widget = function() {
 *        this.children = Array.prototype.slice.call(arguments);
 *        // ...
 *      };
 *      Widget.prototype = {
 *        // ...
 *      };
 *      map(constructN(1, Widget), allConfigs); //=> a list of Widgets
 */
export default function constructN(n, Fn) {
    var f = function() {
        var Temp = function() {}, inst, ret;
        Temp.prototype = Fn.prototype;
        inst = new Temp();
        ret = Fn.apply(inst, arguments);
        return Object(ret) === ret ? ret : inst;
    };
    return n > 1 ? curry(nAry(n, f)) : f;
};
