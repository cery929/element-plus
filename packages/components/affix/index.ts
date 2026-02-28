import { withInstall } from '@cery929-ui/utils'
import Affix from './src/affix.vue'

import type { SFCWithInstall } from '@cery929-ui/utils'

export const ElAffix: SFCWithInstall<typeof Affix> = withInstall(Affix)
export default ElAffix

export * from './src/affix'
