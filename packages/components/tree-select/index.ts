import { withInstall } from '@cery929-ui/utils'
import TreeSelect from './src/tree-select.vue'

import type { SFCWithInstall } from '@cery929-ui/utils'

export const ElTreeSelect: SFCWithInstall<typeof TreeSelect> =
  withInstall(TreeSelect)

export default ElTreeSelect

export type { TreeSelectInstance } from './src/instance'
