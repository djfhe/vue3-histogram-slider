import { childMatcher as i } from "./vue3-histogram-slider.esm63.js";
var n = Array.prototype.find;
function r(t) {
  return function() {
    return n.call(this.children, t);
  };
}
function e() {
  return this.firstElementChild;
}
function o(t) {
  return this.select(t == null ? e : r(typeof t == "function" ? t : i(t)));
}
export {
  o as default
};
//# sourceMappingURL=vue3-histogram-slider.esm67.js.map
