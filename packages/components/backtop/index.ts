import { withInstall } from '@cery929-ui/utils'
import Backtop from './src/backtop.vue'

import type { SFCWithInstall } from '@cery929-ui/utils'

export const ElBacktop: SFCWithInstall<typeof Backtop> = withInstall(Backtop)
export default ElBacktop

export * from './src/backtop'
export type { BacktopInstance } from './src/instance'
