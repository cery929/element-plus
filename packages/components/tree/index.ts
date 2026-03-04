import { withInstall } from '@kn-ui/utils'
import Tree from './src/tree.vue'

import type { SFCWithInstall } from '@kn-ui/utils'

export const ElTree: SFCWithInstall<typeof Tree> = withInstall(Tree)

export default ElTree

export * from './src/tree.type'
export * from './src/instance'
export * from './src/tokens'
export * from './src/tree'
