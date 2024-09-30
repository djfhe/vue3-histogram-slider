import y, { gamma as e } from "./vue3-histogram-slider.esm46.js";
import { rgb as c } from "./vue3-histogram-slider.esm30.js";
const x = function a(b) {
  var g = e(b);
  function i(o, r) {
    var n = g((o = c(o)).r, (r = c(r)).r), p = g(o.g, r.g), u = g(o.b, r.b), f = y(o.opacity, r.opacity);
    return function(m) {
      return o.r = n(m), o.g = p(m), o.b = u(m), o.opacity = f(m), o + "";
    };
  }
  return i.gamma = a, i;
}(1);
export {
  x as default
};
//# sourceMappingURL=vue3-histogram-slider.esm35.js.map
