<script lang="ts" setup>
import { NInput, NButton } from 'naive-ui'

import DataSetInput from './components/DataSetInput.vue'
import RegexMatch from './components/RegexMatch.vue'
import TemplateInput from './components/TemplateInput.vue'
import OptionsList from './components/OptionsList.vue'
import { generateOutput, useBatchgen } from './composables/store'

const { output } = useBatchgen()

const copy = () => {
  navigator.clipboard.writeText(output.value)
}

</script>

<template>
  <div class="m-4 grid grid-cols-3">
    <DataSetInput class="m-4" />
    <RegexMatch class="m-4" />
    <TemplateInput class="m-4" />
  </div>
  <div class="m-4 grid grid-cols-3">
    <div class="col-span-2 relative">
      <n-input class="h-full font-mono text-editor" :input-props="{wrap: 'off', spellcheck: false}" :value="output" type="textarea" readonly autosize placeholder="这里是输出"></n-input>
      <!-- <div class="absolute inset-0 flex place-content-center opacity-0 transition hover:opacity-80 backdrop-filter backdrop-blur">
        <div class="flex items-center">
          <span class="text-4xl">点击复制</span>
        </div>
      </div>-->
    </div>
    <div class="m-4 col-span-1">
      <OptionsList></OptionsList>
      <n-button size="large" block type="primary" @click="generateOutput">生成</n-button>
      <n-button class="mt-4" size="large" block type="primary" @click="copy">复制</n-button>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 20px;
}

.text-editor textarea {
  white-space: pre !important;
  overflow-wrap: normal;
}

</style>
