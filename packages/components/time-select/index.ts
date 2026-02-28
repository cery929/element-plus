import { withInstall } from '@cery929-ui/utils'
import TimeSelect from './src/time-select.vue'

import type { SFCWithInstall } from '@cery929-ui/utils'

export const ElTimeSelect: SFCWithInstall<typeof TimeSelect> =
  withInstall(TimeSelect)
export default ElTimeSelect

export * from './src/time-select'
