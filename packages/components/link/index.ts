import { withInstall } from '@kn-ui/utils'
import Link from './src/link.vue'

import type { SFCWithInstall } from '@kn-ui/utils'

export const ElLink: SFCWithInstall<typeof Link> = withInstall(Link)
export default ElLink

export * from './src/link'
