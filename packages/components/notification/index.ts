import { withInstallFunction } from '@cery929-ui/utils'
import Notify from './src/notify'

export const ElNotification = withInstallFunction(Notify, '$notify')
export default ElNotification

export * from './src/notification'
