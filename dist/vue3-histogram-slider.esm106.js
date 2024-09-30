import { Timer as i } from "./vue3-histogram-slider.esm105.js";
function e(o, t, n) {
  var r = new i();
  return t = t == null ? 0 : +t, r.restart((u) => {
    r.stop(), o(u + t);
  }, t, n), r;
}
export {
  e as default
};
//# sourceMappingURL=vue3-histogram-slider.esm106.js.map
