import { withInstall } from '@kn-ui/utils'
import Input from './src/input.vue'

import type { SFCWithInstall } from '@kn-ui/utils'

export const ElInput: SFCWithInstall<typeof Input> = withInstall(Input)
export default ElInput

export * from './src/input'
export type { InputInstance } from './src/instance'
