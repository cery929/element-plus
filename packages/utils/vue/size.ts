import { componentSizeMap } from '@kn-ui/constants'

import type { ComponentSize } from '@kn-ui/constants'

export const getComponentSize = (size?: ComponentSize) => {
  return componentSizeMap[size || 'default']
}
