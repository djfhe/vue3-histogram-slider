<template>
  <div class="vue-histogram-slider-wrapper">
    <svg ref="svgElementRef" class="vue-histogram"></svg>
    <VueSlider
      class="vue-slider"
      v-model="sliderValue"
      :min="minValue"
      :max="maxValue"
      :step="step"
      :dot-size="handleSize"
      :width="svgWidth"
      :height="16"
      :marks="marks"
      :lazy="false"
      :process-style="processStyle"
      :tooltip-style="tooltipStyle"
      :tooltip="'always'"
      :tooltip-placement="['bottom']"
      :tooltip-formatter="prettify"
      @change="onChange"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch, nextTick, onBeforeUnmount } from 'vue'
import * as d3 from 'd3'
import VueSlider, { type MarkOption, type Marks, type Styles } from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'

export type MarkStyle = Omit<MarkOption, 'label'>

interface Props {
  data: number[]
  min?: number
  max?: number
  step?: number
  barWidth?: number
  barGap?: number
  barRadius?: number
  holderColor?: string
  colors?: string[]
  updateColorOnChange?: boolean
  handleSize?: number
  grid?: boolean
  gridNum?: number
  prettify?: (value: number) => string
  labelStyle?: Styles
  markStyle?: MarkStyle
  processStyle?: Styles
  tooltipStyle?: Styles
  histSliderGap?: number 
}

const props = withDefaults(defineProps<Props>(), {
  step: 1,
  barWidth: 6,
  barGap: 5,
  barRadius: 4,
  holderColor: '#dee4ec',
  updateColorOnChange: true,
  handleSize: 26,
  grid: true,
  gridNum: 4,
  histSliderGap: 0,
  colors: () => [],
  prettify: (value: number) => value.toString(),
  labelStyle: () => ({
    color: '#0091ff',
    fontFamily: 'Arial, sans-serif',
    fontSize: 12,
  }),
  markStyle: () => ({
    labelStyle: {
      color: 'silver',
      fontFamily: 'Arial, sans-serif',
      fontSize: 12,
    },
    labelActiveStyle: {
      color: '#0091ff',
    },
  }),
  processStyle: () => ({
    backgroundColor: '#0091ff',
  }),
  tooltipStyle: () => ({
    backgroundColor: '#0091ff',
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
    fontSize: 12,
  }),
})

const svgElementRef = ref<SVGSVGElement | null>(null)

const modelValue = defineModel<number>({ required: true })
const sliderValue = computed({
  get: () => Math.max(minValue.value, Math.min(maxValue.value, modelValue.value)),
  set: (value: number) => (modelValue.value = value),
})

const minValue = computed(() => props.min ?? d3.min(props.data) ?? 0)
const maxValue = computed(() => props.max ?? d3.max(props.data) ?? 100)

const svgWidth = ref(0)
const svgHeight = ref(0)

const marks = computed<Marks | undefined>(() => {
  if (props.grid) {
    const count = props.gridNum
    const step = (maxValue.value - minValue.value) / count
    const result: Marks = {}
    for (let i = 0; i <= count; i++) {
      const value = minValue.value + step * i
      result[Math.round(value)] = {
        ...props.markStyle,
        label: props.prettify(value),
      }
    }
    return result
  }
  return undefined
})

let hist: d3.Selection<SVGGElement, unknown, null, undefined> | null = null

const colorScale = computed<(value: number) => string>(() => {
  if (props.colors.length > 0) {
    return d3
      .scaleLinear<string>()
      .domain([minValue.value, maxValue.value])
      .range(props.colors) satisfies (value: number) => string
  }

  return d3
      .scaleLinear<string>()
      .domain([minValue.value, maxValue.value])
      .range(['#4facfe', '#00f2fe']) satisfies (value: number) => string
})

const xScale = computed(() => {
  const width = svgWidth.value
  return d3
    .scaleLinear()
    .domain([minValue.value, maxValue.value])
    .range([0, width])
    .clamp(true)
})

const histogramData = computed(() => {
  const binsGenerator = d3
    .bin()
    .domain(xScale.value.domain() as [number, number])
    .thresholds(Math.floor(svgWidth.value / (props.barWidth + props.barGap)))

  return binsGenerator(props.data)
})

const yScale = computed(() => {
  const height = svgHeight.value
  const maxCount = d3.max(histogramData.value, (d) => d.length) ?? 0
  return d3
    .scaleLinear()
    .range([height, 0])
    .domain([0, maxCount])
})

function renderHistogram() {
  if (!svgElementRef.value) return

  // Update svgWidth and svgHeight
  svgWidth.value = svgElementRef.value.clientWidth
  svgHeight.value = svgElementRef.value.clientHeight

  // Remove previous content
  const svg = d3.select(svgElementRef.value)
  svg.selectAll('*').remove()

  hist = svg.append('g').attr('class', 'histogram')

  hist
    .selectAll('rect')
    .data(histogramData.value)
    .enter()
    .append('rect')
    .attr('x', (d) => xScale.value(d.x0!))
    .attr('y', (d) => yScale.value(d.length))
    .attr('width', props.barWidth)
    .attr('height', (d) => svgHeight.value - yScale.value(d.length))
    .attr('rx', props.barRadius)
    .attr('fill', (d) => getBarColor(d.x0!))
}

function updateHistogram() {
  if (!hist) return

  hist
    .selectAll('rect')
    .attr('fill', (d) => getBarColor((d as d3.Bin<number, number>).x0!))
}

function getBarColor(binValue: number): string {
  return binValue < sliderValue.value ? colorScale.value(binValue) : props.holderColor
}

function onChange(value: number) {
  if (props.updateColorOnChange) {
    updateHistogram()
  }
}

onMounted(async () => {
  await nextTick()
  modelValue.value = minValue.value
  renderHistogram()
})

watch(sliderValue, () => {
  updateHistogram()
})

watch(
  () => [
    props.data,
    props.min,
    props.max,
    props.barWidth,
    props.barGap,
    props.barRadius,
    props.colors,
    props.holderColor,
    colorScale.value, // Watch processStyle backgroundColor
  ],
  () => {
    renderHistogram()
  }
)

let resizeObserver: ResizeObserver

onMounted(() => {
  if (svgElementRef.value) {
    svgWidth.value = svgElementRef.value.clientWidth
    svgHeight.value = svgElementRef.value.clientHeight

    resizeObserver = new ResizeObserver(() => {
      svgWidth.value = svgElementRef.value?.clientWidth ?? 0
      svgHeight.value = svgElementRef.value?.clientHeight ?? 0
      renderHistogram()
    })
    resizeObserver.observe(svgElementRef.value)
  }
})

onBeforeUnmount(() => {
  if (resizeObserver && svgElementRef.value) {
    resizeObserver.unobserve(svgElementRef.value)
  }
})

const histSliderGapOffset= computed(() => {
  return `${props.histSliderGap}px`
})
</script>

<style scoped>
.vue-histogram-slider-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.vue-histogram {
  pointer-events: none;
}

.vue-slider {
  flex-shrink: 0;
  margin-top: v-bind(histSliderGapOffset);
}
</style>
