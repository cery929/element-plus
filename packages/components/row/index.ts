import { withInstall } from '@cery929-ui/utils'
import Row from './src/row.vue'

import type { SFCWithInstall } from '@cery929-ui/utils'

export const ElRow: SFCWithInstall<typeof Row> = withInstall(Row)
export default ElRow

export * from './src/row'
export * from './src/constants'
