import { withInstall } from '@cery929-ui/utils'
import Col from './src/col.vue'

import type { SFCWithInstall } from '@cery929-ui/utils'

export const ElCol: SFCWithInstall<typeof Col> = withInstall(Col)
export default ElCol

export * from './src/col'
