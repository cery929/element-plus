import { withInstall } from '@cery929-ui/utils'
import Autocomplete from './src/autocomplete.vue'

import type { SFCWithInstall } from '@cery929-ui/utils'

export const ElAutocomplete: SFCWithInstall<typeof Autocomplete> =
  withInstall(Autocomplete)

export default ElAutocomplete

export * from './src/autocomplete'
