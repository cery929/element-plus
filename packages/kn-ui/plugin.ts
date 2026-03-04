import { ElInfiniteScroll } from '@kn-ui/components/infinite-scroll'
import { ElLoading } from '@kn-ui/components/loading'
import { ElMessage } from '@kn-ui/components/message'
import { ElMessageBox } from '@kn-ui/components/message-box'
import { ElNotification } from '@kn-ui/components/notification'
import { ElPopoverDirective } from '@kn-ui/components/popover'

import type { Plugin } from 'vue'

export default [
  ElInfiniteScroll,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification,
  ElPopoverDirective,
] as Plugin[]
