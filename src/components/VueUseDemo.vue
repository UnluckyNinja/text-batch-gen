<template>
<div class="comp-root">
  <div>Value: {{value}}</div>
  <button class="btn" @click="toggle()">toggle</button>
  <button class="btn" @click="toggle(true)">set true</button>
  <button class="btn" @click="toggle(false)">set false</button>
</div>
</template>

<script lang="ts" setup>
import { useToggle } from '@vueuse/core'

const [value, toggle] = useToggle()
</script>

<style lang="postcss" scoped>
.comp-root {
  @apply m-12 shadow p-8;
}

.btn {
  @apply m-4 p-2 border rounded shadow;
}
</style>