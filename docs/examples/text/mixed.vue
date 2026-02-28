<template>
  <el-space direction="vertical">
    <el-text>
      <el-icon>
        <ElementPlus />
      </el-icon>
      cery929-ui
    </el-text>
    <el-row>
      <el-text>Rate</el-text>
      <el-rate class="ml-1" />
    </el-row>
    <el-text>
      This is text mixed icon
      <el-icon>
        <Bell />
      </el-icon>
      and component
      <el-button>Button</el-button>
    </el-text>
  </el-space>
</template>

<script lang="ts" setup>
import { Bell, ElementPlus } from '@cery929-ui/icons-vue'
</script>
