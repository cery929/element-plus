import { withInstall } from '@kn-ui/utils'
import CheckTag from './src/check-tag.vue'

import type { SFCWithInstall } from '@kn-ui/utils'

export const ElCheckTag: SFCWithInstall<typeof CheckTag> = withInstall(CheckTag)
export default ElCheckTag

export * from './src/check-tag'
