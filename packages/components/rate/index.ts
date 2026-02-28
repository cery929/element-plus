import { withInstall } from '@cery929-ui/utils'
import Rate from './src/rate.vue'

import type { SFCWithInstall } from '@cery929-ui/utils'

export const ElRate: SFCWithInstall<typeof Rate> = withInstall(Rate)
export default ElRate

export * from './src/rate'
