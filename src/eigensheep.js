import map from "./map";
import concat from "./concat";
import curry from "./curry";
import nAry from "./n_ary";
import unary from "./unary";
import binary from "./binary";
import arity from "./arity";
import invoker from "./invoker";

var eigensheep = {
  map:     map,
  concat:  concat,
  curry:   curry,
  nAry:    nAry,
  unary:   unary,
  binary:  binary,
  arity:   arity,
  invoker: invoker
};

this.El = eigensheep;
