import { withInstall } from '@cery929-ui/utils'
import Divider from './src/divider.vue'

import type { SFCWithInstall } from '@cery929-ui/utils'

export const ElDivider: SFCWithInstall<typeof Divider> = withInstall(Divider)
export default ElDivider

export * from './src/divider'
