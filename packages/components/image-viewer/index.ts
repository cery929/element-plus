import { withInstall } from '@kn-ui/utils'
import ImageViewer from './src/image-viewer.vue'

import type { SFCWithInstall } from '@kn-ui/utils'

export const ElImageViewer: SFCWithInstall<typeof ImageViewer> =
  withInstall(ImageViewer)
export default ElImageViewer

export * from './src/image-viewer'
