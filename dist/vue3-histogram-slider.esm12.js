import c from "./vue3-histogram-slider.esm13.js";
import { xhtml as n } from "./vue3-histogram-slider.esm14.js";
function o(e) {
  return function() {
    var t = this.ownerDocument, r = this.namespaceURI;
    return r === n && t.documentElement.namespaceURI === n ? t.createElement(e) : t.createElementNS(r, e);
  };
}
function a(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function i(e) {
  var t = c(e);
  return (t.local ? a : o)(t);
}
export {
  i as default
};
//# sourceMappingURL=vue3-histogram-slider.esm12.js.map
