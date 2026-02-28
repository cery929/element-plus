import { withInstall } from '@cery929-ui/utils'
import DatePicker from './src/date-picker'

import type { SFCWithInstall } from '@cery929-ui/utils'

export const ElDatePicker: SFCWithInstall<typeof DatePicker> =
  withInstall(DatePicker)

export default ElDatePicker
export * from './src/props'
export type { DatePickerInstance } from './src/instance'
