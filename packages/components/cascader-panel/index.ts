import { withInstall } from '@cery929-ui/utils'
import CascaderPanel from './src/index.vue'

import type { SFCWithInstall } from '@cery929-ui/utils'

export const ElCascaderPanel: SFCWithInstall<typeof CascaderPanel> =
  withInstall(CascaderPanel)

export default ElCascaderPanel
export * from './src/types'
export * from './src/config'
export * from './src/instance'
