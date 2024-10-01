import { tickStep as s } from "./vue3-histogram-slider.esm16.js";
import c from "./vue3-histogram-slider.esm17.js";
import e from "./vue3-histogram-slider.esm18.js";
import p from "./vue3-histogram-slider.esm19.js";
import l from "./vue3-histogram-slider.esm20.js";
import { formatPrefix as u, format as h } from "./vue3-histogram-slider.esm21.js";
function d(r, t, i, a) {
  var n = s(r, t, i), o;
  switch (a = c(a ?? ",f"), a.type) {
    case "s": {
      var m = Math.max(Math.abs(r), Math.abs(t));
      return a.precision == null && !isNaN(o = l(n, m)) && (a.precision = o), u(a, m);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      a.precision == null && !isNaN(o = p(n, Math.max(Math.abs(r), Math.abs(t)))) && (a.precision = o - (a.type === "e"));
      break;
    }
    case "f":
    case "%": {
      a.precision == null && !isNaN(o = e(n)) && (a.precision = o - (a.type === "%") * 2);
      break;
    }
  }
  return h(a);
}
export {
  d as default
};
//# sourceMappingURL=vue3-histogram-slider.esm15.js.map
