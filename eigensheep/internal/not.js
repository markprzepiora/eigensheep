export default function(f) {
    return function() {
      return !f.apply(this, arguments)
    };
};
