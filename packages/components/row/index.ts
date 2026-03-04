import { withInstall } from '@kn-ui/utils'
import Row from './src/row.vue'

import type { SFCWithInstall } from '@kn-ui/utils'

export const ElRow: SFCWithInstall<typeof Row> = withInstall(Row)
export default ElRow

export * from './src/row'
export * from './src/constants'
