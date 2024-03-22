<script lang="ts" setup>
import { NInput } from 'naive-ui'

const { inputData } = useBatchgen()

</script>

<template>
  <div class="comp-root">
    <n-input class="font-mono text-editor" :input-props="{wrap: 'off', spellcheck: false}"  v-model:value="inputData" type="textarea" :rows="10" placeholder="原始数据" />
  </div>
</template>

<style lang="postcss" scoped>
</style>