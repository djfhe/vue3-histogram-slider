import g from "./vue3-histogram-slider.esm78.js";
var x = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, c = new RegExp(x.source, "g");
function h(i) {
  return function() {
    return i;
  };
}
function m(i) {
  return function(n) {
    return i(n) + "";
  };
}
function v(i, n) {
  var u = x.lastIndex = c.lastIndex = 0, s, l, t, r = -1, e = [], f = [];
  for (i = i + "", n = n + ""; (s = x.exec(i)) && (l = c.exec(n)); )
    (t = l.index) > u && (t = n.slice(u, t), e[r] ? e[r] += t : e[++r] = t), (s = s[0]) === (l = l[0]) ? e[r] ? e[r] += l : e[++r] = l : (e[++r] = null, f.push({ i: r, x: g(s, l) })), u = c.lastIndex;
  return u < n.length && (t = n.slice(u), e[r] ? e[r] += t : e[++r] = t), e.length < 2 ? f[0] ? m(f[0].x) : h(n) : (n = f.length, function(a) {
    for (var o = 0, d; o < n; ++o) e[(d = f[o]).i] = d.x(a);
    return e.join("");
  });
}
export {
  v as default
};
//# sourceMappingURL=vue3-histogram-slider.esm96.js.map
