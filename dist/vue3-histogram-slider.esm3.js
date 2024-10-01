import { defineComponent as R, mergeModels as F, useCssVars as O, ref as y, useModel as E, computed as o, watch as b, onMounted as G, nextTick as N, onBeforeUnmount as U, openBlock as M, createElementBlock as W, createVNode as q, unref as D } from "vue";
import T from "./vue3-histogram-slider.esm6.js";
import $ from "./vue3-histogram-slider.esm7.js";
import A from "./vue3-histogram-slider.esm8.js";
import p from "./vue3-histogram-slider.esm9.js";
import j from "./vue3-histogram-slider.esm10.js";
import I from "./vue3-histogram-slider.esm11.js";
const J = { class: "vue-histogram-slider-wrapper" }, _ = /* @__PURE__ */ R({
  __name: "HistogramSlider",
  props: /* @__PURE__ */ F({
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
    prettify: { type: Function, default: (d) => d.toString() },
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
    tooltip: { default: "always" }
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(d) {
    O((e) => ({
      "410e416a": B.value
    }));
    const t = d, a = y(null), f = E(d, "modelValue"), m = o({
      get: () => Math.max(r.value, Math.min(i.value, f.value)),
      set: (e) => f.value = e
    }), r = o(() => t.min ?? $(t.data) ?? 0), i = o(() => t.max ?? A(t.data) ?? 100), u = y(0), s = y(0), H = o(() => {
      if (t.grid) {
        const e = t.gridNum, l = (i.value - r.value) / e, n = {};
        for (let g = 0; g <= e; g++) {
          const w = r.value + l * g;
          n[Math.round(w)] = {
            ...t.markStyle,
            label: t.prettify(w)
          };
        }
        return n;
      }
    });
    let c = null;
    const S = o(() => t.colors.length > 0 ? p().domain([r.value, i.value]).range(t.colors) : p().domain([r.value, i.value]).range(["#4facfe", "#00f2fe"])), x = o(() => {
      const e = u.value;
      return p().domain([r.value, i.value]).range([0, e]).clamp(!0);
    }), k = o(() => j().domain(x.value.domain()).thresholds(Math.floor(u.value / (t.barWidth + t.barGap)))(t.data)), C = o(() => {
      const e = s.value, l = A(k.value, (n) => n.length) ?? 0;
      return p().range([e, 0]).domain([0, l]);
    });
    function h() {
      if (!a.value) return;
      u.value = a.value.clientWidth, s.value = a.value.clientHeight;
      const e = I(a.value);
      e.selectAll("*").remove(), c = e.append("g").attr("class", "histogram"), c.selectAll("rect").data(k.value).enter().append("rect").attr("x", (l) => x.value(l.x0)).attr("y", (l) => C.value(l.length)).attr("width", t.barWidth).attr("height", (l) => s.value - C.value(l.length)).attr("rx", t.barRadius).attr("fill", (l) => z(l.x0));
    }
    function V() {
      c && c.selectAll("rect").attr("fill", (e) => z(e.x0));
    }
    b(f, () => {
      V();
    });
    function z(e) {
      return e < m.value ? S.value(e) : t.holderColor;
    }
    G(async () => {
      await N(), f.value = r.value, h();
    }), b(m, () => {
      V();
    }), b(
      () => [
        t.data,
        t.min,
        t.max,
        t.barWidth,
        t.barGap,
        t.barRadius,
        t.colors,
        t.holderColor,
        S.value
        // Watch processStyle backgroundColor
      ],
      () => {
        h();
      }
    );
    let v;
    G(() => {
      a.value && (u.value = a.value.clientWidth, s.value = a.value.clientHeight, v = new ResizeObserver(() => {
        var e, l;
        u.value = ((e = a.value) == null ? void 0 : e.clientWidth) ?? 0, s.value = ((l = a.value) == null ? void 0 : l.clientHeight) ?? 0, h();
      }), v.observe(a.value));
    }), U(() => {
      v && a.value && v.unobserve(a.value);
    });
    const B = o(() => `${t.histSliderGap}px`);
    return (e, l) => (M(), W("div", J, [
      (M(), W("svg", {
        ref_key: "svgElementRef",
        ref: a,
        class: "vue-histogram"
      }, null, 512)),
      q(D(T), {
        class: "vue-slider",
        modelValue: m.value,
        "onUpdate:modelValue": l[0] || (l[0] = (n) => m.value = n),
        min: r.value,
        max: i.value,
        step: e.step,
        "dot-size": e.handleSize,
        width: u.value,
        height: 16,
        marks: H.value,
        lazy: !1,
        "process-style": e.processStyle,
        "tooltip-style": e.tooltipStyle,
        tooltip: e.tooltip,
        "tooltip-placement": ["bottom"],
        "tooltip-formatter": e.prettify
      }, null, 8, ["modelValue", "min", "max", "step", "dot-size", "width", "marks", "process-style", "tooltip-style", "tooltip", "tooltip-formatter"])
    ]));
  }
});
export {
  _ as default
};
//# sourceMappingURL=vue3-histogram-slider.esm3.js.map
