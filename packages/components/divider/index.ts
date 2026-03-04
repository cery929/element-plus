import { withInstall } from '@kn-ui/utils'
import Divider from './src/divider.vue'

import type { SFCWithInstall } from '@kn-ui/utils'

export const ElDivider: SFCWithInstall<typeof Divider> = withInstall(Divider)
export default ElDivider

export * from './src/divider'
