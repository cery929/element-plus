import { withInstall } from '@cery929-ui/utils'
import ColorPicker from './src/color-picker.vue'

import type { SFCWithInstall } from '@cery929-ui/utils'

export const ElColorPicker: SFCWithInstall<typeof ColorPicker> =
  withInstall(ColorPicker)
export default ElColorPicker

export * from './src/color-picker'
