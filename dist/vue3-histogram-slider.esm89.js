import i from "./vue3-histogram-slider.esm101.js";
import a from "./vue3-histogram-slider.esm90.js";
import r from "./vue3-histogram-slider.esm102.js";
const d = {
  "%": (o, t) => (o * 100).toFixed(t),
  b: (o) => Math.round(o).toString(2),
  c: (o) => o + "",
  d: i,
  e: (o, t) => o.toExponential(t),
  f: (o, t) => o.toFixed(t),
  g: (o, t) => o.toPrecision(t),
  o: (o) => Math.round(o).toString(8),
  p: (o, t) => r(o * 100, t),
  r,
  s: a,
  X: (o) => Math.round(o).toString(16).toUpperCase(),
  x: (o) => Math.round(o).toString(16)
};
export {
  d as default
};
//# sourceMappingURL=vue3-histogram-slider.esm89.js.map
