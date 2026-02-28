import { withInstall } from '@cery929-ui/utils'
import Tree from './src/tree.vue'

import type { SFCWithInstall } from '@cery929-ui/utils'

export const ElTree: SFCWithInstall<typeof Tree> = withInstall(Tree)

export default ElTree

export * from './src/tree.type'
export * from './src/instance'
export * from './src/tokens'
export * from './src/tree'
