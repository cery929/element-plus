import { withInstall } from '@kn-ui/utils'
import TimeSelect from './src/time-select.vue'

import type { SFCWithInstall } from '@kn-ui/utils'

export const ElTimeSelect: SFCWithInstall<typeof TimeSelect> =
  withInstall(TimeSelect)
export default ElTimeSelect

export * from './src/time-select'
