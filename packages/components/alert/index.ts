import { withInstall } from '@cery929-ui/utils'
import Alert from './src/alert.vue'

import type { SFCWithInstall } from '@cery929-ui/utils'

export const ElAlert: SFCWithInstall<typeof Alert> = withInstall(Alert)
export default ElAlert

export * from './src/alert'
export type { AlertInstance } from './src/instance'
