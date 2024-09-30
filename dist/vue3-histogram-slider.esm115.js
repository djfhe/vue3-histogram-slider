import { set as i } from "./vue3-histogram-slider.esm131.js";
function e(t, n) {
  return function() {
    var r = n.apply(this, arguments);
    if (typeof r != "function") throw new Error();
    i(this, t).ease = r;
  };
}
function a(t) {
  if (typeof t != "function") throw new Error();
  return this.each(e(this._id, t));
}
export {
  a as default
};
//# sourceMappingURL=vue3-histogram-slider.esm115.js.map
