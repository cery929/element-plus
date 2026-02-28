import { withInstall } from '@cery929-ui/utils'
import Progress from './src/progress.vue'

import type { SFCWithInstall } from '@cery929-ui/utils'

export const ElProgress: SFCWithInstall<typeof Progress> = withInstall(Progress)
export default ElProgress

export * from './src/progress'
