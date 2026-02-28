import { withInstall } from '@cery929-ui/utils'
import Countdown from './src/countdown.vue'

import type { SFCWithInstall } from '@cery929-ui/utils'

export const ElCountdown: SFCWithInstall<typeof Countdown> =
  withInstall(Countdown)
export default ElCountdown

export * from './src/countdown'
