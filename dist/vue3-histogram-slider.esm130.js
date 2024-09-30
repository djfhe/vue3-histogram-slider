import { STARTING as u, ENDING as s, ENDED as c } from "./vue3-histogram-slider.esm131.js";
function o(e, i) {
  var r = e.__transition, t, a, n = !0, l;
  if (r) {
    i = i == null ? null : i + "";
    for (l in r) {
      if ((t = r[l]).name !== i) {
        n = !1;
        continue;
      }
      a = t.state > u && t.state < s, t.state = c, t.timer.stop(), t.on.call(a ? "interrupt" : "cancel", e, e.__data__, t.index, t.group), delete r[l];
    }
    n && delete e.__transition;
  }
}
export {
  o as default
};
//# sourceMappingURL=vue3-histogram-slider.esm130.js.map
