import { formatDecimalParts as f } from "./vue3-histogram-slider.esm101.js";
var m;
function l(a, i) {
  var e = f(a, i);
  if (!e) return a + "";
  var t = e[0], o = e[1], r = o - (m = Math.max(-8, Math.min(8, Math.floor(o / 3))) * 3) + 1, n = t.length;
  return r === n ? t : r > n ? t + new Array(r - n + 1).join("0") : r > 0 ? t.slice(0, r) + "." + t.slice(r) : "0." + new Array(1 - r).join("0") + f(a, Math.max(0, i + r - 1))[0];
}
export {
  l as default,
  m as prefixExponent
};
//# sourceMappingURL=vue3-histogram-slider.esm90.js.map
