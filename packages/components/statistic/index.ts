import { withInstall } from '@cery929-ui/utils'
import Statistic from './src/statistic.vue'

import type { SFCWithInstall } from '@cery929-ui/utils'

export const ElStatistic: SFCWithInstall<typeof Statistic> =
  withInstall(Statistic)

export default ElStatistic
export * from './src/statistic'
