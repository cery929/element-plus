import { withInstall } from '@kn-ui/utils'
import Select from './src/select.vue'

import type { SFCWithInstall } from '@kn-ui/utils'

export const ElSelectV2: SFCWithInstall<typeof Select> = withInstall(Select)
export default ElSelectV2

export * from './src/token'
