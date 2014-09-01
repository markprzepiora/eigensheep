import prop from "./prop";
import flip from "./flip";

/**
 * Returns the value at the specified property.
 * The only difference from `prop` is the parameter order.
 *
 * @func
 * @memberOf R
 * @see prop
 * @category Object
 * @param {Object} obj The object to query
 * @param {String} prop The property name
 * @return {*} The value at obj.p
 * @example
 *
 *      prop({x: 100}, 'x'); // => 100
 */
var props = flip(prop);

export default props;
