import { withInstall } from '@cery929-ui/utils'
import Switch from './src/switch.vue'

import type { SFCWithInstall } from '@cery929-ui/utils'

export const ElSwitch: SFCWithInstall<typeof Switch> = withInstall(Switch)
export default ElSwitch

export * from './src/switch'
