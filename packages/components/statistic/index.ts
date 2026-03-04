import { withInstall } from '@kn-ui/utils'
import Statistic from './src/statistic.vue'

import type { SFCWithInstall } from '@kn-ui/utils'

export const ElStatistic: SFCWithInstall<typeof Statistic> =
  withInstall(Statistic)

export default ElStatistic
export * from './src/statistic'
