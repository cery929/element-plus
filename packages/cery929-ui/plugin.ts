import { ElInfiniteScroll } from '@cery929-ui/components/infinite-scroll'
import { ElLoading } from '@cery929-ui/components/loading'
import { ElMessage } from '@cery929-ui/components/message'
import { ElMessageBox } from '@cery929-ui/components/message-box'
import { ElNotification } from '@cery929-ui/components/notification'
import { ElPopoverDirective } from '@cery929-ui/components/popover'

import type { Plugin } from 'vue'

export default [
  ElInfiniteScroll,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification,
  ElPopoverDirective,
] as Plugin[]
