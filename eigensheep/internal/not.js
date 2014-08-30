export default function _not(f) {
    return function() {
      return !f.apply(this, arguments)
    };
};
