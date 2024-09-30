import e from "./vue3-histogram-slider.esm35.js";
import { genericArray as a } from "./vue3-histogram-slider.esm36.js";
import f from "./vue3-histogram-slider.esm37.js";
import i from "./vue3-histogram-slider.esm38.js";
import p from "./vue3-histogram-slider.esm39.js";
import u from "./vue3-histogram-slider.esm40.js";
import c from "./vue3-histogram-slider.esm41.js";
import l, { isNumberArray as s } from "./vue3-histogram-slider.esm42.js";
import n from "./vue3-histogram-slider.esm30.js";
function D(m, r) {
  var o = typeof r, t;
  return r == null || o === "boolean" ? c(r) : (o === "number" ? i : o === "string" ? (t = n(r)) ? (r = t, e) : u : r instanceof n ? e : r instanceof Date ? f : s(r) ? l : Array.isArray(r) ? a : typeof r.valueOf != "function" && typeof r.toString != "function" || isNaN(r) ? p : i)(m, r);
}
export {
  D as default
};
//# sourceMappingURL=vue3-histogram-slider.esm34.js.map
