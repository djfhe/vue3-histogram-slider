import { defineComponent as D, mergeModels as E, useCssVars as N, computed as o, ref as c, useModel as U, watch as g, onMounted as G, nextTick as j, onBeforeUnmount as q, openBlock as A, createElementBlock as B, createVNode as T, unref as $ } from "vue";
import I from "./vue3-histogram-slider.esm6.js";
import { debouncedWatch as J } from "./vue3-histogram-slider.esm7.js";
import K from "./vue3-histogram-slider.esm8.js";
import H from "./vue3-histogram-slider.esm9.js";
import b from "./vue3-histogram-slider.esm10.js";
import L from "./vue3-histogram-slider.esm11.js";
import P from "./vue3-histogram-slider.esm12.js";
const Q = { class: "vue-histogram-slider-wrapper" }, oe = /* @__PURE__ */ D({
  __name: "HistogramSlider",
  props: /* @__PURE__ */ E({
    data: {},
    min: {},
    max: {},
    step: { default: 1 },
    barWidth: { default: 6 },
    barGap: { default: 5 },
    barRadius: { default: 4 },
    holderColor: { default: "#dee4ec" },
    colors: { default: () => [] },
    updateColorOnChange: { type: Boolean, default: !0 },
    handleSize: { default: 26 },
    grid: { type: Boolean, default: !0 },
    gridNum: { default: 4 },
    prettify: { type: Function, default: (f) => f.toString() },
    labelStyle: { default: () => ({
      color: "#0091ff",
      fontFamily: "Arial, sans-serif",
      fontSize: 12
    }) },
    markStyle: { default: () => ({
      labelStyle: {
        color: "silver",
        fontFamily: "Arial, sans-serif",
        fontSize: 12
      },
      labelActiveStyle: {
        color: "#0091ff"
      }
    }) },
    processStyle: { default: () => ({
      backgroundColor: "#0091ff"
    }) },
    tooltipStyle: { default: () => ({
      backgroundColor: "#0091ff",
      color: "#fff",
      fontFamily: "Arial, sans-serif",
      fontSize: 12
    }) },
    histSliderGap: { default: 0 },
    tooltip: { default: "always" },
    debounced: { type: [Boolean, Object], default: !1 }
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(f) {
    N((e) => ({
      "97da53ec": F.value
    }));
    const t = f, O = o(() => typeof t.debounced == "object" ? {
      wait: t.debounced.wait ?? 0,
      maxWait: t.debounced.maxWait ?? 0
    } : {
      wait: 0,
      maxWait: 0
    }), l = c(null), y = c(!1), u = U(f, "modelValue"), m = c(u.value);
    g(u, () => {
      y.value || (m.value = u.value);
    }), J(m, (e) => {
      y.value = !1, u.value = e;
    }, O.value);
    const v = o({
      get: () => Math.max(r.value, Math.min(n.value, m.value)),
      set: (e) => {
        y.value = !0, m.value = e;
      }
    }), r = o(() => t.min ?? K(t.data) ?? 0), n = o(() => t.max ?? H(t.data) ?? 100), i = c(0), d = c(0), R = o(() => {
      if (t.grid) {
        const e = t.gridNum, a = (n.value - r.value) / e, s = {};
        for (let x = 0; x <= e; x++) {
          const M = r.value + a * x;
          s[Math.round(M)] = {
            ...t.markStyle,
            label: t.prettify(M)
          };
        }
        return s;
      }
    });
    let p = null;
    const w = o(() => t.colors.length > 0 ? b().domain([r.value, n.value]).range(t.colors) : b().domain([r.value, n.value]).range(["#4facfe", "#00f2fe"])), V = o(() => {
      const e = i.value;
      return b().domain([r.value, n.value]).range([0, e]).clamp(!0);
    }), W = o(() => L().domain(V.value.domain()).thresholds(Math.floor(i.value / (t.barWidth + t.barGap)))(t.data)), k = o(() => {
      const e = d.value, a = H(W.value, (s) => s.length) ?? 0;
      return b().range([e, 0]).domain([0, a]);
    });
    function S() {
      if (!l.value) return;
      i.value = l.value.clientWidth, d.value = l.value.clientHeight;
      const e = P(l.value);
      e.selectAll("*").remove(), p = e.append("g").attr("class", "histogram"), p.selectAll("rect").data(W.value).enter().append("rect").attr("x", (a) => V.value(a.x0)).attr("y", (a) => k.value(a.length)).attr("width", t.barWidth).attr("height", (a) => d.value - k.value(a.length)).attr("rx", t.barRadius).attr("fill", (a) => z(a.x0));
    }
    function C() {
      p && p.selectAll("rect").attr("fill", (e) => z(e.x0));
    }
    g(u, () => {
      C();
    });
    function z(e) {
      return e < v.value ? w.value(e) : t.holderColor;
    }
    G(async () => {
      await j(), u.value = r.value, S();
    }), g(v, () => {
      C();
    }), g(
      () => [
        t.data,
        t.min,
        t.max,
        t.barWidth,
        t.barGap,
        t.barRadius,
        t.colors,
        t.holderColor,
        w.value
        // Watch processStyle backgroundColor
      ],
      () => {
        S();
      }
    );
    let h;
    G(() => {
      l.value && (i.value = l.value.clientWidth, d.value = l.value.clientHeight, h = new ResizeObserver(() => {
        var e, a;
        i.value = ((e = l.value) == null ? void 0 : e.clientWidth) ?? 0, d.value = ((a = l.value) == null ? void 0 : a.clientHeight) ?? 0, S();
      }), h.observe(l.value));
    }), q(() => {
      h && l.value && h.unobserve(l.value);
    });
    const F = o(() => `${t.histSliderGap}px`);
    return (e, a) => (A(), B("div", Q, [
      (A(), B("svg", {
        ref_key: "svgElementRef",
        ref: l,
        class: "vue-histogram"
      }, null, 512)),
      T($(I), {
        class: "vue-slider",
        modelValue: v.value,
        "onUpdate:modelValue": a[0] || (a[0] = (s) => v.value = s),
        min: r.value,
        max: n.value,
        step: e.step,
        "dot-size": e.handleSize,
        width: i.value,
        height: 16,
        marks: R.value,
        lazy: !1,
        "process-style": e.processStyle,
        "tooltip-style": e.tooltipStyle,
        tooltip: e.tooltip,
        "tooltip-placement": ["bottom"],
        "tooltip-formatter": e.prettify,
        duration: 0
      }, null, 8, ["modelValue", "min", "max", "step", "dot-size", "width", "marks", "process-style", "tooltip-style", "tooltip", "tooltip-formatter"])
    ]));
  }
});
export {
  oe as default
};
//# sourceMappingURL=vue3-histogram-slider.esm3.js.map
