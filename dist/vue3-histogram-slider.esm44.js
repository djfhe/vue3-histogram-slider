import o from "./vue3-histogram-slider.esm38.js";
import { parseCss as Y, parseSvg as T } from "./vue3-histogram-slider.esm45.js";
function X(f, a, c, p) {
  function i(e) {
    return e.length ? e.pop() + " " : "";
  }
  function v(e, t, n, l, r, u) {
    if (e !== n || t !== l) {
      var s = r.push("translate(", null, a, null, c);
      u.push({ i: s - 4, x: o(e, n) }, { i: s - 2, x: o(t, l) });
    } else (n || l) && r.push("translate(" + n + a + l + c);
  }
  function m(e, t, n, l) {
    e !== t ? (e - t > 180 ? t += 360 : t - e > 180 && (e += 360), l.push({ i: n.push(i(n) + "rotate(", null, p) - 2, x: o(e, t) })) : t && n.push(i(n) + "rotate(" + t + p);
  }
  function w(e, t, n, l) {
    e !== t ? l.push({ i: n.push(i(n) + "skewX(", null, p) - 2, x: o(e, t) }) : t && n.push(i(n) + "skewX(" + t + p);
  }
  function k(e, t, n, l, r, u) {
    if (e !== n || t !== l) {
      var s = r.push(i(r) + "scale(", null, ",", null, ")");
      u.push({ i: s - 4, x: o(e, n) }, { i: s - 2, x: o(t, l) });
    } else (n !== 1 || l !== 1) && r.push(i(r) + "scale(" + n + "," + l + ")");
  }
  return function(e, t) {
    var n = [], l = [];
    return e = f(e), t = f(t), v(e.translateX, e.translateY, t.translateX, t.translateY, n, l), m(e.rotate, t.rotate, n, l), w(e.skewX, t.skewX, n, l), k(e.scaleX, e.scaleY, t.scaleX, t.scaleY, n, l), e = t = null, function(r) {
      for (var u = -1, s = l.length, h; ++u < s; ) n[(h = l[u]).i] = h.x(r);
      return n.join("");
    };
  };
}
var j = X(Y, "px, ", "px)", "deg)"), q = X(T, ", ", ")", ")");
export {
  j as interpolateTransformCss,
  q as interpolateTransformSvg
};
//# sourceMappingURL=vue3-histogram-slider.esm44.js.map
