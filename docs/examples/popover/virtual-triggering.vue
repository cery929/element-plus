<template>
  <el-button ref="buttonRef" v-click-outside="onClickOutside">
    Click me
  </el-button>

  <el-popover
    ref="popoverRef"
    :virtual-ref="buttonRef"
    trigger="click"
    title="With title"
    virtual-triggering
  >
    <span> Some content </span>
  </el-popover>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ClickOutside as vClickOutside } from 'kn-ui'

import type { PopoverInstance } from 'kn-ui'

const buttonRef = ref()
const popoverRef = ref<PopoverInstance>()
const onClickOutside = () => {
  popoverRef.value?.hide()
}
</script>
