import { withInstall } from '@kn-ui/utils'
import Autocomplete from './src/autocomplete.vue'

import type { SFCWithInstall } from '@kn-ui/utils'

export const ElAutocomplete: SFCWithInstall<typeof Autocomplete> =
  withInstall(Autocomplete)

export default ElAutocomplete

export * from './src/autocomplete'
