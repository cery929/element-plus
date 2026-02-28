import { componentSizeMap } from '@cery929-ui/constants'

import type { ComponentSize } from '@cery929-ui/constants'

export const getComponentSize = (size?: ComponentSize) => {
  return componentSizeMap[size || 'default']
}
