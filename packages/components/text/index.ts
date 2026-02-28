import { withInstall } from '@cery929-ui/utils'
import Text from './src/text.vue'

import type { SFCWithInstall } from '@cery929-ui/utils'

export const ElText: SFCWithInstall<typeof Text> = withInstall(Text)
export default ElText

export * from './src/text'
