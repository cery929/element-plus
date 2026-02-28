import { withInstall, withNoopInstall } from '@cery929-ui/utils'
import Avatar from './src/avatar.vue'
import AvatarGroup from './src/avatar-group'

import type { SFCWithInstall } from '@cery929-ui/utils'

export const ElAvatar: SFCWithInstall<typeof Avatar> & {
  AvatarGroup: typeof AvatarGroup
} = withInstall(Avatar, {
  AvatarGroup,
})
export const ElAvatarGroup: SFCWithInstall<typeof AvatarGroup> =
  withNoopInstall(AvatarGroup)
export default ElAvatar

export * from './src/avatar'
export * from './src/constants'
export * from './src/avatar-group-props'
export type { AvatarInstance, AvatarGroupInstance } from './src/instance'
