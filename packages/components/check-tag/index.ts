import { withInstall } from '@cery929-ui/utils'
import CheckTag from './src/check-tag.vue'

import type { SFCWithInstall } from '@cery929-ui/utils'

export const ElCheckTag: SFCWithInstall<typeof CheckTag> = withInstall(CheckTag)
export default ElCheckTag

export * from './src/check-tag'
