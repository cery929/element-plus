import { withInstall } from '@kn-ui/utils'
import Mention from './src/mention.vue'

import type { SFCWithInstall } from '@kn-ui/utils'

export const ElMention: SFCWithInstall<typeof Mention> = withInstall(Mention)
export default ElMention

export * from './src/mention'
