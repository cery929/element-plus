<template>
  <div :class="[ns.e('item'), ns.e(variant)]">
    <picture-filled v-if="variant === 'image'" />
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from '@kn-ui/hooks'
import { PictureFilled } from '@kn-ui/icons-vue'

import type { SkeletonItemProps } from './skeleton-item.ts'

defineOptions({
  name: 'ElSkeletonItem',
})
withDefaults(defineProps<SkeletonItemProps>(), {
  variant: 'text',
})
const ns = useNamespace('skeleton')
</script>
