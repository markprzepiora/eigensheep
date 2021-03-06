import clone from "./clone";
import curry2 from "./internal/curry2";

/**
 * Returns a copy of the list, sorted according to the comparator function, which should accept two values at a
 * time and return a negative number if the first value is smaller, a positive number if it's larger, and zero
 * if they are equal.  Please note that this is a **copy** of the list.  It does not modify the original.
 *
 * @func
 * @memberOf R
 * @param {Function} comparator A sorting function :: a -> b -> Int
 * @param {Array} list The list to sort
 * @return {Array} a new array with its elements sorted by the comparator function.
 * @example
 *
 *      sort(function(a, b) { return a - b; }, [4,2,7,5]); // => [2, 4, 5, 7];
 */
export default curry2(function sort(comparator, list) {
    return clone(list).sort(comparator);
});
