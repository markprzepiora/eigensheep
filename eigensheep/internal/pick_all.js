// TODO: Are we okay with internal functions depending on exported functions?
import each from "../each";

/**
 * Internal implementation of `pickAll`
 *
 * @private
 * @see pickAll
 */
// TODO: document, even for internals...
export default function _pickAll(names, obj) {
    var copy = {};
    each(function (name) {
        copy[name] = obj[name];
    }, names);
    return copy;
};
