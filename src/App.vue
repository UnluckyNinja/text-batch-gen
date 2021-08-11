<template>
  <div class="m-4 grid grid-cols-3">
    <DataSetInput class="m-4" />
    <RegexMatch class="m-4" />
    <TemplateInput class="m-4" />
  </div>
  <div class="m-4 grid grid-cols-3">
    <div class="col-span-2 relative">
      <n-input class="h-full" :value="output" type="textarea" readonly autosize placeholder="这里是输出"></n-input>
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
<script lang="ts" setup>
import { provide } from 'vue'
import { NInput, NButton } from 'naive-ui'
import { useStorage } from '@vueuse/core'

import DataSetInput from './components/DataSetInput.vue'
import RegexMatch from './components/RegexMatch.vue'
import TemplateInput from './components/TemplateInput.vue'
import OptionsList from './components/OptionsList.vue'

const rawData = useStorage('rawData','')
const regexPairs = useStorage('regexPairs',[] as string[][]).value
const template = useStorage('template','')
provide('rawData', rawData)
provide('regexPairs', regexPairs)
provide('template', template)

const output = useStorage('output', '')

const options = useStorage('options', {
  input: {
    skipEmpty: true
  },
  template: {
    trim: true
  },
  join: {
    prelb: true,
    separator: '',
    postlb: true
  }
}).value
provide('options', options)

/** 
 * 流程：先获取所有模版占位符，然后遍历输入，根据单行输入元素数量进行替换，替换时先对元素预处理
 * 
 */
const generateOutput = () => {
  const lines = rawData.value.trim().split('\n')
  const results: string[] = []
  lines.forEach(line => {
    if (line.trim() === '' && options.input.skipEmpty) {
      return
    }

    let eles = line.split(/\s+/)
    let temp = template.value
    if (options.template.trim) {
      temp = temp.trim()
    }
    eles.forEach((val, i) => {
      let finalVal = val
      if (regexPairs[i] && regexPairs[i][0] && regexPairs[i][1]) {
        finalVal = val.replaceAll(new RegExp(regexPairs[i][0], 'g'), regexPairs[i][1])
      }
      temp = temp.replaceAll(new RegExp('(?<!\\\\)((?:\\\\{2})*)\\$\\{' + (i + 1) + '\\}', 'g'), '$1' + finalVal.replaceAll('$', '$$')) // (?<!\\)(?:\\{2})*\$\{\d+\}
    })
    results.push(temp)
  })
  let prefix = options.join.prelb ? '\n' : ''
  let suffix = options.join.postlb ? '\n' : ''
  output.value = results.join(prefix + options.join.separator + suffix)
    .replaceAll(/(?<!\\)((?:\\{2})*)\\\$/g, '$1$$')
    .replaceAll(/\\\\/g, '\\')
}

const copy = () => {
  navigator.clipboard.writeText(output.value)
}

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 20px;
}
</style>
