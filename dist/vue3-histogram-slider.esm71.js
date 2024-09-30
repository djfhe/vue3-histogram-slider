import n from "./vue3-histogram-slider.esm137.js";
import { Selection as o } from "./vue3-histogram-slider.esm64.js";
function u() {
  return new o(this._enter || this._groups.map(n), this._parents);
}
function r(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
r.prototype = {
  constructor: r,
  appendChild: function(e) {
    return this._parent.insertBefore(e, this._next);
  },
  insertBefore: function(e, t) {
    return this._parent.insertBefore(e, t);
  },
  querySelector: function(e) {
    return this._parent.querySelector(e);
  },
  querySelectorAll: function(e) {
    return this._parent.querySelectorAll(e);
  }
};
export {
  r as EnterNode,
  u as default
};
//# sourceMappingURL=vue3-histogram-slider.esm71.js.map
