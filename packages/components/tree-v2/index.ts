import { withInstall } from '@kn-ui/utils'
import TreeV2 from './src/tree.vue'

import type { SFCWithInstall } from '@kn-ui/utils'

export const ElTreeV2: SFCWithInstall<typeof TreeV2> = withInstall(TreeV2)
export default ElTreeV2

export type { TreeV2Instance } from './src/instance'
