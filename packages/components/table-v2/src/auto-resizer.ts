import { buildProps, definePropType } from '@cery929-ui/utils'

import type { ExtractPropTypes, ExtractPublicPropTypes } from 'vue'

type AutoResizeHandler = (event: { height: number; width: number }) => void

export const autoResizerProps = buildProps({
  disableWidth: Boolean,
  disableHeight: Boolean,
  onResize: {
    type: definePropType<AutoResizeHandler>(Function),
  },
} as const)

export type AutoResizerProps = ExtractPropTypes<typeof autoResizerProps>
export type AutoResizerPropsPublic = ExtractPublicPropTypes<
  typeof autoResizerProps
>
