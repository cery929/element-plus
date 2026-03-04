<template>
  <main :class="ns.b()">
    <slot />
  </main>
</template>

<script lang="ts" setup>
import { useNamespace } from '@kn-ui/hooks'

defineOptions({
  name: 'ElMain',
})

const ns = useNamespace('main')
</script>
