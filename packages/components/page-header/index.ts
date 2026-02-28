import { withInstall } from '@cery929-ui/utils'
import PageHeader from './src/page-header.vue'

import type { SFCWithInstall } from '@cery929-ui/utils'

export const ElPageHeader: SFCWithInstall<typeof PageHeader> =
  withInstall(PageHeader)
export default ElPageHeader

export * from './src/page-header'
