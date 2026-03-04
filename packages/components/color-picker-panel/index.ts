import { withInstall } from '@kn-ui/utils'
import ColorPickerPanel from './src/color-picker-panel.vue'

import type { SFCWithInstall } from '@kn-ui/utils'

export const ElColorPickerPanel: SFCWithInstall<typeof ColorPickerPanel> =
  withInstall(ColorPickerPanel)
export default ElColorPickerPanel

export * from './src/color-picker-panel'
