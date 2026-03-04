import { withInstall } from '@kn-ui/utils'
import Transfer from './src/transfer.vue'

import type { SFCWithInstall } from '@kn-ui/utils'

export const ElTransfer: SFCWithInstall<typeof Transfer> = withInstall(Transfer)
export default ElTransfer

export * from './src/transfer'
