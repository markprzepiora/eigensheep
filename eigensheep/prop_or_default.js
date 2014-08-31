import hasOwnProperty from "./internal/has_own_property";
import curry3 from "./internal/curry3";

/**
 * If the given object has an own property with the specified name,
 * returns the value of that property.
 * Otherwise returns the provided default value.
 *
 * @static
 * @memberOf R
 * @category Object
 * @param {String} p The name of the property to return.
 * @param {*} val The default value.
 * @returns {*} The value of given property or default value.
 * @example
 *
 *      var alice = {
 *        name: 'ALICE',
 *        age: 101
 *      };
 *      var favorite = prop('favoriteLibrary');
 *      var favoriteWithDefault = propOrDefault('favoriteLibrary', 'Ramda');
 *
 *      favorite(alice);  //=> undefined
 *      favoriteWithDefault(alice);  //=> 'Ramda'
 */
var propOrDefault = curry3(function _propOrDefault(p, val, obj) {
    return hasOwnProperty.call(obj, p) ? obj[p] : val;
});

export default propOrDefault;
