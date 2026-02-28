import { withInstall } from '@cery929-ui/utils'
import Badge from './src/badge.vue'

import type { SFCWithInstall } from '@cery929-ui/utils'

export const ElBadge: SFCWithInstall<typeof Badge> = withInstall(Badge)
export default ElBadge

export * from './src/badge'
export type { BadgeInstance } from './src/instance'
