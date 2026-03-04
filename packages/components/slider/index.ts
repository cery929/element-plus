import { withInstall } from '@kn-ui/utils'
import Slider from './src/slider.vue'

import type { SFCWithInstall } from '@kn-ui/utils'

export const ElSlider: SFCWithInstall<typeof Slider> = withInstall(Slider)
export default ElSlider

export * from './src/slider'
export * from './src/constants'
