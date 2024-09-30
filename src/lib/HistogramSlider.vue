<template>
  <div class="vue-histogram-slider-wrapper">
    <svg ref="svgElementRef" class="vue-histogram-view">
    </svg>
    <VueSlider
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
import { ref, computed, onMounted, watch, nextTick } from 'vue'
import * as d3 from 'd3'
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'

interface Props {
  data: number[]
  min?: number
  max?: number
  step?: number
  barWidth?: number
  barGap?: number
  barRadius?: number
  labelColor?: string
  primaryColor?: string
  holderColor?: string
  handleColor?: string
  gridTextColor?: string
  transitionDuration?: number
  fontFamily?: string
  fontSize?: number
  colors?: string[]
  updateColorOnChange?: boolean
  handleSize?: number
  grid?: boolean
  gridNum?: number
  fontColor?: string
  prettify?: (value: number) => string
}

const props = withDefaults(defineProps<Props>(), {
  step: 1,
  barWidth: 6,
  barGap: 5,
  barRadius: 4,
  labelColor: '#0091ff',
  primaryColor: '#0091ff',
  holderColor: '#dee4ec',
  handleColor: '#ffffff',
  gridTextColor: 'silver',
  transitionDuration: 80,
  fontFamily: 'Arial, sans-serif',
  fontSize: 12,
  updateColorOnChange: true,
  handleSize: 26,
  grid: true,
  gridNum: 4,
  fontColor: '#000',
  prettify: (value: number) => value.toString(),
})

const svgElementRef = ref<SVGSVGElement | null>(null)

const modelValue = defineModel<number>({ required: true })
const sliderValue = computed({
  get: () => Math.max(minValue.value, Math.min(maxValue.value, modelValue.value)),
  set: (value: number) => modelValue.value = value,
})

const minValue = computed(() => props.min ?? d3.min(props.data) ?? 0)
const maxValue = computed(() => props.max ?? d3.max(props.data) ?? 100)

const svgWidth = computed(() => {
  if (svgElementRef.value) {
    return svgElementRef.value.clientWidth
  }
  return 0
})

const svgHeight = computed(() => {
  if (svgElementRef.value) {
    return svgElementRef.value.clientHeight
  }

  return 0
})

const marks = computed(() => {
  if (props.grid) {
    const count = props.gridNum
    const step = (maxValue.value - minValue.value) / count
    const result: Record<number, string> = {}
    for (let i = 0; i <= count; i++) {
      const value = minValue.value + step * i
      result[Math.round(value)] = props.prettify(value)
    }
    return result
  }
  return null
})

const processStyle = {
  backgroundColor: props.primaryColor,
}

const tooltipStyle = {
  backgroundColor: props.labelColor,
  color: '#fff',
  fontSize: `${props.fontSize}px`,
  fontFamily: props.fontFamily,
}

let xScale: d3.ScaleLinear<number, number>
let yScale: d3.ScaleLinear<number, number>
let histogramData: d3.Bin<number, number>[]
let svg: d3.Selection<SVGSVGElement, unknown, null, undefined>
let hist: d3.Selection<SVGGElement, unknown, null, undefined>
let colorsScale: d3.ScaleLinear<string, string> | (() => string)

function renderHistogram() {
  if (!svgElementRef.value) return

  // Remove previous content
  svg = d3.select(svgElementRef.value)
  svg.selectAll('*').remove()

  const width = svgWidth.value
  const height = svgHeight.value

  xScale = d3.scaleLinear()
    .domain([minValue.value, maxValue.value])
    .range([0, width])
    .clamp(true)

  yScale = d3.scaleLinear()
    .range([height, 0])

  hist = svg.append('g').attr('class', 'histogram')

  if (props.colors && props.colors.length > 0) {
    colorsScale = d3.scaleLinear<string, string>()
      .domain([minValue.value, maxValue.value])
      .range(props.colors)
  } else {
    colorsScale = () => props.primaryColor
  }

  const binsGenerator = d3.bin()
    .domain(xScale.domain() as [number, number])
    .thresholds(width / (props.barWidth + props.barGap))

  histogramData = binsGenerator(props.data)

  yScale.domain([0, d3.max(histogramData, d => d.length) ?? 0])

  hist.selectAll('rect')
    .data(histogramData)
    .enter()
    .append('rect')
    .attr('x', d => xScale(d.x0!))
    .attr('y', d => yScale(d.length))
    .attr('width', props.barWidth)
    .attr('height', d => height - yScale(d.length))
    .attr('rx', props.barRadius)
    .attr('fill', d => getBarColor(d.x0!))
}

function updateHistogram() {
  if (!hist) return

  hist.selectAll('rect')
    .attr('fill', d => getBarColor(d.x0!))
}

function getBarColor(binValue: number): string {
  return binValue < sliderValue.value
      ? colorsScale(binValue)
      : props.holderColor
}

function onChange(value: number) {
  if (props.updateColorOnChange) {
    updateHistogram()
  }
}

onMounted(async () => {
  await nextTick()
  sliderValue.value = minValue.value
  renderHistogram()
})

watch(sliderValue, () => {
  updateHistogram()
})
</script>

<style scoped>
.vue-histogram-slider-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
