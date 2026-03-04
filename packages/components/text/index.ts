import { withInstall } from '@kn-ui/utils'
import Text from './src/text.vue'

import type { SFCWithInstall } from '@kn-ui/utils'

export const ElText: SFCWithInstall<typeof Text> = withInstall(Text)
export default ElText

export * from './src/text'
