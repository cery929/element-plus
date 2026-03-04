import { withInstall } from '@kn-ui/utils'
import Upload from './src/upload.vue'

import type { SFCWithInstall } from '@kn-ui/utils'

export const ElUpload: SFCWithInstall<typeof Upload> = withInstall(Upload)
export default ElUpload

export * from './src/upload'
export * from './src/upload-content'
export * from './src/upload-list'
export * from './src/upload-dragger'
export * from './src/constants'
