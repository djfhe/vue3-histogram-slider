import e from "./vue3-histogram-slider.esm91.js";
import { genericArray as f } from "./vue3-histogram-slider.esm92.js";
import a from "./vue3-histogram-slider.esm93.js";
import i from "./vue3-histogram-slider.esm80.js";
import p from "./vue3-histogram-slider.esm94.js";
import u from "./vue3-histogram-slider.esm95.js";
import c from "./vue3-histogram-slider.esm96.js";
import s, { isNumberArray as l } from "./vue3-histogram-slider.esm97.js";
import n from "./vue3-histogram-slider.esm98.js";
function O(m, r) {
  var o = typeof r, t;
  return r == null || o === "boolean" ? c(r) : (o === "number" ? i : o === "string" ? (t = n(r)) ? (r = t, e) : u : r instanceof n ? e : r instanceof Date ? a : l(r) ? s : Array.isArray(r) ? f : typeof r.valueOf != "function" && typeof r.toString != "function" || isNaN(r) ? p : i)(m, r);
}
export {
  O as default
};
//# sourceMappingURL=vue3-histogram-slider.esm81.js.map
