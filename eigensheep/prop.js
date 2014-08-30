import NO_ARGS_EXCEPTION from "./internal/no_args_exception";

/**
 * Returns a function that when supplied an object returns the indicated property of that object, if it exists.
 *
 * @static
 * @memberOf R
 * @category Object
 * @param {String} p The property name
 * @param {Object} obj The object to query
 * @return {*} The value at obj.p
 * @alias nth
 * @alias get
 * @example
 *
 *      prop('x', {x: 100}) // => 100
 *      prop('x', {}) // => undefined
 *
 *      // or via the `nth` alias:
 *
 *      var fifth = nth(4); // indexed from 0, remember
 *      fifth(['Bashful', 'Doc', 'Dopey', 'Grumpy', 'Happy', 'Sleepy', 'Sneezy']);
 *      //=> 'Happy'
 */
export default function prop(p, obj) {
    switch (arguments.length) {
        case 0: throw NO_ARGS_EXCEPTION;
        case 1: return function _prop(obj) { return obj[p]; };
    }
    return obj[p];
};
