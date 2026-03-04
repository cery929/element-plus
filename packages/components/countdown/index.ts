import { withInstall } from '@kn-ui/utils'
import Countdown from './src/countdown.vue'

import type { SFCWithInstall } from '@kn-ui/utils'

export const ElCountdown: SFCWithInstall<typeof Countdown> =
  withInstall(Countdown)
export default ElCountdown

export * from './src/countdown'
