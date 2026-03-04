import { withInstall, withNoopInstall } from '@kn-ui/utils'
import Splitter from './src/splitter.vue'
import SplitPanel from './src/split-panel.vue'

import type { SFCWithInstall } from '@kn-ui/utils'

export const ElSplitter: SFCWithInstall<typeof Splitter> & {
  SplitPanel: typeof SplitPanel
} = withInstall(Splitter, {
  SplitPanel,
})
export default ElSplitter

export const ElSplitterPanel: SFCWithInstall<typeof SplitPanel> =
  withNoopInstall(SplitPanel)

export * from './src/splitter'
export * from './src/split-panel'
