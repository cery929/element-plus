import { withInstall } from '@kn-ui/utils'
import Progress from './src/progress.vue'

import type { SFCWithInstall } from '@kn-ui/utils'

export const ElProgress: SFCWithInstall<typeof Progress> = withInstall(Progress)
export default ElProgress

export * from './src/progress'
