import { Selection as e } from "./vue3-histogram-slider.esm16.js";
import h from "./vue3-histogram-slider.esm75.js";
import _ from "./vue3-histogram-slider.esm52.js";
function p(r) {
  return function() {
    return h(r.apply(this, arguments));
  };
}
function s(r) {
  typeof r == "function" ? r = p(r) : r = _(r);
  for (var l = this._groups, m = l.length, o = [], i = [], n = 0; n < m; ++n)
    for (var a = l[n], u = a.length, t, f = 0; f < u; ++f)
      (t = a[f]) && (o.push(r.call(t, t.__data__, f, a)), i.push(t));
  return new e(o, i);
}
export {
  s as default
};
//# sourceMappingURL=vue3-histogram-slider.esm18.js.map
