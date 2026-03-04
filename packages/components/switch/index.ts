import { withInstall } from '@kn-ui/utils'
import Switch from './src/switch.vue'

import type { SFCWithInstall } from '@kn-ui/utils'

export const ElSwitch: SFCWithInstall<typeof Switch> = withInstall(Switch)
export default ElSwitch

export * from './src/switch'
