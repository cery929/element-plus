import { withInstall } from '@cery929-ui/utils'
import Popconfirm from './src/popconfirm.vue'

import type { SFCWithInstall } from '@cery929-ui/utils'

export const ElPopconfirm: SFCWithInstall<typeof Popconfirm> =
  withInstall(Popconfirm)
export default ElPopconfirm

export * from './src/popconfirm'
