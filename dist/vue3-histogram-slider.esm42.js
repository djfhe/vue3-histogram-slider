import { childMatcher as e } from "./vue3-histogram-slider.esm37.js";
var t = Array.prototype.filter;
function n() {
  return Array.from(this.children);
}
function i(r) {
  return function() {
    return t.call(this.children, r);
  };
}
function o(r) {
  return this.selectAll(r == null ? n : i(typeof r == "function" ? r : e(r)));
}
export {
  o as default
};
//# sourceMappingURL=vue3-histogram-slider.esm42.js.map
