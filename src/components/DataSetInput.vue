<template>
  <div class="comp-root">
    <n-input v-model:value="rawData" type="textarea" :rows="10" placeholder="原始数据" />
  </div>
</template>

<script lang="ts" setup>
import { inject, ref, Ref } from 'vue'
import { NInput } from 'naive-ui'


let rawData = inject<Ref<string>>('rawData', ref(''))

</script>

<style lang="postcss" scoped>
</style>