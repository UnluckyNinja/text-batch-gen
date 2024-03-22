<script lang="ts" setup>
import { NInput, NSwitch, NButton, NInputGroup } from 'naive-ui'

const { settings: options, reset } = useSettings()

const toggleRegex = ()=>{
  options.value.input.separatorRegex = !options.value.input.separatorRegex
}
</script>

<template>
  <div class="comp-root divide-y divide-x-0 divide-slate-200 divide-solid">
    <div class="flex">
      <div class="text-3xl">选项：</div>
      <n-button class="ml-auto" type="error" @click="reset">重置</n-button>
    </div>
    <div class="flex m-2 items-center">
      <div class="text-xl self-start">输入：</div>
      <div class="flex-auto p-2 space-y-2">
        <div class="flex items-center">
          <span class="whitespace-nowrap">分隔符：</span>
          <n-input-group>
            <n-input class="min-w-20" autosize :default-value="options.input.separator" v-model:value="options.input.separator" />
            <n-button :type="options.input.separatorRegex ? 'info' : undefined" @click="toggleRegex">
              <div class="i-bi-regex text-lg"></div>
            </n-button>
          </n-input-group>
        </div>
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
        <div class="flex items-center">
          <span class="flex- items-center">分隔符：</span>
          <n-input class="min-w-12" placeholder="," autosize v-model:value="options.join.separator" />
        </div>
        <div>
          <span>后换行符：</span>
          <n-switch v-model:value="options.join.postlb"></n-switch>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
</style>