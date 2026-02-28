import { withInstall } from '@cery929-ui/utils'
import Result from './src/result.vue'

import type { SFCWithInstall } from '@cery929-ui/utils'

export const ElResult: SFCWithInstall<typeof Result> = withInstall(Result)

export default ElResult

export * from './src/result'
