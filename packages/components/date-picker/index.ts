import { withInstall } from '@kn-ui/utils'
import DatePicker from './src/date-picker'

import type { SFCWithInstall } from '@kn-ui/utils'

export const ElDatePicker: SFCWithInstall<typeof DatePicker> =
  withInstall(DatePicker)

export default ElDatePicker
export * from './src/props'
export type { DatePickerInstance } from './src/instance'
