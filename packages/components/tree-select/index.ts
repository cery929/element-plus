import { withInstall } from '@kn-ui/utils'
import TreeSelect from './src/tree-select.vue'

import type { SFCWithInstall } from '@kn-ui/utils'

export const ElTreeSelect: SFCWithInstall<typeof TreeSelect> =
  withInstall(TreeSelect)

export default ElTreeSelect

export type { TreeSelectInstance } from './src/instance'
