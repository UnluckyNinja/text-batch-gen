<template>
  <div class="comp-root">
    <n-input v-model:value="template" type="textarea" :rows="10" placeholder="批量模版，模版变量从${1}开始" />
  </div>
</template>

<script lang="ts" setup>
import { NInput } from 'naive-ui'
import { inject, ref, Ref } from 'vue'


let template = inject<Ref<string>>('template', ref(''))
</script>

<style lang="postcss" scoped>
</style>