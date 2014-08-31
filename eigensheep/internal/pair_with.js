// TODO: Not sure how much I like a dependency on a public function in internal?
import map from "../map";

/**
 * @private
 * @param {Function} fn The strategy for extracting keys from an object
 * @return {Function} A function that takes an object and returns an array of
 *                    key-value arrays.
 */
export default function pairWith(fn) {
    return function(obj) {
        return map(function(key) { return [key, obj[key]]; }, fn(obj));
    };
};
