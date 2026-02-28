import { withInstall } from '@cery929-ui/utils'
import CollapseTransition from './src/collapse-transition.vue'

import type { SFCWithInstall } from '@cery929-ui/utils'

export const ElCollapseTransition: SFCWithInstall<typeof CollapseTransition> =
  withInstall(CollapseTransition)

export default ElCollapseTransition
