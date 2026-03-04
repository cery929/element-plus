import { withInstall } from '@kn-ui/utils'
import Image from './src/image.vue'

import type { SFCWithInstall } from '@kn-ui/utils'

export const ElImage: SFCWithInstall<typeof Image> = withInstall(Image)
export default ElImage

export * from './src/image'
