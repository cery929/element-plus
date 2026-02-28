<template>
  <div
    :class="[
      ns.b(),
      ns.is(`${shadow || globalConfig?.shadow || 'always'}-shadow`),
    ]"
  >
    <div v-if="$slots.header || header" :class="[ns.e('header'), headerClass]">
      <slot name="header">{{ header }}</slot>
    </div>
    <div :class="[ns.e('body'), bodyClass]" :style="bodyStyle">
      <slot />
    </div>
    <div v-if="$slots.footer || footer" :class="[ns.e('footer'), footerClass]">
      <slot name="footer">{{ footer }}</slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from '@cery929-ui/hooks'
import { useGlobalConfig } from '@cery929-ui/components/config-provider'

import type { CardProps } from './card'

const globalConfig = useGlobalConfig('card')

defineOptions({
  name: 'ElCard',
})

withDefaults(defineProps<CardProps>(), {
  header: '',
  footer: '',
  bodyStyle: '',
  shadow: undefined,
})

const ns = useNamespace('card')
</script>
