import { get as n, set as i } from "./vue3-histogram-slider.esm131.js";
function r(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    i(this, e).ease = t;
  };
}
function s(e) {
  var t = this._id;
  return arguments.length ? this.each(r(t, e)) : n(this.node(), t).ease;
}
export {
  s as default
};
//# sourceMappingURL=vue3-histogram-slider.esm114.js.map
