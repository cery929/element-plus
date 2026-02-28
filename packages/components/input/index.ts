import { withInstall } from '@cery929-ui/utils'
import Input from './src/input.vue'

import type { SFCWithInstall } from '@cery929-ui/utils'

export const ElInput: SFCWithInstall<typeof Input> = withInstall(Input)
export default ElInput

export * from './src/input'
export type { InputInstance } from './src/instance'
