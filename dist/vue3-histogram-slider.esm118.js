import { get as c, init as f, set as a } from "./vue3-histogram-slider.esm131.js";
function h(i) {
  return (i + "").trim().split(/^|\s+/).every(function(n) {
    var t = n.indexOf(".");
    return t >= 0 && (n = n.slice(0, t)), !n || n === "start";
  });
}
function d(i, n, t) {
  var o, r, u = h(n) ? f : a;
  return function() {
    var e = u(this, i), s = e.on;
    s !== o && (r = (o = s).copy()).on(n, t), e.on = r;
  };
}
function v(i, n) {
  var t = this._id;
  return arguments.length < 2 ? c(this.node(), t).on.on(i) : this.each(d(t, i, n));
}
export {
  v as default
};
//# sourceMappingURL=vue3-histogram-slider.esm118.js.map
