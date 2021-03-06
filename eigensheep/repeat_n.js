import curry2 from "./internal/curry2";
import times from "./times";
import always from "./always";

/**
 * Returns a fixed list of size `n` containing a specified identical value.
 *
 * @func
 * @memberOf R
 * @category Array
 * @sig a -> n -> [a]
 * @param {*} value The value to repeat.
 * @param {number} n The desired size of the output list.
 * @return {Array} A new array containing `n` `value`s.
 * @example
 *
 *      ramda.repeatN('hi', 5); //=> ['hi', 'hi', 'hi', 'hi', 'hi']
 *
 *      var obj = {};
 *      var repeatedObjs = ramda.repeatN(obj, 5); //=> [{}, {}, {}, {}, {}]
 *      repeatedObjs[0] === repeatedObjs[1]; //=> true
 */
export default curry2(function _repeatN(value, n) {
    return times(always(value), n);
});
