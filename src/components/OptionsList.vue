<template>
  <div class="comp-root divide-y">
    <div class="text-3xl">选项：</div>
    <div class="flex m-2 items-center">
      <div class="text-xl self-start">输入：</div>
      <div class="flex-auto p-2 space-y-2">
        <div>
          <span>忽略空行：</span>
          <n-switch v-model:value="options.input.skipEmpty"></n-switch>
        </div>
        <div>
          <span>空端裁剪：</span>
          <n-switch v-model:value="options.input.trim"></n-switch>
        </div>
      </div>
    </div>
    <div class="flex m-2 items-center">
      <div class="text-xl self-start">模版：</div>
      <div class="p-2">
        <span>空端裁剪：</span>
        <n-switch v-model:value="options.template.trim"></n-switch>
      </div>
    </div>
    <div class="flex m-2 items-center">
      <div class="text-xl self-start">生成：</div>
      <div class="flex-auto p-2 space-y-2">
        <div>
          <span>前换行符：</span>
          <n-switch v-model:value="options.join.prelb"></n-switch>
        </div>
        <div>
          <span>分隔内容：</span>
          <n-input class="option-input" v-model:value="options.join.separator" />
        </div>
        <div>
          <span>后换行符：</span>
          <n-switch v-model:value="options.join.postlb"></n-switch>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { NInput, NSwitch } from 'naive-ui'
import { inject, Ref } from 'vue'


let options = inject<Ref<any>>('options') as any
</script>

<style lang="postcss" scoped>
.comp-root .option-input {
  @apply w-auto;
}
</style>