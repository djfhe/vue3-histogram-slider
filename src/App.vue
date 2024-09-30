<template>
  <div>
    <HistogramSlider
      style="margin: 200px auto; width: 50%"
      :width="900"
      :bar-height="110"
      :data="data"
      :prettify="prettify"
      :grid="true"
      :grid-num="2"
      :colors="['#4facfe', '#00f2fe']"
      v-model="sliderValue1"
      @finish="finish"
    />
<!-- 
    <HistogramSlider
      v-model="sliderValue2"
      style="margin: 200px auto"
      :width="900"
      :bar-height="110"
      :data="data"
      :prettify="prettify"
      :grid="true"
      :grid-num="2"
      :colors="['#4facfe', '#00f2fe']"
      @finish="finish"
      resettable
      v-slot="{ reset }"
    >
      <button @click="reset">Ah</button>
    </HistogramSlider> -->
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import HistogramSlider from './lib/HistogramSlider.vue'
import dataJson from '../resources/data.json'

const data = ref<number[]>(dataJson.map((d: string) => new Date(d).valueOf()))

const sliderValue1 = ref<number>(0)
const sliderValue2 = ref<number>(0)
function prettify(ts: number): string {
  return new Date(ts).toLocaleDateString('en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

function finish(val: any) {
  console.log('Slider finished:', val)
}
</script>
