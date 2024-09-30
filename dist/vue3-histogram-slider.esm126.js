function u(n) {
  return function(t) {
    this.textContent = n.call(this, t);
  };
}
function o(n) {
  var t, r;
  function i() {
    var e = n.apply(this, arguments);
    return e !== r && (t = (r = e) && u(e)), t;
  }
  return i._value = n, i;
}
function f(n) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (n == null) return this.tween(t, null);
  if (typeof n != "function") throw new Error();
  return this.tween(t, o(n));
}
export {
  f as default
};
//# sourceMappingURL=vue3-histogram-slider.esm126.js.map
