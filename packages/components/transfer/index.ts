import { withInstall } from '@cery929-ui/utils'
import Transfer from './src/transfer.vue'

import type { SFCWithInstall } from '@cery929-ui/utils'

export const ElTransfer: SFCWithInstall<typeof Transfer> = withInstall(Transfer)
export default ElTransfer

export * from './src/transfer'
