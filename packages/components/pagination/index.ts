import { withInstall } from '@cery929-ui/utils'
import Pagination from './src/pagination'

import type { SFCWithInstall } from '@cery929-ui/utils'

export const ElPagination: SFCWithInstall<typeof Pagination> =
  withInstall(Pagination)
export default ElPagination

export * from './src/pagination'
export * from './src/constants'
