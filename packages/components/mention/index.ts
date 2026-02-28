import { withInstall } from '@cery929-ui/utils'
import Mention from './src/mention.vue'

import type { SFCWithInstall } from '@cery929-ui/utils'

export const ElMention: SFCWithInstall<typeof Mention> = withInstall(Mention)
export default ElMention

export * from './src/mention'
