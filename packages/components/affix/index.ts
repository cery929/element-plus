import { withInstall } from '@kn-ui/utils'
import Affix from './src/affix.vue'

import type { SFCWithInstall } from '@kn-ui/utils'

export const ElAffix: SFCWithInstall<typeof Affix> = withInstall(Affix)
export default ElAffix

export * from './src/affix'
