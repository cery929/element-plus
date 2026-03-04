import { withInstall } from '@kn-ui/utils'
import InputNumber from './src/input-number.vue'

import type { SFCWithInstall } from '@kn-ui/utils'

export const ElInputNumber: SFCWithInstall<typeof InputNumber> =
  withInstall(InputNumber)

export default ElInputNumber
export * from './src/input-number'
