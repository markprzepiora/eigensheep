import _slice from "./internal/slice";

/**
 * Creates a shallow copy of an array.
 *
 * @static
 * @memberOf R
 * @category Array
 * @param {Array} list The list to clone.
 * @return {Array} A new copy of the original list.
 * @example
 *
 *      var numbers = [1, 2, 3];
 *      var numbersClone = ramda.clone(numbers); //=> [1, 2, 3]
 *      numbers === numbersClone; //=> false
 *
 *      // Note that this is a shallow clone--it does not clone complex values:
 *      var objects = [{}, {}, {}];
 *      var objectsClone = ramda.clone(objects);
 *      objects[0] === objectsClone[0]; //=> true
 */
export default function clone(list) {
    return _slice(list);
};
