import g from "./vue3-histogram-slider.esm38.js";
var x = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, c = new RegExp(x.source, "g");
function p(i) {
  return function() {
    return i;
  };
}
function h(i) {
  return function(n) {
    return i(n) + "";
  };
}
function v(i, n) {
  var u = x.lastIndex = c.lastIndex = 0, o, l, t, r = -1, e = [], f = [];
  for (i = i + "", n = n + ""; (o = x.exec(i)) && (l = c.exec(n)); )
    (t = l.index) > u && (t = n.slice(u, t), e[r] ? e[r] += t : e[++r] = t), (o = o[0]) === (l = l[0]) ? e[r] ? e[r] += l : e[++r] = l : (e[++r] = null, f.push({ i: r, x: g(o, l) })), u = c.lastIndex;
  return u < n.length && (t = n.slice(u), e[r] ? e[r] += t : e[++r] = t), e.length < 2 ? f[0] ? h(f[0].x) : p(n) : (n = f.length, function(d) {
    for (var s = 0, a; s < n; ++s) e[(a = f[s]).i] = a.x(d);
    return e.join("");
  });
}
export {
  v as default
};
//# sourceMappingURL=vue3-histogram-slider.esm40.js.map
