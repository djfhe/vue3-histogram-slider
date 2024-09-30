import { Selection as s } from "./vue3-histogram-slider.esm64.js";
import c from "./vue3-histogram-slider.esm63.js";
function v(t) {
  typeof t != "function" && (t = c(t));
  for (var i = this._groups, l = i.length, a = new Array(l), r = 0; r < l; ++r)
    for (var n = i[r], _ = n.length, o = a[r] = [], e, f = 0; f < _; ++f)
      (e = n[f]) && t.call(e, e.__data__, f, n) && o.push(e);
  return new s(a, this._parents);
}
export {
  v as default
};
//# sourceMappingURL=vue3-histogram-slider.esm69.js.map
