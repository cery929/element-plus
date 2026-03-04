import { withInstall } from '@kn-ui/utils'
import Teleport from './src/teleport.vue'

import type { SFCWithInstall } from '@kn-ui/utils'

export const ElTeleport: SFCWithInstall<typeof Teleport> = withInstall(Teleport)

export default ElTeleport

export * from './src/teleport'
