<script lang="ts" setup>
import { NInput, NButton, NInputGroup, NInputGroupLabel, NPopover } from 'naive-ui'


const { regexPairs, regexPairsSize: dataSize } = useBatchgen()

const addRegex = () => {
  dataSize.value += 1
  var newIndex = dataSize.value - 1
  console.log(regexPairs[newIndex])
  if (!regexPairs[newIndex]) {
    regexPairs[newIndex] = ['', '']
  }
}

</script>

<template>
  <div class="comp-root">
    <n-input-group v-for="i in dataSize" :key="i">
      <n-input-group-label>{{ i }}</n-input-group-label>
      <n-input v-model:value="regexPairs[i - 1][0]" placeholder="匹配正则" />
      <n-input v-model:value="regexPairs[i - 1][1]" placeholder="替换正则" />
    </n-input-group>
    <div class="m-4 flex justify-evenly">
      <n-popover trigger="hover" :delay="500">
        <template #trigger>
          <n-button @click="addRegex" type="info" ghost>添加预处理替换正则</n-button>
        </template>
        <span>每个正则对应每行第n项元素</span>
      </n-popover>
      <n-button @click="dataSize -= 1" type="warning" ghost>移除最后一个正则</n-button>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
</style>