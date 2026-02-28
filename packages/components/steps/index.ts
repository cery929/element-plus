import { withInstall, withNoopInstall } from '@cery929-ui/utils'
import Steps from './src/steps.vue'
import Step from './src/item.vue'

import type { SFCWithInstall } from '@cery929-ui/utils'

export const ElSteps: SFCWithInstall<typeof Steps> & {
  Step: typeof Step
} = withInstall(Steps, {
  Step,
})
export default ElSteps
export const ElStep: SFCWithInstall<typeof Step> = withNoopInstall(Step)

export * from './src/item'
export * from './src/steps'
export * from './src/tokens'
