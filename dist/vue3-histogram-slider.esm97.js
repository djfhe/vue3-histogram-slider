import o from "./vue3-histogram-slider.esm101.js";
function u(n, t, i) {
  var c = o(n), e = c.CustomEvent;
  typeof e == "function" ? e = new e(t, i) : (e = c.document.createEvent("Event"), i ? (e.initEvent(t, i.bubbles, i.cancelable), e.detail = i.detail) : e.initEvent(t, !1, !1)), n.dispatchEvent(e);
}
function f(n, t) {
  return function() {
    return u(this, n, t);
  };
}
function s(n, t) {
  return function() {
    return u(this, n, t.apply(this, arguments));
  };
}
function r(n, t) {
  return this.each((typeof t == "function" ? s : f)(n, t));
}
export {
  r as default
};
//# sourceMappingURL=vue3-histogram-slider.esm97.js.map
