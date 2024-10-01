import l from "./vue3-histogram-slider.esm12.js";
import u from "./vue3-histogram-slider.esm51.js";
function i() {
  return null;
}
function c(n, t) {
  var r = typeof n == "function" ? n : l(n), e = t == null ? i : typeof t == "function" ? t : u(t);
  return this.select(function() {
    return this.insertBefore(r.apply(this, arguments), e.apply(this, arguments) || null);
  });
}
export {
  c as default
};
//# sourceMappingURL=vue3-histogram-slider.esm44.js.map
