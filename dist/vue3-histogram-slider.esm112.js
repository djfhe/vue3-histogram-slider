import { get as e, init as i } from "./vue3-histogram-slider.esm131.js";
function o(n, t) {
  return function() {
    i(this, n).delay = +t.apply(this, arguments);
  };
}
function r(n, t) {
  return t = +t, function() {
    i(this, n).delay = t;
  };
}
function s(n) {
  var t = this._id;
  return arguments.length ? this.each((typeof n == "function" ? o : r)(t, n)) : e(this.node(), t).delay;
}
export {
  s as default
};
//# sourceMappingURL=vue3-histogram-slider.esm112.js.map
