import { withInstall } from '@kn-ui/utils'
import Watermark from './src/watermark.vue'

import type { SFCWithInstall } from '@kn-ui/utils'

export const ElWatermark: SFCWithInstall<typeof Watermark> =
  withInstall(Watermark)
export default ElWatermark

export * from './src/watermark'
