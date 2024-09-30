import { defineComponent as O, mergeModels as F, useCssVars as E, ref as y, useModel as N, computed as o, onMounted as w, nextTick as U, watch as G, onBeforeUnmount as q, openBlock as M, createElementBlock as W, createVNode as D, unref as T } from "vue";
import "./vue3-histogram-slider.esm6.js";
import "./vue3-histogram-slider.esm7.js";
import _ from "./vue3-histogram-slider.esm8.js";
/* empty css                           */
import $ from "./vue3-histogram-slider.esm10.js";
import A from "./vue3-histogram-slider.esm11.js";
import v from "./vue3-histogram-slider.esm12.js";
import j from "./vue3-histogram-slider.esm13.js";
import I from "./vue3-histogram-slider.esm14.js";
const J = { class: "vue-histogram-slider-wrapper" }, le = /* @__PURE__ */ O({
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
    histSliderGap: { default: 0 }
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(d) {
    E((e) => ({
      "2217ac24": R.value
    }));
    const t = d, l = y(null), p = N(d, "modelValue"), f = o({
      get: () => Math.max(r.value, Math.min(i.value, p.value)),
      set: (e) => p.value = e
    }), r = o(() => t.min ?? $(t.data) ?? 0), i = o(() => t.max ?? A(t.data) ?? 100), n = y(0), s = y(0), H = o(() => {
      if (t.grid) {
        const e = t.gridNum, a = (i.value - r.value) / e, u = {};
        for (let g = 0; g <= e; g++) {
          const z = r.value + a * g;
          u[Math.round(z)] = {
            ...t.markStyle,
            label: t.prettify(z)
          };
        }
        return u;
      }
    });
    let m = null;
    const b = o(() => t.colors.length > 0 ? v().domain([r.value, i.value]).range(t.colors) : v().domain([r.value, i.value]).range(["#4facfe", "#00f2fe"])), S = o(() => {
      const e = n.value;
      return v().domain([r.value, i.value]).range([0, e]).clamp(!0);
    }), x = o(() => j().domain(S.value.domain()).thresholds(Math.floor(n.value / (t.barWidth + t.barGap)))(t.data)), C = o(() => {
      const e = s.value, a = A(x.value, (u) => u.length) ?? 0;
      return v().range([e, 0]).domain([0, a]);
    });
    function h() {
      if (!l.value) return;
      n.value = l.value.clientWidth, s.value = l.value.clientHeight;
      const e = I(l.value);
      e.selectAll("*").remove(), m = e.append("g").attr("class", "histogram"), m.selectAll("rect").data(x.value).enter().append("rect").attr("x", (a) => S.value(a.x0)).attr("y", (a) => C.value(a.length)).attr("width", t.barWidth).attr("height", (a) => s.value - C.value(a.length)).attr("rx", t.barRadius).attr("fill", (a) => k(a.x0));
    }
    function V() {
      m && m.selectAll("rect").attr("fill", (e) => k(e.x0));
    }
    function k(e) {
      return e < f.value ? b.value(e) : t.holderColor;
    }
    function B(e) {
      t.updateColorOnChange && V();
    }
    w(async () => {
      await U(), p.value = r.value, h();
    }), G(f, () => {
      V();
    }), G(
      () => [
        t.data,
        t.min,
        t.max,
        t.barWidth,
        t.barGap,
        t.barRadius,
        t.colors,
        t.holderColor,
        b.value
        // Watch processStyle backgroundColor
      ],
      () => {
        h();
      }
    );
    let c;
    w(() => {
      l.value && (n.value = l.value.clientWidth, s.value = l.value.clientHeight, c = new ResizeObserver(() => {
        var e, a;
        n.value = ((e = l.value) == null ? void 0 : e.clientWidth) ?? 0, s.value = ((a = l.value) == null ? void 0 : a.clientHeight) ?? 0, h();
      }), c.observe(l.value));
    }), q(() => {
      c && l.value && c.unobserve(l.value);
    });
    const R = o(() => `${t.histSliderGap}px`);
    return (e, a) => (M(), W("div", J, [
      (M(), W("svg", {
        ref_key: "svgElementRef",
        ref: l,
        class: "vue-histogram"
      }, null, 512)),
      D(T(_), {
        class: "vue-slider",
        modelValue: f.value,
        "onUpdate:modelValue": a[0] || (a[0] = (u) => f.value = u),
        min: r.value,
        max: i.value,
        step: e.step,
        "dot-size": e.handleSize,
        width: n.value,
        height: 16,
        marks: H.value,
        lazy: !1,
        "process-style": e.processStyle,
        "tooltip-style": e.tooltipStyle,
        tooltip: "always",
        "tooltip-placement": ["bottom"],
        "tooltip-formatter": e.prettify,
        onChange: B
      }, null, 8, ["modelValue", "min", "max", "step", "dot-size", "width", "marks", "process-style", "tooltip-style", "tooltip-formatter"])
    ]));
  }
});
export {
  le as default
};
//# sourceMappingURL=vue3-histogram-slider.esm3.js.map
