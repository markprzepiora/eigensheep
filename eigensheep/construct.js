import constructN from "./construct_n";

/**
 * Wraps a constructor function inside a curried function that can be called with the same
 * arguments and returns the same type.
 *
 * NOTE: Does not work with some built-in objects such as Date.
 *
 * @func
 * @memberOf R
 * @category Function
 * @param {Function} Fn The constructor function to wrap.
 * @return {Function} A wrapped, curried constructor function.
 * @example
 *
 *      // Constructor function
 *      var Widget = function(config) {
 *        // ...
 *      };
 *      Widget.prototype = {
 *        // ...
 *      };
 *      map(construct(Widget), allConfigs); //=> a list of Widgets
 */
export default function construct(Fn) {
    return constructN(Fn.length, Fn);
};
