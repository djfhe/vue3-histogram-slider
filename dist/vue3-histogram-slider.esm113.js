import { get as o, set as i } from "./vue3-histogram-slider.esm131.js";
function r(n, t) {
  return function() {
    i(this, n).duration = +t.apply(this, arguments);
  };
}
function u(n, t) {
  return t = +t, function() {
    i(this, n).duration = t;
  };
}
function s(n) {
  var t = this._id;
  return arguments.length ? this.each((typeof n == "function" ? r : u)(t, n)) : o(this.node(), t).duration;
}
export {
  s as default
};
//# sourceMappingURL=vue3-histogram-slider.esm113.js.map
