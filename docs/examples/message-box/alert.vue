<template>
  <el-button plain @click="open">Click to open the Message Box</el-button>
</template>

<script lang="ts" setup>
import { ElMessage, ElMessageBox } from 'kn-ui'

import type { Action } from 'kn-ui'

const open = () => {
  ElMessageBox.alert('This is a message', 'Title', {
    // if you want to disable its autofocus
    // autofocus: false,
    confirmButtonText: 'OK',
    callback: (action: Action) => {
      ElMessage({
        type: 'info',
        message: `action: ${action}`,
      })
    },
  })
}
</script>
