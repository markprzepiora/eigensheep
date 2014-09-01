import curry3 from "./internal/curry3";

/**
 * Determines whether the given property of an object has a specific
 * value according to strict equality (`===`).  Most likely used to
 * filter a list:
 *
 * @func
 * @memberOf R
 * @category relation
 * @param {string|number} name The property name (or index) to use.
 * @param {*} val The value to compare the property with.
 * @return {boolean} `true` if the properties are equal, `false` otherwise.
 * @example
 *
 *      var abby = {name: 'Abby', age: 7, hair: 'blond'};
 *      var fred = {name: 'Fred', age: 12, hair: 'brown'};
 *      var rusty = {name: 'Rusty', age: 10, hair: 'brown'};
 *      var alois = {name: 'Alois', age: 15, disposition: 'surly'};
 *      var kids = [abby, fred, rusty, alois];
 *      var hasBrownHair = propEq('hair', 'brown');
 *      filter(hasBrownHair, kids); //= [fred, rusty]
 */
var propEq = curry3(function _propEq(name, val, obj) {
    return obj[name] === val;
});

export default propEq;
