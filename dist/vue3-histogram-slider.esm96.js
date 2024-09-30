function h(i) {
  return function(t) {
    i.call(this, t, this.__data__);
  };
}
function p(i) {
  return i.trim().split(/^|\s+/).map(function(t) {
    var s = "", n = t.indexOf(".");
    return n >= 0 && (s = t.slice(n + 1), t = t.slice(0, n)), { type: t, name: s };
  });
}
function c(i) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var s = 0, n = -1, e = t.length, r; s < e; ++s)
        r = t[s], (!i.type || r.type === i.type) && r.name === i.name ? this.removeEventListener(r.type, r.listener, r.options) : t[++n] = r;
      ++n ? t.length = n : delete this.__on;
    }
  };
}
function v(i, t, s) {
  return function() {
    var n = this.__on, e, r = h(t);
    if (n) {
      for (var a = 0, f = n.length; a < f; ++a)
        if ((e = n[a]).type === i.type && e.name === i.name) {
          this.removeEventListener(e.type, e.listener, e.options), this.addEventListener(e.type, e.listener = r, e.options = s), e.value = t;
          return;
        }
    }
    this.addEventListener(i.type, r, s), e = { type: i.type, name: i.name, value: t, listener: r, options: s }, n ? n.push(e) : this.__on = [e];
  };
}
function _(i, t, s) {
  var n = p(i + ""), e, r = n.length, a;
  if (arguments.length < 2) {
    var f = this.node().__on;
    if (f) {
      for (var l = 0, u = f.length, o; l < u; ++l)
        for (e = 0, o = f[l]; e < r; ++e)
          if ((a = n[e]).type === o.type && a.name === o.name)
            return o.value;
    }
    return;
  }
  for (f = t ? v : c, e = 0; e < r; ++e) this.each(f(n[e], t, s));
  return this;
}
export {
  _ as default
};
//# sourceMappingURL=vue3-histogram-slider.esm96.js.map
