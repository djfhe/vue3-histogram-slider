function a(t) {
  return t.trim().split(/^|\s+/);
}
function r(t) {
  return t.classList || new c(t);
}
function c(t) {
  this._node = t, this._names = a(t.getAttribute("class") || "");
}
c.prototype = {
  add: function(t) {
    var n = this._names.indexOf(t);
    n < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var n = this._names.indexOf(t);
    n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function u(t, n) {
  for (var s = r(t), i = -1, e = n.length; ++i < e; ) s.add(n[i]);
}
function o(t, n) {
  for (var s = r(t), i = -1, e = n.length; ++i < e; ) s.remove(n[i]);
}
function f(t) {
  return function() {
    u(this, t);
  };
}
function h(t) {
  return function() {
    o(this, t);
  };
}
function d(t, n) {
  return function() {
    (n.apply(this, arguments) ? u : o)(this, t);
  };
}
function m(t, n) {
  var s = a(t + "");
  if (arguments.length < 2) {
    for (var i = r(this.node()), e = -1, l = s.length; ++e < l; ) if (!i.contains(s[e])) return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? d : n ? f : h)(s, n));
}
export {
  m as default
};
//# sourceMappingURL=vue3-histogram-slider.esm60.js.map
