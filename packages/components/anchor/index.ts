import { withInstall, withNoopInstall } from '@kn-ui/utils'
import Anchor from './src/anchor.vue'
import AnchorLink from './src/anchor-link.vue'

import type { SFCWithInstall } from '@kn-ui/utils'

export const ElAnchor: SFCWithInstall<typeof Anchor> & {
  AnchorLink: typeof AnchorLink
} = withInstall(Anchor, {
  AnchorLink,
})
export const ElAnchorLink: SFCWithInstall<typeof AnchorLink> =
  withNoopInstall(AnchorLink)
export default ElAnchor

export * from './src/anchor'
