import { withInstall } from '@kn-ui/utils'
import PageHeader from './src/page-header.vue'

import type { SFCWithInstall } from '@kn-ui/utils'

export const ElPageHeader: SFCWithInstall<typeof PageHeader> =
  withInstall(PageHeader)
export default ElPageHeader

export * from './src/page-header'
