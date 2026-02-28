import { withInstall } from '@cery929-ui/utils'
import Drawer from './src/drawer.vue'

import type { SFCWithInstall } from '@cery929-ui/utils'

export const ElDrawer: SFCWithInstall<typeof Drawer> = withInstall(Drawer)
export default ElDrawer

export * from './src/drawer'
