import { computed, defineComponent, h, renderSlot } from 'vue'
import { buildProps } from '@cery929-ui/utils'
import { useNamespace } from '@cery929-ui/hooks'

import type { ExtractPropTypes, ExtractPublicPropTypes } from 'vue'

export const spaceItemProps = buildProps({
  prefixCls: {
    type: String,
  },
} as const)
export type SpaceItemProps = ExtractPropTypes<typeof spaceItemProps>
export type SpaceItemPropsPublic = ExtractPublicPropTypes<typeof spaceItemProps>

const SpaceItem = defineComponent({
  name: 'ElSpaceItem',

  props: spaceItemProps,

  setup(props, { slots }) {
    const ns = useNamespace('space')

    const classes = computed(() => `${props.prefixCls || ns.b()}__item`)

    return () =>
      h('div', { class: classes.value }, renderSlot(slots, 'default'))
  },
})
export type SpaceItemInstance = InstanceType<typeof SpaceItem> & unknown

export default SpaceItem
