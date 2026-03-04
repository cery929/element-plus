import { withInstall } from '@kn-ui/utils'
import Cascader from './src/cascader.vue'

import type { SFCWithInstall } from '@kn-ui/utils'

export const ElCascader: SFCWithInstall<typeof Cascader> = withInstall(Cascader)

export default ElCascader

export * from './src/cascader'
export * from './src/instances'
