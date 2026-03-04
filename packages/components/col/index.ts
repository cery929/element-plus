import { withInstall } from '@kn-ui/utils'
import Col from './src/col.vue'

import type { SFCWithInstall } from '@kn-ui/utils'

export const ElCol: SFCWithInstall<typeof Col> = withInstall(Col)
export default ElCol

export * from './src/col'
