import map from "./map";
import concat from "./concat";
import curry from "./curry";
import nAry from "./n_ary";
import unary from "./unary";
import binary from "./binary";

var eigensheep = {
  map:    map,
  concat: concat,
  curry:  curry,
  nAry:   nAry,
  unary:  unary,
  binary: binary
};

this.El = eigensheep;
