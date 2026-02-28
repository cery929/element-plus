import { withInstall } from '@cery929-ui/utils'
import ImageViewer from './src/image-viewer.vue'

import type { SFCWithInstall } from '@cery929-ui/utils'

export const ElImageViewer: SFCWithInstall<typeof ImageViewer> =
  withInstall(ImageViewer)
export default ElImageViewer

export * from './src/image-viewer'
