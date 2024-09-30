import { commonjsGlobal as Xt, getDefaultExportFromCjs as Zt } from "./vue3-histogram-slider.esm15.js";
import { __module as yt } from "./vue3-histogram-slider.esm16.js";
import qt from "vue";
(function(gt, Kt) {
  (function(st, J) {
    gt.exports = J(qt);
  })(typeof self < "u" ? self : Xt, function(st) {
    return function() {
      var J = { 388: function(u, f) {
        var s, i, d;
        (function(b, P) {
          i = [], s = P, d = typeof s == "function" ? s.apply(f, i) : s, d === void 0 || (u.exports = d);
        })(typeof self < "u" && self, function() {
          function b() {
            var P = Object.getOwnPropertyDescriptor(document, "currentScript");
            if (!P && "currentScript" in document && document.currentScript || P && P.get !== b && document.currentScript) return document.currentScript;
            try {
              throw new Error();
            } catch (_) {
              var D, z, L, T = /.*at [^(]*\((.*):(.+):(.+)\)$/gi, M = /@([^@]*):(\d+):(\d+)\s*$/gi, y = T.exec(_.stack) || M.exec(_.stack), H = y && y[1] || !1, G = y && y[2] || !1, U = document.location.href.replace(document.location.hash, ""), C = document.getElementsByTagName("script");
              H === U && (D = document.documentElement.outerHTML, z = new RegExp("(?:[^\\n]+?\\n){0," + (G - 2) + "}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*", "i"), L = D.replace(z, "$1").trim());
              for (var S = 0; S < C.length; S++)
                if (C[S].readyState === "interactive" || C[S].src === H || H === U && C[S].innerHTML && C[S].innerHTML.trim() === L) return C[S];
              return null;
            }
          }
          return b;
        });
      }, 905: function(u, f, s) {
        s.r(f);
        var i = s(117), d = s.n(i), b = s(488), P = s.n(b), D = P()(d());
        D.push([u.id, ".vue-slider-dot{position:absolute;-webkit-transition:all 0s;transition:all 0s;z-index:5}.vue-slider-dot:focus{outline:none}.vue-slider-dot-tooltip{position:absolute;visibility:hidden}.vue-slider-dot-hover:hover .vue-slider-dot-tooltip,.vue-slider-dot-tooltip-show{visibility:visible}.vue-slider-dot-tooltip-top{top:-10px;left:50%;-webkit-transform:translate(-50%,-100%);transform:translate(-50%,-100%)}.vue-slider-dot-tooltip-bottom{bottom:-10px;left:50%;-webkit-transform:translate(-50%,100%);transform:translate(-50%,100%)}.vue-slider-dot-tooltip-left{left:-10px;top:50%;-webkit-transform:translate(-100%,-50%);transform:translate(-100%,-50%)}.vue-slider-dot-tooltip-right{right:-10px;top:50%;-webkit-transform:translate(100%,-50%);transform:translate(100%,-50%)}", ""]), f.default = D;
      }, 121: function(u, f, s) {
        s.r(f);
        var i = s(117), d = s.n(i), b = s(488), P = s.n(b), D = P()(d());
        D.push([u.id, ".vue-slider-marks{position:relative;width:100%;height:100%}.vue-slider-mark{position:absolute;z-index:1}.vue-slider-ltr .vue-slider-mark,.vue-slider-rtl .vue-slider-mark{width:0;height:100%;top:50%}.vue-slider-ltr .vue-slider-mark-step,.vue-slider-rtl .vue-slider-mark-step{top:0}.vue-slider-ltr .vue-slider-mark-label,.vue-slider-rtl .vue-slider-mark-label{top:100%;margin-top:10px}.vue-slider-ltr .vue-slider-mark{-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.vue-slider-ltr .vue-slider-mark-step{left:0}.vue-slider-ltr .vue-slider-mark-label{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.vue-slider-rtl .vue-slider-mark{-webkit-transform:translate(50%,-50%);transform:translate(50%,-50%)}.vue-slider-rtl .vue-slider-mark-step{right:0}.vue-slider-rtl .vue-slider-mark-label{right:50%;-webkit-transform:translateX(50%);transform:translateX(50%)}.vue-slider-btt .vue-slider-mark,.vue-slider-ttb .vue-slider-mark{width:100%;height:0;left:50%}.vue-slider-btt .vue-slider-mark-step,.vue-slider-ttb .vue-slider-mark-step{left:0}.vue-slider-btt .vue-slider-mark-label,.vue-slider-ttb .vue-slider-mark-label{left:100%;margin-left:10px}.vue-slider-btt .vue-slider-mark{-webkit-transform:translate(-50%,50%);transform:translate(-50%,50%)}.vue-slider-btt .vue-slider-mark-step{top:0}.vue-slider-btt .vue-slider-mark-label{top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.vue-slider-ttb .vue-slider-mark{-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.vue-slider-ttb .vue-slider-mark-step{bottom:0}.vue-slider-ttb .vue-slider-mark-label{bottom:50%;-webkit-transform:translateY(50%);transform:translateY(50%)}.vue-slider-mark-label,.vue-slider-mark-step{position:absolute}", ""]), f.default = D;
      }, 207: function(u, f, s) {
        s.r(f);
        var i = s(117), d = s.n(i), b = s(488), P = s.n(b), D = P()(d());
        D.push([u.id, ".vue-slider{position:relative;-webkit-box-sizing:content-box;box-sizing:content-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block;-webkit-tap-highlight-color:rgba(0,0,0,0)}.vue-slider-rail{position:relative;width:100%;height:100%;-webkit-transition-property:width,height,left,right,top,bottom;transition-property:width,height,left,right,top,bottom}.vue-slider-process{position:absolute;z-index:1}", ""]), f.default = D;
      }, 488: function(u) {
        u.exports = function(f) {
          var s = [];
          return s.toString = function() {
            return this.map(function(i) {
              var d = "", b = typeof i[5] < "u";
              return i[4] && (d += "@supports (".concat(i[4], ") {")), i[2] && (d += "@media ".concat(i[2], " {")), b && (d += "@layer".concat(i[5].length > 0 ? " ".concat(i[5]) : "", " {")), d += f(i), b && (d += "}"), i[2] && (d += "}"), i[4] && (d += "}"), d;
            }).join("");
          }, s.i = function(i, d, b, P, D) {
            typeof i == "string" && (i = [[null, i, void 0]]);
            var z = {};
            if (b) for (var L = 0; L < this.length; L++) {
              var T = this[L][0];
              T != null && (z[T] = !0);
            }
            for (var M = 0; M < i.length; M++) {
              var y = [].concat(i[M]);
              b && z[y[0]] || (typeof D < "u" && (typeof y[5] > "u" || (y[1] = "@layer".concat(y[5].length > 0 ? " ".concat(y[5]) : "", " {").concat(y[1], "}")), y[5] = D), d && (y[2] && (y[1] = "@media ".concat(y[2], " {").concat(y[1], "}")), y[2] = d), P && (y[4] ? (y[1] = "@supports (".concat(y[4], ") {").concat(y[1], "}"), y[4] = P) : y[4] = "".concat(P)), s.push(y));
            }
          }, s;
        };
      }, 117: function(u) {
        u.exports = function(f) {
          return f[1];
        };
      }, 831: function(u, f) {
        f.Z = (s, i) => {
          const d = s.__vccOpts || s;
          for (const [b, P] of i) d[b] = P;
          return d;
        };
      }, 466: function(u, f, s) {
        var i = s(905);
        i.__esModule && (i = i.default), typeof i == "string" && (i = [[u.id, i, ""]]), i.locals && (u.exports = i.locals);
        var d = s(959).Z;
        d("50bc1720", i, !0, { sourceMap: !1, shadowMode: !1 });
      }, 18: function(u, f, s) {
        var i = s(121);
        i.__esModule && (i = i.default), typeof i == "string" && (i = [[u.id, i, ""]]), i.locals && (u.exports = i.locals);
        var d = s(959).Z;
        d("10aa5f36", i, !0, { sourceMap: !1, shadowMode: !1 });
      }, 631: function(u, f, s) {
        var i = s(207);
        i.__esModule && (i = i.default), typeof i == "string" && (i = [[u.id, i, ""]]), i.locals && (u.exports = i.locals);
        var d = s(959).Z;
        d("1772934e", i, !0, { sourceMap: !1, shadowMode: !1 });
      }, 959: function(u, f, s) {
        function i(h, g) {
          for (var v = [], m = {}, p = 0; p < g.length; p++) {
            var w = g[p], O = w[0], x = w[1], B = w[2], N = w[3], $ = { id: h + ":" + p, css: x, media: B, sourceMap: N };
            m[O] ? m[O].parts.push($) : v.push(m[O] = { id: O, parts: [$] });
          }
          return v;
        }
        s.d(f, { Z: function() {
          return G;
        } });
        var d = typeof document < "u";
        if (typeof DEBUG < "u" && DEBUG && !d) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
        var b = {}, P = d && (document.head || document.getElementsByTagName("head")[0]), D = null, z = 0, L = !1, T = function() {
        }, M = null, y = "data-vue-ssr-id", H = typeof navigator < "u" && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
        function G(h, g, v, m) {
          L = v, M = m || {};
          var p = i(h, g);
          return U(p), function(w) {
            for (var O = [], x = 0; x < p.length; x++) {
              var B = p[x], N = b[B.id];
              N.refs--, O.push(N);
            }
            for (w ? (p = i(h, w), U(p)) : p = [], x = 0; x < O.length; x++)
              if (N = O[x], N.refs === 0) {
                for (var $ = 0; $ < N.parts.length; $++) N.parts[$]();
                delete b[N.id];
              }
          };
        }
        function U(h) {
          for (var g = 0; g < h.length; g++) {
            var v = h[g], m = b[v.id];
            if (m) {
              m.refs++;
              for (var p = 0; p < m.parts.length; p++) m.parts[p](v.parts[p]);
              for (; p < v.parts.length; p++) m.parts.push(S(v.parts[p]));
              m.parts.length > v.parts.length && (m.parts.length = v.parts.length);
            } else {
              var w = [];
              for (p = 0; p < v.parts.length; p++) w.push(S(v.parts[p]));
              b[v.id] = { id: v.id, refs: 1, parts: w };
            }
          }
        }
        function C() {
          var h = document.createElement("style");
          return h.type = "text/css", P.appendChild(h), h;
        }
        function S(h) {
          var g, v, m = document.querySelector("style[" + y + '~="' + h.id + '"]');
          if (m) {
            if (L) return T;
            m.parentNode.removeChild(m);
          }
          if (H) {
            var p = z++;
            m = D || (D = C()), g = F.bind(null, m, p, !1), v = F.bind(null, m, p, !0);
          } else m = C(), g = Q.bind(null, m), v = function() {
            m.parentNode.removeChild(m);
          };
          return g(h), function(w) {
            if (w) {
              if (w.css === h.css && w.media === h.media && w.sourceMap === h.sourceMap) return;
              g(h = w);
            } else v();
          };
        }
        var _ = /* @__PURE__ */ function() {
          var h = [];
          return function(g, v) {
            return h[g] = v, h.filter(Boolean).join(`
`);
          };
        }();
        function F(h, g, v, m) {
          var p = v ? "" : m.css;
          if (h.styleSheet) h.styleSheet.cssText = _(g, p);
          else {
            var w = document.createTextNode(p), O = h.childNodes;
            O[g] && h.removeChild(O[g]), O.length ? h.insertBefore(w, O[g]) : h.appendChild(w);
          }
        }
        function Q(h, g) {
          var v = g.css, m = g.media, p = g.sourceMap;
          if (m && h.setAttribute("media", m), M.ssrId && h.setAttribute(y, g.id), p && (v += `
/*# sourceURL=` + p.sources[0] + " */", v += `
/*# sourceMappingURL=data:application/json;base64,` + btoa(unescape(encodeURIComponent(JSON.stringify(p)))) + " */"), h.styleSheet) h.styleSheet.cssText = v;
          else {
            for (; h.firstChild; ) h.removeChild(h.firstChild);
            h.appendChild(document.createTextNode(v));
          }
        }
      }, 927: function(u) {
        u.exports = st;
      } }, lt = {};
      function R(u) {
        var f = lt[u];
        if (f !== void 0) return f.exports;
        var s = lt[u] = { id: u, exports: {} };
        return J[u].call(s.exports, s, s.exports, R), s.exports;
      }
      (function() {
        R.n = function(u) {
          var f = u && u.__esModule ? function() {
            return u.default;
          } : function() {
            return u;
          };
          return R.d(f, { a: f }), f;
        };
      })(), function() {
        R.d = function(u, f) {
          for (var s in f) R.o(f, s) && !R.o(u, s) && Object.defineProperty(u, s, { enumerable: !0, get: f[s] });
        };
      }(), function() {
        R.o = function(u, f) {
          return Object.prototype.hasOwnProperty.call(u, f);
        };
      }(), function() {
        R.r = function(u) {
          typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(u, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(u, "__esModule", { value: !0 });
        };
      }(), function() {
        R.p = "";
      }();
      var Y = {};
      return function() {
        if (R.d(Y, { default: function() {
          return $t;
        } }), typeof window < "u") {
          var u = window.document.currentScript, f = R(388);
          u = f(), "currentScript" in document || Object.defineProperty(document, "currentScript", { get: f });
          var s = u && u.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);
          s && (R.p = s[1]);
        }
        var i = R(927);
        function d(t, e, r) {
          return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
        }
        var b = { key: 0, class: "vue-slider-marks" };
        function P(t, e, r, n, o, a) {
          var l = (0, i.resolveComponent)("vue-slider-mark"), V = (0, i.resolveComponent)("vue-slider-dot");
          return (0, i.openBlock)(), (0, i.createElementBlock)("div", (0, i.mergeProps)({ ref: "container", class: t.containerClasses, style: t.containerStyles, onClick: e[2] || (e[2] = function() {
            return t.clickHandle && t.clickHandle.apply(t, arguments);
          }), onTouchstartPassive: e[3] || (e[3] = function() {
            return t.dragStartOnProcess && t.dragStartOnProcess.apply(t, arguments);
          }), onMousedownPassive: e[4] || (e[4] = function() {
            return t.dragStartOnProcess && t.dragStartOnProcess.apply(t, arguments);
          }) }, t.$attrs), [(0, i.createElementVNode)("div", { class: "vue-slider-rail", style: (0, i.normalizeStyle)(t.railStyle) }, [((0, i.openBlock)(!0), (0, i.createElementBlock)(i.Fragment, null, (0, i.renderList)(t.processArray, function(c, E) {
            return (0, i.renderSlot)(t.$slots, "process", (0, i.normalizeProps)((0, i.guardReactiveProps)(c)), function() {
              return [((0, i.openBlock)(), (0, i.createElementBlock)("div", { class: "vue-slider-process", key: "process-".concat(E), style: (0, i.normalizeStyle)(c.style) }, null, 4))];
            });
          }), 256)), t.sliderMarks && t.control ? ((0, i.openBlock)(), (0, i.createElementBlock)("div", b, [((0, i.openBlock)(!0), (0, i.createElementBlock)(i.Fragment, null, (0, i.renderList)(t.control.markList, function(c, E) {
            return (0, i.renderSlot)(t.$slots, "mark", (0, i.normalizeProps)((0, i.guardReactiveProps)(c)), function() {
              var j;
              return [((0, i.openBlock)(), (0, i.createBlock)(l, { key: "mark-".concat(E), mark: c, hideLabel: t.hideLabel, style: (0, i.normalizeStyle)((j = {}, d(j, t.isHorizontal ? "height" : "width", "100%"), d(j, t.isHorizontal ? "width" : "height", t.tailSize), d(j, t.mainDirection, "".concat(c.pos, "%")), j)), stepStyle: t.stepStyle, stepActiveStyle: t.stepActiveStyle, labelStyle: t.labelStyle, labelActiveStyle: t.labelActiveStyle, onPressLabel: e[0] || (e[0] = function(X) {
                return t.clickable && t.setValueByPos(X);
              }) }, { step: (0, i.withCtx)(function() {
                return [(0, i.renderSlot)(t.$slots, "step", (0, i.normalizeProps)((0, i.guardReactiveProps)(c)))];
              }), label: (0, i.withCtx)(function() {
                return [(0, i.renderSlot)(t.$slots, "label", (0, i.normalizeProps)((0, i.guardReactiveProps)(c)))];
              }), _: 2 }, 1032, ["mark", "hideLabel", "style", "stepStyle", "stepActiveStyle", "labelStyle", "labelActiveStyle"]))];
            });
          }), 256))])) : (0, i.createCommentVNode)("", !0), ((0, i.openBlock)(!0), (0, i.createElementBlock)(i.Fragment, null, (0, i.renderList)(t.dots, function(c, E) {
            var j;
            return (0, i.openBlock)(), (0, i.createBlock)(V, (0, i.mergeProps)({ ref_for: !0, ref: "dot-".concat(E), key: "dot-".concat(E), value: c.value, disabled: c.disabled, focus: c.focus, "dot-style": [c.style, c.disabled ? c.disabledStyle : null, c.focus ? c.focusStyle : null], tooltip: c.tooltip || t.tooltip, "tooltip-style": [t.tooltipStyle, c.tooltipStyle, c.disabled ? c.tooltipDisabledStyle : null, c.focus ? c.tooltipFocusStyle : null], "tooltip-formatter": Array.isArray(t.sliderTooltipFormatter) ? t.sliderTooltipFormatter[E] : t.sliderTooltipFormatter, "tooltip-placement": t.tooltipDirections[E], style: [t.dotBaseStyle, (j = {}, d(j, t.mainDirection, "".concat(c.pos, "%")), d(j, "transition", "".concat(t.mainDirection, " ").concat(t.animateTime, "s")), j)], onDragStart: function() {
              return t.dragStart(E);
            }, role: "slider", "aria-valuenow": c.value, "aria-valuemin": t.min, "aria-valuemax": t.max, "aria-orientation": t.isHorizontal ? "horizontal" : "vertical", tabindex: "0", onFocus: function() {
              return t.focus(c, E);
            }, onBlur: e[1] || (e[1] = function() {
              return t.blur();
            }) }, t.dotAttrs), { dot: (0, i.withCtx)(function() {
              return [(0, i.renderSlot)(t.$slots, "dot", (0, i.normalizeProps)((0, i.guardReactiveProps)(c)))];
            }), tooltip: (0, i.withCtx)(function() {
              return [(0, i.renderSlot)(t.$slots, "tooltip", (0, i.normalizeProps)((0, i.guardReactiveProps)(c)))];
            }), _: 2 }, 1040, ["value", "disabled", "focus", "dot-style", "tooltip", "tooltip-style", "tooltip-formatter", "tooltip-placement", "style", "onDragStart", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-orientation", "onFocus"]);
          }), 128))], 4), (0, i.renderSlot)(t.$slots, "default", { value: t.getValue() })], 16);
        }
        var D = ["aria-valuetext"], z = { class: "vue-slider-dot-tooltip-text" };
        function L(t, e, r, n, o, a) {
          var l;
          return (0, i.openBlock)(), (0, i.createElementBlock)("div", { ref: "dot", class: (0, i.normalizeClass)(t.dotClasses), "aria-valuetext": (l = t.tooltipValue) === null || l === void 0 ? void 0 : l.toString(), onMousedownPassive: e[0] || (e[0] = function() {
            return t.dragStart && t.dragStart.apply(t, arguments);
          }), onTouchstartPassive: e[1] || (e[1] = function() {
            return t.dragStart && t.dragStart.apply(t, arguments);
          }) }, [(0, i.renderSlot)(t.$slots, "dot", {}, function() {
            return [(0, i.createElementVNode)("div", { class: (0, i.normalizeClass)(t.handleClasses), style: (0, i.normalizeStyle)(t.dotStyle) }, null, 6)];
          }), t.tooltip !== "none" ? ((0, i.openBlock)(), (0, i.createElementBlock)("div", { key: 0, class: (0, i.normalizeClass)(t.tooltipClasses) }, [(0, i.renderSlot)(t.$slots, "tooltip", {}, function() {
            return [(0, i.createElementVNode)("div", { class: (0, i.normalizeClass)(t.tooltipInnerClasses), style: (0, i.normalizeStyle)(t.tooltipStyle) }, [(0, i.createElementVNode)("span", z, (0, i.toDisplayString)(t.tooltipValue), 1)], 6)];
          })], 2)) : (0, i.createCommentVNode)("", !0)], 42, D);
        }
        R(466);
        var T = (0, i.defineComponent)({ name: "VueSliderDot", emits: ["drag-start"], props: { value: { type: [String, Number], default: 0 }, tooltip: { type: String, required: !0 }, tooltipPlacement: { type: String, validator: function(t) {
          return ["top", "right", "bottom", "left"].indexOf(t) > -1;
        }, required: !0 }, tooltipFormatter: { type: [String, Function] }, focus: { type: Boolean, default: !1 }, disabled: { type: Boolean, default: !1 }, dotStyle: { type: Object }, tooltipStyle: { type: Object } }, computed: { dotClasses: function() {
          return ["vue-slider-dot", { "vue-slider-dot-hover": this.tooltip === "hover" || this.tooltip === "active", "vue-slider-dot-disabled": this.disabled, "vue-slider-dot-focus": this.focus }];
        }, handleClasses: function() {
          return ["vue-slider-dot-handle", { "vue-slider-dot-handle-disabled": this.disabled, "vue-slider-dot-handle-focus": this.focus }];
        }, tooltipClasses: function() {
          return ["vue-slider-dot-tooltip", ["vue-slider-dot-tooltip-".concat(this.tooltipPlacement)], { "vue-slider-dot-tooltip-show": this.showTooltip }];
        }, tooltipInnerClasses: function() {
          return ["vue-slider-dot-tooltip-inner", ["vue-slider-dot-tooltip-inner-".concat(this.tooltipPlacement)], { "vue-slider-dot-tooltip-inner-disabled": this.disabled, "vue-slider-dot-tooltip-inner-focus": this.focus }];
        }, showTooltip: function() {
          switch (this.tooltip) {
            case "always":
              return !0;
            case "none":
              return !1;
            case "focus":
            case "active":
              return !!this.focus;
            default:
              return !1;
          }
        }, tooltipValue: function() {
          return this.tooltipFormatter ? typeof this.tooltipFormatter == "string" ? this.tooltipFormatter.replace(/\{value\}/, String(this.value)) : this.tooltipFormatter(this.value) : this.value;
        } }, methods: { dragStart: function() {
          if (this.disabled) return !1;
          this.$emit("drag-start");
        } } }), M = R(831), H = (0, M.Z)(T, [["render", L]]);
        function G(t, e, r, n, o, a) {
          return (0, i.openBlock)(), (0, i.createElementBlock)("div", { class: (0, i.normalizeClass)(t.marksClasses) }, [(0, i.renderSlot)(t.$slots, "step", {}, function() {
            return [(0, i.createElementVNode)("div", { class: (0, i.normalizeClass)(t.stepClasses), style: (0, i.normalizeStyle)([t.stepStyle, t.mark.style || {}, t.mark.active && t.stepActiveStyle ? t.stepActiveStyle : {}, t.mark.active && t.mark.activeStyle ? t.mark.activeStyle : {}]) }, null, 6)];
          }), t.hideLabel ? (0, i.createCommentVNode)("", !0) : (0, i.renderSlot)(t.$slots, "label", { key: 0 }, function() {
            return [(0, i.createElementVNode)("div", { class: (0, i.normalizeClass)(t.labelClasses), style: (0, i.normalizeStyle)([t.labelStyle, t.mark.labelStyle || {}, t.mark.active && t.labelActiveStyle ? t.labelActiveStyle : {}, t.mark.active && t.mark.labelActiveStyle ? t.mark.labelActiveStyle : {}]), onClick: e[0] || (e[0] = function() {
              return t.labelClickHandle && t.labelClickHandle.apply(t, arguments);
            }) }, (0, i.toDisplayString)(t.mark.label), 7)];
          })], 2);
        }
        R(18);
        var U = (0, i.defineComponent)({ name: "VueSliderMark", emits: ["press-label"], props: { mark: { type: Object, required: !0 }, hideLabel: { type: Boolean }, stepStyle: { type: Object, default: function() {
          return {};
        } }, stepActiveStyle: { type: Object, default: function() {
          return {};
        } }, labelStyle: { type: Object, default: function() {
          return {};
        } }, labelActiveStyle: { type: Object, default: function() {
          return {};
        } } }, computed: { marksClasses: function() {
          return ["vue-slider-mark", { "vue-slider-mark-active": this.mark.active }];
        }, stepClasses: function() {
          return ["vue-slider-mark-step", { "vue-slider-mark-step-active": this.mark.active }];
        }, labelClasses: function() {
          return ["vue-slider-mark-label", { "vue-slider-mark-label-active": this.mark.active }];
        } }, methods: { labelClickHandle: function(t) {
          t.stopPropagation(), this.$emit("press-label", this.mark.pos);
        } } });
        const C = (0, M.Z)(U, [["render", G]]);
        var S, _ = C, F = function(t) {
          return typeof t == "number" ? "".concat(t, "px") : t;
        }, Q = function(t) {
          var e = document.documentElement, r = document.body, n = t.getBoundingClientRect(), o = { y: n.top + (window.pageYOffset || e.scrollTop) - (e.clientTop || r.clientTop || 0), x: n.left + (window.pageXOffset || e.scrollLeft) - (e.clientLeft || r.clientLeft || 0) };
          return o;
        }, h = function(t, e, r) {
          var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1, o = "targetTouches" in t ? t.targetTouches[0] : t, a = Q(e), l = { x: o.pageX - a.x, y: o.pageY - a.y };
          return { x: r ? e.offsetWidth * n - l.x : l.x, y: r ? e.offsetHeight * n - l.y : l.y };
        };
        (function(t) {
          t[t.PAGE_UP = 33] = "PAGE_UP", t[t.PAGE_DOWN = 34] = "PAGE_DOWN", t[t.END = 35] = "END", t[t.HOME = 36] = "HOME", t[t.LEFT = 37] = "LEFT", t[t.UP = 38] = "UP", t[t.RIGHT = 39] = "RIGHT", t[t.DOWN = 40] = "DOWN";
        })(S || (S = {}));
        var g = function(t, e) {
          if (e.hook) {
            var r = e.hook(t);
            if (typeof r == "function") return r;
            if (!r) return null;
          }
          switch (t.keyCode) {
            case S.UP:
              return function(n) {
                return e.direction === "ttb" ? n - 1 : n + 1;
              };
            case S.RIGHT:
              return function(n) {
                return e.direction === "rtl" ? n - 1 : n + 1;
              };
            case S.DOWN:
              return function(n) {
                return e.direction === "ttb" ? n + 1 : n - 1;
              };
            case S.LEFT:
              return function(n) {
                return e.direction === "rtl" ? n + 1 : n - 1;
              };
            case S.END:
              return function() {
                return e.max;
              };
            case S.HOME:
              return function() {
                return e.min;
              };
            case S.PAGE_UP:
              return function(n) {
                return n + 10;
              };
            case S.PAGE_DOWN:
              return function(n) {
                return n - 10;
              };
            default:
              return null;
          }
        };
        function v(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }
        function m(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
          }
        }
        function p(t, e, r) {
          return e && m(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
        }
        function w(t, e, r) {
          return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
        }
        var O, x, B = function() {
          function t(e) {
            v(this, t), w(this, "num", void 0), this.num = e;
          }
          return p(t, [{ key: "decimal", value: function(e, r) {
            var n = this.num, o = this.getDecimalLen(n), a = this.getDecimalLen(e), l = 0;
            switch (r) {
              case "+":
                l = this.getExponent(o, a), this.num = (this.safeRoundUp(n, l) + this.safeRoundUp(e, l)) / l;
                break;
              case "-":
                l = this.getExponent(o, a), this.num = (this.safeRoundUp(n, l) - this.safeRoundUp(e, l)) / l;
                break;
              case "*":
                this.num = this.safeRoundUp(this.safeRoundUp(n, this.getExponent(o)), this.safeRoundUp(e, this.getExponent(a))) / this.getExponent(o + a);
                break;
              case "/":
                l = this.getExponent(o, a), this.num = this.safeRoundUp(n, l) / this.safeRoundUp(e, l);
                break;
              case "%":
                l = this.getExponent(o, a), this.num = this.safeRoundUp(n, l) % this.safeRoundUp(e, l) / l;
                break;
            }
            return this;
          } }, { key: "plus", value: function(e) {
            return this.decimal(e, "+");
          } }, { key: "minus", value: function(e) {
            return this.decimal(e, "-");
          } }, { key: "multiply", value: function(e) {
            return this.decimal(e, "*");
          } }, { key: "divide", value: function(e) {
            return this.decimal(e, "/");
          } }, { key: "remainder", value: function(e) {
            return this.decimal(e, "%");
          } }, { key: "toNumber", value: function() {
            return this.num;
          } }, { key: "getDecimalLen", value: function(e) {
            var r = "".concat(e).split("e");
            return ("".concat(r[0]).split(".")[1] || "").length - (r[1] ? +r[1] : 0);
          } }, { key: "getExponent", value: function(e, r) {
            return Math.pow(10, r !== void 0 ? Math.max(e, r) : e);
          } }, { key: "safeRoundUp", value: function(e, r) {
            return Math.round(e * r);
          } }]), t;
        }();
        function N(t, e) {
          return kt(t) || bt(t, e) || ct(t, e) || $();
        }
        function $() {
          throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function bt(t, e) {
          var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
          if (r != null) {
            var n, o, a = [], l = !0, V = !1;
            try {
              for (r = r.call(t); !(l = (n = r.next()).done) && (a.push(n.value), !(e && a.length === e)); l = !0) ;
            } catch (c) {
              V = !0, o = c;
            } finally {
              try {
                l || r.return == null || r.return();
              } finally {
                if (V) throw o;
              }
            }
            return a;
          }
        }
        function kt(t) {
          if (Array.isArray(t)) return t;
        }
        function ut(t, e) {
          var r = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter(function(o) {
              return Object.getOwnPropertyDescriptor(t, o).enumerable;
            })), r.push.apply(r, n);
          }
          return r;
        }
        function St(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e] != null ? arguments[e] : {};
            e % 2 ? ut(Object(r), !0).forEach(function(n) {
              k(t, n, r[n]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : ut(Object(r)).forEach(function(n) {
              Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
            });
          }
          return t;
        }
        function W(t) {
          return wt(t) || Pt(t) || ct(t) || xt();
        }
        function xt() {
          throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function ct(t, e) {
          if (t) {
            if (typeof t == "string") return tt(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            return r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set" ? Array.from(t) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? tt(t, e) : void 0;
          }
        }
        function Pt(t) {
          if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
        }
        function wt(t) {
          if (Array.isArray(t)) return tt(t);
        }
        function tt(t, e) {
          (e == null || e > t.length) && (e = t.length);
          for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
          return n;
        }
        function Ot(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }
        function Dt(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
          }
        }
        function Et(t, e, r) {
          return e && Dt(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
        }
        function k(t, e, r) {
          return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
        }
        (function(t) {
          t[t.VALUE = 1] = "VALUE", t[t.INTERVAL = 2] = "INTERVAL", t[t.MIN = 3] = "MIN", t[t.MAX = 4] = "MAX", t[t.ORDER = 5] = "ORDER";
        })(x || (x = {}));
        var Rt = (O = {}, k(O, x.VALUE, 'The type of the "value" is illegal'), k(O, x.INTERVAL, 'The prop "interval" is invalid, "(max - min)" must be divisible by "interval"'), k(O, x.MIN, 'The "value" must be greater than or equal to the "min".'), k(O, x.MAX, 'The "value" must be less than or equal to the "max".'), k(O, x.ORDER, 'When "order" is false, the parameters "minRange", "maxRange", "fixed", "enabled" are invalid.'), O), At = function() {
          function t(e) {
            Ot(this, t), k(this, "dotsPos", []), k(this, "dotsValue", []), k(this, "data", void 0), k(this, "enableCross", void 0), k(this, "fixed", void 0), k(this, "max", void 0), k(this, "min", void 0), k(this, "interval", void 0), k(this, "minRange", void 0), k(this, "maxRange", void 0), k(this, "order", void 0), k(this, "marks", void 0), k(this, "included", void 0), k(this, "process", void 0), k(this, "adsorb", void 0), k(this, "dotOptions", void 0), k(this, "onError", void 0), k(this, "cacheRangeDir", {}), this.data = e.data, this.max = e.max, this.min = e.min, this.interval = e.interval, this.order = e.order, this.marks = e.marks, this.included = e.included, this.process = e.process, this.adsorb = e.adsorb, this.dotOptions = e.dotOptions, this.onError = e.onError, this.order ? (this.minRange = e.minRange || 0, this.maxRange = e.maxRange || 0, this.enableCross = e.enableCross, this.fixed = e.fixed) : ((e.minRange || e.maxRange || !e.enableCross || e.fixed) && this.emitError(x.ORDER), this.minRange = 0, this.maxRange = 0, this.enableCross = !0, this.fixed = !1), this.setValue(e.value);
          }
          return Et(t, [{ key: "setValue", value: function(e) {
            this.setDotsValue(Array.isArray(e) ? W(e) : [e], !0);
          } }, { key: "setDotsValue", value: function(e, r) {
            this.dotsValue = e, r && this.syncDotsPos();
          } }, { key: "setDotsPos", value: function(e) {
            var r = this, n = this.order ? W(e).sort(function(o, a) {
              return o - a;
            }) : e;
            this.dotsPos = n, this.setDotsValue(n.map(function(o) {
              return r.getValueByPos(o);
            }), this.adsorb);
          } }, { key: "getValueByPos", value: function(e) {
            var r = this.parsePos(e);
            if (this.included) {
              var n = 100;
              this.markList.forEach(function(o) {
                var a = Math.abs(o.pos - e);
                a < n && (n = a, r = o.value);
              });
            }
            return r;
          } }, { key: "syncDotsPos", value: function() {
            var e = this;
            this.dotsPos = this.dotsValue.map(function(r) {
              return e.parseValue(r);
            });
          } }, { key: "markList", get: function() {
            var e = this;
            if (!this.marks) return [];
            var r = function(n, o) {
              var a = e.parseValue(n);
              return St({ pos: a, value: n, label: n, active: e.isActiveByPos(a) }, o);
            };
            return this.marks === !0 ? this.getValues().map(function(n) {
              return r(n);
            }) : Object.prototype.toString.call(this.marks) === "[object Object]" ? Object.keys(this.marks).sort(function(n, o) {
              return +n - +o;
            }).map(function(n) {
              var o = e.marks[n];
              return r(n, typeof o != "string" ? o : { label: o });
            }) : Array.isArray(this.marks) ? this.marks.map(function(n) {
              return r(n);
            }) : typeof this.marks == "function" ? this.getValues().map(function(n) {
              return { value: n, result: e.marks(n) };
            }).filter(function(n) {
              var o = n.result;
              return !!o;
            }).map(function(n) {
              var o = n.value, a = n.result;
              return r(o, a);
            }) : [];
          } }, { key: "getRecentDot", value: function(e) {
            var r = this.dotsPos.map(function(n) {
              return Math.abs(n - e);
            });
            return r.indexOf(Math.min.apply(Math, W(r)));
          } }, { key: "getIndexByValue", value: function(e) {
            return this.data ? this.data.indexOf(e) : new B(+e).minus(this.min).divide(this.interval).toNumber();
          } }, { key: "getValueByIndex", value: function(e) {
            return e < 0 ? e = 0 : e > this.total && (e = this.total), this.data ? this.data[e] : new B(e).multiply(this.interval).plus(this.min).toNumber();
          } }, { key: "setDotPos", value: function(e, r) {
            e = this.getValidPos(e, r).pos;
            var n = e - this.dotsPos[r];
            if (n) {
              var o = new Array(this.dotsPos.length);
              this.fixed ? o = this.getFixedChangePosArr(n, r) : this.minRange || this.maxRange ? o = this.getLimitRangeChangePosArr(e, n, r) : o[r] = n, this.setDotsPos(this.dotsPos.map(function(a, l) {
                return a + (o[l] || 0);
              }));
            }
          } }, { key: "getFixedChangePosArr", value: function(e, r) {
            var n = this;
            return this.dotsPos.forEach(function(o, a) {
              if (a !== r) {
                var l = n.getValidPos(o + e, a), V = l.pos, c = l.inRange;
                c || (e = Math.min(Math.abs(V - o), Math.abs(e)) * (e < 0 ? -1 : 1));
              }
            }), this.dotsPos.map(function(o) {
              return e;
            });
          } }, { key: "getLimitRangeChangePosArr", value: function(e, r, n) {
            var o = this, a = [{ index: n, changePos: r }], l = r;
            return [this.minRange, this.maxRange].forEach(function(V, c) {
              if (!V) return !1;
              var E = c === 0, j = r > 0, X = 0;
              X = E ? j ? 1 : -1 : j ? -1 : 1;
              for (var Ut = function(Gt, Wt) {
                var vt = Math.abs(Gt - Wt);
                return E ? vt < o.minRangeDir : vt > o.maxRangeDir;
              }, Z = n + X, q = o.dotsPos[Z], pt = e; o.isPos(q) && Ut(q, pt); ) {
                var _t = o.getValidPos(q + l, Z), mt = _t.pos;
                a.push({ index: Z, changePos: mt - q }), Z += X, pt = mt, q = o.dotsPos[Z];
              }
            }), this.dotsPos.map(function(V, c) {
              var E = a.filter(function(j) {
                return j.index === c;
              });
              return E.length ? E[0].changePos : 0;
            });
          } }, { key: "isPos", value: function(e) {
            return typeof e == "number";
          } }, { key: "getValidPos", value: function(e, r) {
            var n = this.valuePosRange[r], o = !0;
            return e < n[0] ? (e = n[0], o = !1) : e > n[1] && (e = n[1], o = !1), { pos: e, inRange: o };
          } }, { key: "parseValue", value: function(e) {
            if (this.data) e = this.data.indexOf(e);
            else if (typeof e == "number" || typeof e == "string") {
              if (e = +e, e < this.min) return this.emitError(x.MIN), 0;
              if (e > this.max) return this.emitError(x.MAX), 0;
              if (typeof e != "number" || e !== e) return this.emitError(x.VALUE), 0;
              e = new B(e).minus(this.min).divide(this.interval).toNumber();
            }
            var r = new B(e).multiply(this.gap).toNumber();
            return r < 0 ? 0 : r > 100 ? 100 : r;
          } }, { key: "parsePos", value: function(e) {
            var r = Math.round(e / this.gap);
            return this.getValueByIndex(r);
          } }, { key: "isActiveByPos", value: function(e) {
            return this.processArray.some(function(r) {
              var n = N(r, 2), o = n[0], a = n[1];
              return e >= o && e <= a;
            });
          } }, { key: "getValues", value: function() {
            if (this.data) return this.data;
            for (var e = [], r = 0; r <= this.total; r++) e.push(new B(r).multiply(this.interval).plus(this.min).toNumber());
            return e;
          } }, { key: "getRangeDir", value: function(e) {
            return e ? new B(e).divide(new B(this.data ? this.data.length - 1 : this.max).minus(this.data ? 0 : this.min).toNumber()).multiply(100).toNumber() : 100;
          } }, { key: "emitError", value: function(e) {
            this.onError && this.onError(e, Rt[e]);
          } }, { key: "processArray", get: function() {
            if (this.process) {
              if (typeof this.process == "function") return this.process(this.dotsPos);
              if (this.dotsPos.length === 1) return [[0, this.dotsPos[0]]];
              if (this.dotsPos.length > 1) return [[Math.min.apply(Math, W(this.dotsPos)), Math.max.apply(Math, W(this.dotsPos))]];
            }
            return [];
          } }, { key: "total", get: function() {
            var e = 0;
            return e = this.data ? this.data.length - 1 : new B(this.max).minus(this.min).divide(this.interval).toNumber(), e - Math.floor(e) !== 0 ? (this.emitError(x.INTERVAL), 0) : e;
          } }, { key: "gap", get: function() {
            return 100 / this.total;
          } }, { key: "minRangeDir", get: function() {
            return this.cacheRangeDir[this.minRange] ? this.cacheRangeDir[this.minRange] : this.cacheRangeDir[this.minRange] = this.getRangeDir(this.minRange);
          } }, { key: "maxRangeDir", get: function() {
            return this.cacheRangeDir[this.maxRange] ? this.cacheRangeDir[this.maxRange] : this.cacheRangeDir[this.maxRange] = this.getRangeDir(this.maxRange);
          } }, { key: "getDotRange", value: function(e, r, n) {
            if (!this.dotOptions) return n;
            var o = Array.isArray(this.dotOptions) ? this.dotOptions[e] : this.dotOptions;
            return o && o[r] !== void 0 ? this.parseValue(o[r]) : n;
          } }, { key: "valuePosRange", get: function() {
            var e = this, r = this.dotsPos, n = [];
            return r.forEach(function(o, a) {
              n.push([Math.max(e.minRange ? e.minRangeDir * a : 0, e.enableCross ? 0 : r[a - 1] || 0, e.getDotRange(a, "min", 0)), Math.min(e.minRange ? 100 - e.minRangeDir * (r.length - 1 - a) : 100, e.enableCross ? 100 : r[a + 1] || 100, e.getDotRange(a, "max", 100))]);
            }), n;
          } }, { key: "dotsIndex", get: function() {
            var e = this;
            return this.dotsValue.map(function(r) {
              return e.getIndexByValue(r);
            });
          } }]), t;
        }();
        function Vt(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }
        function jt(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
          }
        }
        function Ct(t, e, r) {
          return e && jt(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
        }
        function dt(t, e, r) {
          return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
        }
        var Bt = function() {
          function t(e) {
            Vt(this, t), dt(this, "map", void 0), dt(this, "states", 0), this.map = e;
          }
          return Ct(t, [{ key: "add", value: function(e) {
            this.states |= e;
          } }, { key: "delete", value: function(e) {
            this.states &= ~e;
          } }, { key: "toggle", value: function(e) {
            this.has(e) ? this.delete(e) : this.add(e);
          } }, { key: "has", value: function(e) {
            return !!(this.states & e);
          } }]), t;
        }();
        R(631);
        function et(t) {
          return Nt(t) || Lt(t) || ft(t) || Mt();
        }
        function Mt() {
          throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function Lt(t) {
          if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
        }
        function Nt(t) {
          if (Array.isArray(t)) return it(t);
        }
        function rt(t) {
          return rt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
            return typeof e;
          } : function(e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
          }, rt(t);
        }
        function ht(t, e) {
          var r = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter(function(o) {
              return Object.getOwnPropertyDescriptor(t, o).enumerable;
            })), r.push.apply(r, n);
          }
          return r;
        }
        function K(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e] != null ? arguments[e] : {};
            e % 2 ? ht(Object(r), !0).forEach(function(n) {
              I(t, n, r[n]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : ht(Object(r)).forEach(function(n) {
              Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
            });
          }
          return t;
        }
        function I(t, e, r) {
          return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
        }
        function nt(t, e) {
          return Tt(t) || It(t, e) || ft(t, e) || zt();
        }
        function zt() {
          throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function ft(t, e) {
          if (t) {
            if (typeof t == "string") return it(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            return r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set" ? Array.from(t) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? it(t, e) : void 0;
          }
        }
        function it(t, e) {
          (e == null || e > t.length) && (e = t.length);
          for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
          return n;
        }
        function It(t, e) {
          var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
          if (r != null) {
            var n, o, a = [], l = !0, V = !1;
            try {
              for (r = r.call(t); !(l = (n = r.next()).done) && (a.push(n.value), !(e && a.length === e)); l = !0) ;
            } catch (c) {
              V = !0, o = c;
            } finally {
              try {
                l || r.return == null || r.return();
              } finally {
                if (V) throw o;
              }
            }
            return a;
          }
        }
        function Tt(t) {
          if (Array.isArray(t)) return t;
        }
        var A = { None: 0, Drag: 2, Focus: 4 }, ot = 4, Ht = (0, i.defineComponent)({ name: "VueSlider", components: { VueSliderDot: H, VueSliderMark: _ }, emits: ["change", "drag-start", "dragging", "drag-end", "error", "update:modelValue"], data: function() {
          return { control: null, states: new Bt(A), scale: 1, focusDotIndex: 0 };
        }, props: { modelValue: { type: [Number, String, Array], default: 0 }, silent: { type: Boolean, default: !1 }, direction: { type: String, default: "ltr", validator: function(t) {
          return ["ltr", "rtl", "ttb", "btt"].indexOf(t) > -1;
        } }, width: { type: [Number, String] }, height: { type: [Number, String] }, dotSize: { type: [Number, Array], default: 14 }, contained: { type: Boolean, default: !1 }, min: { type: Number, default: 0 }, max: { type: Number, default: 100 }, interval: { type: Number, default: 1 }, disabled: { type: Boolean, default: !1 }, clickable: { type: Boolean, default: !0 }, dragOnClick: { type: Boolean, default: !1 }, duration: { type: Number, default: 0.5 }, data: { type: [Object, Array] }, dataValue: { type: String, default: "value" }, dataLabel: { type: String, default: "label" }, lazy: { type: Boolean, default: !1 }, tooltip: { type: String, default: "active", validator: function(t) {
          return ["none", "always", "focus", "hover", "active"].indexOf(t) > -1;
        } }, tooltipPlacement: { type: [String, Array], validator: function(t) {
          return (Array.isArray(t) ? t : [t]).every(function(e) {
            return ["top", "right", "bottom", "left"].indexOf(e) > -1;
          });
        } }, tooltipFormatter: { type: [String, Array, Function] }, useKeyboard: { type: Boolean, default: !0 }, keydownHook: { type: Function }, enableCross: { type: Boolean, default: !0 }, fixed: { type: Boolean, default: !1 }, order: { type: Boolean, default: !0 }, minRange: { type: Number }, maxRange: { type: Number }, marks: { type: [Boolean, Object, Array, Function], default: !1 }, process: { type: [Boolean, Function], default: !0 }, zoom: { type: Number }, included: { type: Boolean }, adsorb: { type: Boolean }, hideLabel: { type: Boolean }, dotOptions: { type: [Object, Array] }, dotAttrs: { type: Object }, railStyle: { type: Object }, processStyle: { type: Object }, dotStyle: { type: Object }, tooltipStyle: { type: Object }, stepStyle: { type: Object }, stepActiveStyle: { type: Object }, labelStyle: { type: Object }, labelActiveStyle: { type: Object } }, computed: { isHorizontal: function() {
          return this.direction === "ltr" || this.direction === "rtl";
        }, isReverse: function() {
          return this.direction === "rtl" || this.direction === "btt";
        }, tailSize: function() {
          return F((this.isHorizontal ? this.height : this.width) || ot);
        }, containerClasses: function() {
          return ["vue-slider", ["vue-slider-".concat(this.direction)], { "vue-slider-disabled": this.disabled }];
        }, containerStyles: function() {
          var t = Array.isArray(this.dotSize) ? this.dotSize : [this.dotSize, this.dotSize], e = nt(t, 2), r = e[0], n = e[1], o = this.width ? F(this.width) : this.isHorizontal ? "auto" : F(ot), a = this.height ? F(this.height) : this.isHorizontal ? F(ot) : "auto";
          return { padding: this.contained ? "".concat(n / 2, "px ").concat(r / 2, "px") : this.isHorizontal ? "".concat(n / 2, "px 0") : "0 ".concat(r / 2, "px"), width: o, height: a };
        }, processArray: function() {
          var t = this;
          return this.control.processArray.map(function(e, r) {
            var n, o = nt(e, 3), a = o[0], l = o[1], V = o[2];
            if (a > l) {
              var c = [l, a];
              a = c[0], l = c[1];
            }
            var E = t.isHorizontal ? "width" : "height";
            return { start: a, end: l, index: r, style: K(K((n = {}, I(n, t.isHorizontal ? "height" : "width", "100%"), I(n, t.isHorizontal ? "top" : "left", 0), I(n, t.mainDirection, "".concat(a, "%")), I(n, E, "".concat(l - a, "%")), I(n, "transitionProperty", "".concat(E, ",").concat(t.mainDirection)), I(n, "transitionDuration", "".concat(t.animateTime, "s")), n), t.processStyle), V) };
          });
        }, dotBaseStyle: function() {
          var t, e = Array.isArray(this.dotSize) ? this.dotSize : [this.dotSize, this.dotSize], r = nt(e, 2), n = r[0], o = r[1];
          return t = this.isHorizontal ? I({ transform: "translate(".concat(this.isReverse ? "50%" : "-50%", ", -50%)"), WebkitTransform: "translate(".concat(this.isReverse ? "50%" : "-50%", ", -50%)"), top: "50%" }, this.direction === "ltr" ? "left" : "right", "0") : I({ transform: "translate(-50%, ".concat(this.isReverse ? "50%" : "-50%", ")"), WebkitTransform: "translate(-50%, ".concat(this.isReverse ? "50%" : "-50%", ")"), left: "50%" }, this.direction === "btt" ? "bottom" : "top", "0"), K({ width: "".concat(n, "px"), height: "".concat(o, "px") }, t);
        }, mainDirection: function() {
          switch (this.direction) {
            case "ltr":
              return "left";
            case "rtl":
              return "right";
            case "btt":
              return "bottom";
            case "ttb":
              return "top";
            default:
              return "left";
          }
        }, tooltipDirections: function() {
          var t = this.tooltipPlacement || (this.isHorizontal ? "top" : "left");
          return Array.isArray(t) ? t : this.dots.map(function() {
            return t;
          });
        }, dots: function() {
          var t = this;
          return this.control.dotsPos.map(function(e, r) {
            return K({ pos: e, index: r, value: t.control.dotsValue[r], focus: t.states.has(A.Focus) && t.focusDotIndex === r, disabled: t.disabled, style: t.dotStyle }, (Array.isArray(t.dotOptions) ? t.dotOptions[r] : t.dotOptions) || {});
          });
        }, animateTime: function() {
          return this.states.has(A.Drag) ? 0 : this.duration;
        }, canSort: function() {
          return this.order && !this.minRange && !this.maxRange && !this.fixed && this.enableCross;
        }, sliderData: function() {
          var t = this;
          return this.isObjectArrayData(this.data) ? this.data.map(function(e) {
            return e[t.dataValue];
          }) : this.isObjectData(this.data) ? Object.keys(this.data) : this.data;
        }, sliderMarks: function() {
          var t = this;
          return this.marks ? this.marks : this.isObjectArrayData(this.data) ? function(e) {
            var r = { label: e };
            return t.data.some(function(n) {
              return n[t.dataValue] === e && (r.label = n[t.dataLabel], !0);
            }), r;
          } : this.isObjectData(this.data) ? this.data : void 0;
        }, sliderTooltipFormatter: function() {
          var t = this;
          if (this.tooltipFormatter) return this.tooltipFormatter;
          if (this.isObjectArrayData(this.data)) return function(r) {
            var n = "" + r;
            return t.data.some(function(o) {
              return o[t.dataValue] === r && (n = o[t.dataLabel], !0);
            }), n;
          };
          if (this.isObjectData(this.data)) {
            var e = this.data;
            return function(r) {
              return e[r];
            };
          }
        }, isNotSync: function() {
          var t = this.control.dotsValue;
          return Array.isArray(this.modelValue) ? this.modelValue.length !== t.length || this.modelValue.some(function(e, r) {
            return e !== t[r];
          }) : this.modelValue !== t[0];
        }, dragRange: function() {
          var t = this.dots[this.focusDotIndex - 1], e = this.dots[this.focusDotIndex + 1];
          return [t ? t.pos : -1 / 0, e ? e.pos : 1 / 0];
        } }, watch: { modelValue: function() {
          this.control && !this.states.has(A.Drag) && this.isNotSync && this.control.setValue(this.modelValue);
        } }, methods: { isObjectData: function(t) {
          return !!t && Object.prototype.toString.call(t) === "[object Object]";
        }, isObjectArrayData: function(t) {
          return !!t && Array.isArray(t) && t.length > 0 && rt(t[0]) === "object";
        }, bindEvent: function() {
          document.addEventListener("touchmove", this.dragMove, { passive: !1 }), document.addEventListener("touchend", this.dragEnd, { passive: !1 }), document.addEventListener("mousedown", this.blurHandle), document.addEventListener("mousemove", this.dragMove), document.addEventListener("mouseup", this.dragEnd), document.addEventListener("mouseleave", this.dragEnd), document.addEventListener("keydown", this.keydownHandle);
        }, unbindEvent: function() {
          document.removeEventListener("touchmove", this.dragMove), document.removeEventListener("touchend", this.dragEnd), document.removeEventListener("mousedown", this.blurHandle), document.removeEventListener("mousemove", this.dragMove), document.removeEventListener("mouseup", this.dragEnd), document.removeEventListener("mouseleave", this.dragEnd), document.removeEventListener("keydown", this.keydownHandle);
        }, setScale: function() {
          this.scale = new B(Math.floor(this.isHorizontal ? this.$el.offsetWidth : this.$el.offsetHeight)).multiply(this.zoom || 1).divide(100).toNumber();
        }, initControl: function() {
          var t = this;
          this.control = new At({ value: this.modelValue, data: this.sliderData, enableCross: this.enableCross, fixed: this.fixed, max: this.max, min: this.min, interval: this.interval, minRange: this.minRange, maxRange: this.maxRange, order: this.order, marks: this.sliderMarks, included: this.included, process: this.process, adsorb: this.adsorb, dotOptions: this.dotOptions, onError: this.emitError }), ["data", "enableCross", "fixed", "max", "min", "interval", "minRange", "maxRange", "order", "marks", "process", "adsorb", "included", "dotOptions"].forEach(function(e) {
            t.$watch(e, function(r) {
              if (e === "data" && Array.isArray(t.control.data) && Array.isArray(r) && t.control.data.length === r.length && r.every(function(n, o) {
                return n === t.control.data[o];
              })) return !1;
              switch (e) {
                case "data":
                case "dataLabel":
                case "dataValue":
                  t.control.data = t.sliderData;
                  break;
                case "mark":
                  t.control.marks = t.sliderMarks;
                  break;
                default:
                  t.control[e] = r;
              }
              ["data", "max", "min", "interval"].indexOf(e) > -1 && t.control.syncDotsPos();
            });
          });
        }, syncValueByPos: function() {
          var t = this.control.dotsValue;
          if (this.isDiff(t, Array.isArray(this.modelValue) ? this.modelValue : [this.modelValue])) {
            var e = t.length === 1 ? t[0] : et(t);
            this.$emit("change", e, this.focusDotIndex), this.$emit("update:modelValue", e);
          }
        }, isDiff: function(t, e) {
          return t.length !== e.length || t.some(function(r, n) {
            return r !== e[n];
          });
        }, emitError: function(t, e) {
          this.silent || console.error("[VueSlider error]: ".concat(e)), this.$emit("error", t, e);
        }, dragStartOnProcess: function(t) {
          if (this.dragOnClick) {
            this.setScale();
            var e = this.getPosByEvent(t), r = this.control.getRecentDot(e);
            if (this.dots[r].disabled) return;
            this.dragStart(r), this.control.setDotPos(e, this.focusDotIndex), this.lazy || this.syncValueByPos();
          }
        }, dragStart: function(t) {
          this.focusDotIndex = t, this.setScale(), this.states.add(A.Drag), this.states.add(A.Focus), this.$emit("drag-start", this.focusDotIndex);
        }, dragMove: function(t) {
          if (!this.states.has(A.Drag)) return !1;
          t.preventDefault();
          var e = this.getPosByEvent(t);
          this.isCrossDot(e), this.control.setDotPos(e, this.focusDotIndex), this.lazy || this.syncValueByPos();
          var r = this.control.dotsValue;
          this.$emit("dragging", r.length === 1 ? r[0] : et(r), this.focusDotIndex);
        }, isCrossDot: function(t) {
          if (this.canSort) {
            var e = this.focusDotIndex, r = t;
            if (r > this.dragRange[1] ? (r = this.dragRange[1], this.focusDotIndex++) : r < this.dragRange[0] && (r = this.dragRange[0], this.focusDotIndex--), e !== this.focusDotIndex) {
              var n = this.$refs["dot-".concat(this.focusDotIndex)];
              n && n.$el && n.$el.focus(), this.control.setDotPos(r, e);
            }
          }
        }, dragEnd: function(t) {
          var e = this;
          if (!this.states.has(A.Drag)) return !1;
          setTimeout(function() {
            e.lazy && e.syncValueByPos(), e.included && e.isNotSync ? e.control.setValue(e.modelValue) : e.control.syncDotsPos(), e.states.delete(A.Drag), e.useKeyboard && !("targetTouches" in t) || e.states.delete(A.Focus), e.$emit("drag-end", e.focusDotIndex);
          });
        }, blurHandle: function(t) {
          if (!this.states.has(A.Focus) || !this.$refs.container || this.$refs.container.contains(t.target)) return !1;
          this.states.delete(A.Focus);
        }, clickHandle: function(t) {
          if (!this.clickable || this.disabled) return !1;
          if (!this.states.has(A.Drag)) {
            this.setScale();
            var e = this.getPosByEvent(t);
            this.setValueByPos(e);
          }
        }, focus: function(t) {
          var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
          t.disabled || (this.states.add(A.Focus), this.focusDotIndex = e);
        }, blur: function() {
          this.states.delete(A.Focus);
        }, getValue: function() {
          var t = this.control.dotsValue;
          return t.length === 1 ? t[0] : t;
        }, getIndex: function() {
          var t = this.control.dotsIndex;
          return t.length === 1 ? t[0] : t;
        }, setValue: function(t) {
          this.control.setValue(Array.isArray(t) ? et(t) : [t]), this.syncValueByPos();
        }, setIndex: function(t) {
          var e = this, r = Array.isArray(t) ? t.map(function(n) {
            return e.control.getValueByIndex(n);
          }) : this.control.getValueByIndex(t);
          this.setValue(r);
        }, setValueByPos: function(t) {
          var e = this, r = this.control.getRecentDot(t);
          if (this.disabled || this.dots[r].disabled) return !1;
          this.focusDotIndex = r, this.control.setDotPos(t, r), this.syncValueByPos(), this.useKeyboard && this.states.add(A.Focus), setTimeout(function() {
            e.included && e.isNotSync ? e.control.setValue(e.modelValue) : e.control.syncDotsPos();
          });
        }, keydownHandle: function(t) {
          var e = this;
          if (!this.useKeyboard || !this.states.has(A.Focus)) return !1;
          var r = this.included && this.marks, n = g(t, { direction: this.direction, max: r ? this.control.markList.length - 1 : this.control.total, min: 0, hook: this.keydownHook });
          if (n) {
            t.preventDefault();
            var o = -1, a = 0;
            r ? (this.control.markList.some(function(l, V) {
              return l.value === e.control.dotsValue[e.focusDotIndex] && (o = n(V), !0);
            }), o < 0 ? o = 0 : o > this.control.markList.length - 1 && (o = this.control.markList.length - 1), a = this.control.markList[o].pos) : (o = n(this.control.getIndexByValue(this.control.dotsValue[this.focusDotIndex])), a = this.control.parseValue(this.control.getValueByIndex(o))), this.isCrossDot(a), this.control.setDotPos(a, this.focusDotIndex), this.syncValueByPos();
          }
        }, getPosByEvent: function(t) {
          return h(t, this.$el, this.isReverse, this.zoom)[this.isHorizontal ? "x" : "y"] / this.scale;
        }, renderSlot: function(t, e, r) {
          var n = this.$slots[t];
          return n ? n(e) : r;
        } }, created: function() {
          this.initControl();
        }, mounted: function() {
          this.bindEvent();
        }, beforeUnmount: function() {
          this.unbindEvent();
        } }), at = (0, M.Z)(Ht, [["render", P]]);
        at.VueSliderMark = _, at.VueSliderDot = H;
        var Ft = at, $t = Ft;
      }(), Y = Y.default, Y;
    }();
  });
})(yt);
var Yt = yt.exports;
const re = /* @__PURE__ */ Zt(Yt);
export {
  re as default
};
//# sourceMappingURL=vue3-histogram-slider.esm8.js.map
