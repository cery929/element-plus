import { withInstall } from '@kn-ui/utils'
import Pagination from './src/pagination'

import type { SFCWithInstall } from '@kn-ui/utils'

export const ElPagination: SFCWithInstall<typeof Pagination> =
  withInstall(Pagination)
export default ElPagination

export * from './src/pagination'
export * from './src/constants'
