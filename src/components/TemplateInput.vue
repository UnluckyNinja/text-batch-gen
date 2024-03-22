<script lang="ts" setup>
import { NInput } from 'naive-ui'

const { template} = useBatchgen()
</script>

<template>
  <div class="comp-root">
    <n-input class="font-mono text-editor" :input-props="{wrap: 'off', spellcheck: false}"  v-model:value="template" type="textarea" :rows="10" placeholder="批量模版，模版变量从${1}开始" />
  </div>
</template>

<style lang="postcss" scoped>
</style>