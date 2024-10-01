import { tickIncrement as c } from "./vue3-histogram-slider.esm65.js";
function r(i, l, n) {
  let f;
  for (; ; ) {
    const e = c(i, l, n);
    if (e === f || e === 0 || !isFinite(e))
      return [i, l];
    e > 0 ? (i = Math.floor(i / e) * e, l = Math.ceil(l / e) * e) : e < 0 && (i = Math.ceil(i * e) / e, l = Math.floor(l * e) / e), f = e;
  }
}
export {
  r as default
};
//# sourceMappingURL=vue3-histogram-slider.esm64.js.map
