import { withInstall } from '@kn-ui/utils'
import CollapseTransition from './src/collapse-transition.vue'

import type { SFCWithInstall } from '@kn-ui/utils'

export const ElCollapseTransition: SFCWithInstall<typeof CollapseTransition> =
  withInstall(CollapseTransition)

export default ElCollapseTransition
