import { tweenValue as e } from "./vue3-histogram-slider.esm128.js";
function i(t) {
  return function() {
    this.textContent = t;
  };
}
function o(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function r(t) {
  return this.tween("text", typeof t == "function" ? o(e(this, "text", t)) : i(t == null ? "" : t + ""));
}
export {
  r as default
};
//# sourceMappingURL=vue3-histogram-slider.esm125.js.map
