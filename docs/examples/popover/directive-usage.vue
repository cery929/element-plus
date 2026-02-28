<template>
  <el-button v-popover="popoverRef" v-click-outside="onClickOutside">
    Click me
  </el-button>

  <el-popover ref="popoverRef" trigger="click" title="With title" virtual-triggering persistent>
    <span> Some content </span>
  </el-popover>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ClickOutside as vClickOutside } from 'cery929-ui'

import type { PopoverInstance } from 'cery929-ui'

const popoverRef = ref<PopoverInstance>()
const onClickOutside = () => {
  popoverRef.value?.hide()
}
</script>
