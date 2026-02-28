import { withInstall } from '@cery929-ui/utils'
import ColorPickerPanel from './src/color-picker-panel.vue'

import type { SFCWithInstall } from '@cery929-ui/utils'

export const ElColorPickerPanel: SFCWithInstall<typeof ColorPickerPanel> =
  withInstall(ColorPickerPanel)
export default ElColorPickerPanel

export * from './src/color-picker-panel'
