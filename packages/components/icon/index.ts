import { withInstall } from '@kn-ui/utils'
import Icon from './src/icon.vue'

import type { SFCWithInstall } from '@kn-ui/utils'

export const ElIcon: SFCWithInstall<typeof Icon> = withInstall(Icon)
export default ElIcon

export * from './src/icon'
