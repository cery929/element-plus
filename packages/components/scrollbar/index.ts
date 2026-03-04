import { withInstall } from '@kn-ui/utils'
import Scrollbar from './src/scrollbar.vue'

import type { SFCWithInstall } from '@kn-ui/utils'

export const ElScrollbar: SFCWithInstall<typeof Scrollbar> =
  withInstall(Scrollbar)
export default ElScrollbar

export * from './src/util'
export * from './src/scrollbar'
export * from './src/thumb'
export * from './src/constants'
