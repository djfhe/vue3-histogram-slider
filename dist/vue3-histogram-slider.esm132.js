var X = 180 / Math.PI, o = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function h(t, e, s, r, i, f) {
  var l, n, a;
  return (l = Math.sqrt(t * t + e * e)) && (t /= l, e /= l), (a = t * s + e * r) && (s -= t * a, r -= e * a), (n = Math.sqrt(s * s + r * r)) && (s /= n, r /= n, a /= n), t * r < e * s && (t = -t, e = -e, a = -a, l = -l), {
    translateX: i,
    translateY: f,
    rotate: Math.atan2(e, t) * X,
    skewX: Math.atan(a) * X,
    scaleX: l,
    scaleY: n
  };
}
export {
  h as default,
  o as identity
};
//# sourceMappingURL=vue3-histogram-slider.esm132.js.map
