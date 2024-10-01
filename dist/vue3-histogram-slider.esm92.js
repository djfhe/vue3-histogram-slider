import y, { gamma as l } from "./vue3-histogram-slider.esm100.js";
import { rgb as c } from "./vue3-histogram-slider.esm99.js";
const x = function i(a) {
  var m = l(a);
  function b(o, r) {
    var n = m((o = c(o)).r, (r = c(r)).r), p = m(o.g, r.g), u = m(o.b, r.b), f = y(o.opacity, r.opacity);
    return function(g) {
      return o.r = n(g), o.g = p(g), o.b = u(g), o.opacity = f(g), o + "";
    };
  }
  return b.gamma = i, b;
}(1);
export {
  x as default
};
//# sourceMappingURL=vue3-histogram-slider.esm92.js.map
